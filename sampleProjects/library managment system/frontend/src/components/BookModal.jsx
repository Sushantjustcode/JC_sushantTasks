import React from 'react';
import Book3DViewer from './Book3DViewer';

export default function BookModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      style={{ background: 'rgba(0,0,0,0.62)', backdropFilter: 'none', animation: 'fadeInUp 0.25s ease both' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Modal Stage Container - Pure, Zero Blur */}
      <div className="relative w-full max-w-5xl bg-[#fcfbf9] dark:bg-[#1c1411] border border-[#ddd4c4] dark:border-[#3a2518] rounded-2xl shadow-[0_40px_90px_-20px_rgba(0,0,0,0.45)] p-5 sm:p-8 flex flex-col z-10 my-auto">
        <Book3DViewer
          book={book}
          onCloseViewer={onClose}
        />
      </div>
    </div>
  );
}
