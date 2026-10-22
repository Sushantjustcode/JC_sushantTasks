import React, { useState, useEffect, useMemo } from 'react';
import AmbientCanvas from './components/AmbientCanvas';
import LibraryHall from './components/LibraryHall';
import Bookshelf from './components/Bookshelf';
import BookModal from './components/BookModal';
import AddBookModal from './components/AddBookModal';
import EditBookModal from './components/EditBookModal';
import { INITIAL_BOOKS } from './data/defaultBooks';
import { soundFX } from './utils/audio';

const API_BASE = 'http://localhost:5000/api';

export default function App() {
  const [books, setBooks] = useState(() => {
    const cached = localStorage.getItem('athenaeum_books_cache_v4');
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        console.error('Failed to parse cached books:', e);
      }
    }
    return INITIAL_BOOKS;
  });

  const [selectedBook, setSelectedBook] = useState(null);
  const [editingBook, setEditingBook] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [ambiance, setAmbiance] = useState('daylight'); // 'daylight' | 'candlelight'
  const [backendConnected, setBackendConnected] = useState(false);

  // Sync ambiance with document.body class
  useEffect(() => {
    if (ambiance === 'candlelight') {
      document.body.classList.add('theme-candlelight');
      document.body.classList.remove('theme-daylight');
    } else {
      document.body.classList.remove('theme-candlelight');
      document.body.classList.add('theme-daylight');
    }
  }, [ambiance]);

  // Sync with backend on mount
  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch(`${API_BASE}/books`);
        if (res.ok) {
          const data = await res.json();
          if (data.data && Array.isArray(data.data) && data.data.length > 0) {
            setBooks(data.data);
            setBackendConnected(true);
            localStorage.setItem('athenaeum_books_cache_v3', JSON.stringify(data.data));
          }
        }
      } catch (err) {
        console.warn('Backend server not reached yet, using local library storage:', err.message);
        setBackendConnected(false);
      }
    }
    fetchBooks();
  }, []);

  // Save to cache
  useEffect(() => {
    localStorage.setItem('athenaeum_books_cache_v4', JSON.stringify(books));
  }, [books]);

  // Keep selectedBook updated if books array changes
  useEffect(() => {
    if (selectedBook) {
      const updated = books.find(b => b.id === selectedBook.id);
      if (updated) setSelectedBook(updated);
    }
  }, [books]);

  // ADD BOOK
  const handleAddBook = async (newBookData) => {
    const tempId = `book-${Date.now()}`;
    const newBook = {
      id: tempId,
      ...newBookData,
      height: 235 + Math.floor(Math.random() * 30),
      thickness: newBookData.thickness || Math.min(56, Math.max(34, Math.floor(newBookData.pages / 7)))
    };

    setBooks(prev => [newBook, ...prev]);
    if (backendConnected) {
      try {
        const res = await fetch(`${API_BASE}/books`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newBook)
        });
        if (res.ok) {
          const data = await res.json();
          if (data.data) {
            setBooks(prev => prev.map(b => b.id === tempId ? data.data : b));
          }
        }
      } catch (err) {
        console.error('Error syncing added book to backend:', err);
      }
    }
  };

  // EDIT BOOK
  const handleSaveEditBook = async (updatedBook) => {
    setBooks(prev => prev.map(b => b.id === updatedBook.id ? updatedBook : b));
    if (selectedBook && selectedBook.id === updatedBook.id) {
      setSelectedBook(updatedBook);
    }

    if (backendConnected) {
      try {
        await fetch(`${API_BASE}/books/${updatedBook.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedBook)
        });
      } catch (err) {
        console.error('Error syncing edited book to backend:', err);
      }
    }
  };

  // DELETE BOOK
  const handleDeleteBook = async (bookId) => {
    setBooks(prev => prev.filter(b => b.id !== bookId));
    if (selectedBook && selectedBook.id === bookId) {
      setSelectedBook(null);
    }

    if (backendConnected) {
      try {
        await fetch(`${API_BASE}/books/${bookId}`, {
          method: 'DELETE'
        });
      } catch (err) {
        console.error('Error deleting book on backend:', err);
      }
    }
  };

  // RANDOM BOOK DISCOVERY (Creative feature)
  const handleRandomPick = () => {
    const list = filteredBooks.length > 0 ? filteredBooks : books;
    if (list.length === 0) return;
    soundFX.playBookPickUp();
    const randomIndex = Math.floor(Math.random() * list.length);
    setSelectedBook(list[randomIndex]);
  };

  // TOGGLE AMBIANCE (Creative feature: Daylight vs Candlelight Dusk)
  const handleToggleAmbiance = () => {
    soundFX.playShelfSlide(0.1);
    setAmbiance(prev => prev === 'daylight' ? 'candlelight' : 'daylight');
  };

  // FILTER & SORT BOOKS LIVE
  const filteredBooks = useMemo(() => {
    let result = books.filter(book => {
      if (activeCategory !== 'All' && book.category?.toLowerCase() !== activeCategory.toLowerCase()) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = book.title?.toLowerCase().includes(q);
        const matchAuthor = book.author?.toLowerCase().includes(q);
        const matchCategory = book.category?.toLowerCase().includes(q);
        const matchTags = book.tags && book.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchAuthor && !matchCategory && !matchTags) {
          return false;
        }
      }
      return true;
    });

    if (sortBy === 'thickness') {
      result.sort((a, b) => (b.thickness || b.pages || 0) - (a.thickness || a.pages || 0));
    } else if (sortBy === 'year') {
      result.sort((a, b) => (b.year || 0) - (a.year || 0));
    } else if (sortBy === 'title') {
      result.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    }

    return result;
  }, [books, activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden font-sans antialiased transition-colors duration-500">

      {/* Dynamic Three.js Golden Motes / Candlelight Embers */}
      <AmbientCanvas ambiance={ambiance} />

      {/* Minimalist Header with Ambiance & Random Pick */}
      <LibraryHall
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        ambiance={ambiance}
        onToggleAmbiance={handleToggleAmbiance}
        onRandomPick={handleRandomPick}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Architectural Bookshelf */}
      <main className="flex-1 z-10 flex flex-col justify-center">
        <Bookshelf
          books={filteredBooks}
          onSelectBook={(book) => setSelectedBook(book)}
          onEditBook={(book) => setEditingBook(book)}
          onDeleteBook={handleDeleteBook}
          onAddBookOpen={() => setIsAddModalOpen(true)}
        />
      </main>

      {/* Pure Reading Spotlight Modal */}
      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}

      {/* Add New Book Modal with Width & Texture Sliders */}
      <AddBookModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddBook={handleAddBook}
      />

      {/* Edit Book Modal with Width & Texture Sliders */}
      <EditBookModal
        book={editingBook}
        isOpen={Boolean(editingBook)}
        onClose={() => setEditingBook(null)}
        onSaveBook={handleSaveEditBook}
      />

      {/* Minimalist Footnote */}
      <footer className="w-full py-5 px-4 z-10 text-[11px] opacity-40 max-w-5xl mx-auto flex items-center justify-between">
        <span>Athenaeum Folio</span>
        <span className="font-mono text-[10px]">
          {books.length} volumes · {ambiance} mode
        </span>
      </footer>
    </div>
  );
}
