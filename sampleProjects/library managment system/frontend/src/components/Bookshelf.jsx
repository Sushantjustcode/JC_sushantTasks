import React, { useState, useCallback } from 'react';
import BookSpine from './BookSpine';

export default function Bookshelf({ 
  books, 
  onSelectBook, 
  onEditBook,
  onDeleteBook,
  onAddBookOpen
}) {
  const BOOKS_PER_SHELF = 6;
  const shelves = [];

  // Track which book is currently "pulled out" of the shelf
  const [pulledBookId, setPulledBookId] = useState(null);
  // Track which book is animating back (push-back animation)
  const [pushingBackId, setPushingBackId] = useState(null);
  
  if (books.length === 0) {
    shelves.push([]);
  } else {
    for (let i = 0; i < books.length; i += BOOKS_PER_SHELF) {
      shelves.push(books.slice(i, i + BOOKS_PER_SHELF));
    }
  }

  // Handle book spine click — toggle pull-out / push-back
  const handleShelfSelect = useCallback((book) => {
    if (pulledBookId === book.id) {
      // Same book clicked again → push it back
      setPushingBackId(book.id);
      setPulledBookId(null);
      // Clear push-back animation class after animation ends
      setTimeout(() => setPushingBackId(null), 450);
    } else {
      // Different book (or none selected) → push back previous, pull out new
      if (pulledBookId) {
        setPushingBackId(pulledBookId);
        setTimeout(() => setPushingBackId(null), 450);
      }
      setPulledBookId(book.id);
    }
  }, [pulledBookId]);

  // Handle "Read" action from the action dock — opens the modal
  const handleReadBook = useCallback((book) => {
    onSelectBook(book);
  }, [onSelectBook]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Real Architectural Bookshelf Unit */}
      <div className="relative rounded-xl real-shelf-unit flex overflow-hidden border border-[#ded5c7]">
        
        {/* Left Solid Wood Upright Side Panel */}
        <div className="w-4 sm:w-6 shrink-0 shelf-side-pillar" />

        {/* Shelf Interior Bay */}
        <div className="flex-1 flex flex-col py-6 px-4 sm:px-8 gap-10 bg-[#faf8f4] theme-candlelight:bg-[#151109]">
          {books.length === 0 ? (
            <div className="py-24 text-center flex flex-col items-center justify-center">
              <p className="text-sm font-serif text-stone-400 mb-3">Shelf is currently empty</p>
              <button
                onClick={onAddBookOpen}
                className="text-xs font-semibold text-stone-600 hover:text-stone-900 underline cursor-pointer"
              >
                Add a new book
              </button>
            </div>
          ) : (
            shelves.map((shelfBooks, shelfIndex) => (
              <div key={`shelf-${shelfIndex}`} className="relative flex flex-col">
                
                {/* 3D Perspective Container for books on this shelf */}
                <div className="shelf-3d-perspective">
                  <div className="flex items-end justify-start gap-3 sm:gap-5 px-3 sm:px-6 pt-4 min-h-[280px] overflow-x-auto overflow-y-visible scrollbar-none z-10 preserve-3d">
                    {shelfBooks.map((book) => (
                      <BookSpine
                        key={book.id}
                        book={book}
                        isPulledOut={pulledBookId === book.id}
                        isPushingBack={pushingBackId === book.id}
                        onShelfSelect={handleShelfSelect}
                        onSelect={handleReadBook}
                        onEditBook={onEditBook}
                        onDeleteBook={onDeleteBook}
                      />
                    ))}
                  </div>
                </div>

                {/* The Solid Oak Shelf Plank with 3D Depth & Bevel */}
                <div className="relative w-full z-20">
                  {/* Top Wooden Board Surface with highlight */}
                  <div className="h-4 real-shelf-wood rounded-t-[1px]" />
                  {/* Front Wood Shelf Lip / Edge */}
                  <div className="h-2.5 real-shelf-lip shadow-xs" />
                  {/* Deep Recessed Shadow underneath the shelf */}
                  <div className="h-5 real-shelf-shadow pointer-events-none" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Solid Wood Upright Side Panel */}
        <div className="w-4 sm:w-6 shrink-0 shelf-side-pillar" />
      </div>
    </div>
  );
}
