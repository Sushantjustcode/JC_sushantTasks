import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'data', 'books.json');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function readBooks() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading books.json:', err.message);
    return [];
  }
}

async function writeBooks(books) {
  await fs.writeFile(DATA_FILE, JSON.stringify(books, null, 2), 'utf-8');
}

// GET all books (with optional category & search filter)
app.get('/api/books', async (req, res) => {
  try {
    let books = await readBooks();
    const { category, search, sort } = req.query;

    if (category && category !== 'All') {
      books = books.filter(b => b.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      books = books.filter(b => 
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q) ||
        (b.tags && b.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    if (sort) {
      if (sort === 'title') books.sort((a, b) => a.title.localeCompare(b.title));
      else if (sort === 'author') books.sort((a, b) => a.author.localeCompare(b.author));
      else if (sort === 'year') books.sort((a, b) => b.year - a.year);
      else if (sort === 'rating') books.sort((a, b) => b.rating - a.rating);
      else if (sort === 'pages') books.sort((a, b) => b.pages - a.pages);
    }

    res.json({ success: true, count: books.length, data: books });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error reading books' });
  }
});

// GET single book
app.get('/api/books/:id', async (req, res) => {
  try {
    const books = await readBooks();
    const book = books.find(b => b.id === req.params.id);
    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
    res.json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// POST add new book
app.post('/api/books', async (req, res) => {
  try {
    const books = await readBooks();
    const newBook = {
      id: `book-${Date.now()}`,
      title: req.body.title || 'Untitled Work',
      author: req.body.author || 'Unknown Author',
      category: req.body.category || 'Classic Fiction',
      year: parseInt(req.body.year, 10) || new Date().getFullYear(),
      rating: parseFloat(req.body.rating) || 5.0,
      pages: parseInt(req.body.pages, 10) || 240,
      height: parseInt(req.body.height, 10) || (235 + Math.floor(Math.random() * 35)),
      thickness: parseInt(req.body.thickness, 10) || Math.min(56, Math.max(34, Math.floor((req.body.pages || 240) / 7))),
      spineColor: req.body.spineColor || '#2563eb',
      textColor: req.body.textColor || '#ffffff',
      coverTexture: req.body.coverTexture || 'leather',
      coverEmblem: req.body.coverEmblem || 'book',
      fontStyle: req.body.fontStyle || 'playfair',
      description: req.body.description || 'A timeless volume curated in the library.',
      tableOfContents: req.body.tableOfContents || ['Chapter I: The Beginning', 'Chapter II: The Journey', 'Chapter III: Reflection'],
      samplePages: req.body.samplePages && req.body.samplePages.length > 0
        ? req.body.samplePages
        : [
            {
              pageNumber: 1,
              title: 'Chapter I',
              content: req.body.description || 'The journey of this book began in silence, waiting for the curious mind to turn its first page.'
            },
            {
              pageNumber: 2,
              title: 'Passage',
              content: 'Between these covers lies a quiet world of contemplation and craft.'
            }
          ],
      tags: req.body.tags || [req.body.category || 'Books']
    };

    books.unshift(newBook);
    await writeBooks(books);

    res.status(201).json({ success: true, message: 'Book created successfully', data: newBook });
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ success: false, message: 'Failed to add book' });
  }
});

// PUT update book
app.put('/api/books/:id', async (req, res) => {
  try {
    const books = await readBooks();
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    books[index] = { ...books[index], ...req.body };
    await writeBooks(books);

    res.json({ success: true, message: 'Book updated successfully', data: books[index] });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update book' });
  }
});

// DELETE remove book
app.delete('/api/books/:id', async (req, res) => {
  try {
    let books = await readBooks();
    const initialLen = books.length;
    books = books.filter(b => b.id !== req.params.id);
    
    if (books.length === initialLen) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    await writeBooks(books);
    res.json({ success: true, message: 'Book removed from library' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete book' });
  }
});

app.listen(PORT, () => {
  console.log(`Library Backend running on http://localhost:${PORT}`);
});
