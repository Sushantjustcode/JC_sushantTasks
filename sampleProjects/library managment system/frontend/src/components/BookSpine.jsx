import React, { useState, useEffect } from 'react';
import { soundFX } from '../utils/audio';
import { BookOpen, Pencil, Trash2, ArrowDownToLine } from 'lucide-react';

export default function BookSpine({ 
  book, 
  isPulledOut,
  isPushingBack,
  onShelfSelect,
  onSelect, 
  onEditBook, 
  onDeleteBook 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasFloatIdle, setHasFloatIdle] = useState(false);

  // After pull-out animation ends, transition to gentle float
  useEffect(() => {
    if (isPulledOut) {
      const timer = setTimeout(() => setHasFloatIdle(true), 560);
      return () => clearTimeout(timer);
    } else {
      setHasFloatIdle(false);
    }
  }, [isPulledOut]);

  const handleMouseEnter = () => {
    if (!isPulledOut) {
      setIsHovered(true);
      soundFX.playShelfSlide(0.06);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Click the spine — pull out or push back
  const handleClickSpine = () => {
    if (isPulledOut) {
      // Already pulled out — push it back
      soundFX.playShelfSlide(0.12);
      onShelfSelect(book);
    } else {
      // Pull it out
      soundFX.playBookPickUp();
      onShelfSelect(book);
    }
  };

  // Read action from dock — opens the modal
  const handleReadClick = (e) => {
    e.stopPropagation();
    soundFX.playBookOpen();
    onSelect(book);
  };

  const getFontFamily = (style) => {
    switch (style) {
      case 'cormorant': return 'font-cormorant tracking-wider';
      case 'cinzel': return 'font-cinzel tracking-widest';
      case 'mono': return 'font-mono-tech tracking-tight';
      case 'playfair': default: return 'font-playfair tracking-wide';
    }
  };

  const getTextureClass = (texture) => {
    switch (texture) {
      case 'linen': return 'texture-linen';
      case 'marbled': return 'texture-marbled';
      case 'goldleaf': return 'texture-goldleaf';
      case 'velvet': return 'texture-velvet';
      case 'cyber': return 'texture-cyber';
      case 'botanical': return 'texture-botanical';
      case 'washi': return 'texture-washi';
      case 'leather': default: return 'texture-leather';
    }
  };

  const height = book.height ? Math.min(270, Math.max(225, book.height)) : 245;
  const width = book.thickness ? Math.min(65, Math.max(30, book.thickness)) : 40;

  // Determine animation class
  const getAnimationClass = () => {
    if (isPulledOut && hasFloatIdle) return 'book-spine-selected float-idle';
    if (isPulledOut) return 'book-spine-selected';
    if (isPushingBack) return 'book-spine-pushing-back';
    return '';
  };

  // Show action dock if pulled out OR hovered (but pulled out takes priority with persistent dock)
  const showActionDock = isPulledOut || isHovered;

  return (
    <div 
      className="relative flex flex-col items-center select-none group"
      style={{ zIndex: isPulledOut ? 50 : isHovered ? 40 : 10 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Put-back hint label when pulled out */}
      {isPulledOut && (
        <div className="put-back-hint">↓ tap to put back</div>
      )}

      {/* 3D UPRIGHT BOOK SPINE */}
      <div
        onClick={handleClickSpine}
        className={`relative transition-all duration-300 ease-out cursor-pointer preserve-3d ${getAnimationClass()}`}
        style={{
          height: `${height}px`,
          width: `${width}px`,
          // Only apply hover transform when NOT pulled out and NOT pushing back
          ...(!isPulledOut && !isPushingBack ? {
            transform: isHovered
              ? 'translateY(-14px) scale(1.025)'
              : 'translateY(0) scale(1)',
          } : {}),
        }}
      >
        {/* Book Spine Exterior with Selected Material Texture */}
        <div
          className={`w-full h-full rounded-t-[4px] rounded-b-[2px] book-spine-tactile flex flex-col justify-between items-center py-3.5 px-1 relative overflow-hidden transition-colors border-x border-t border-white/20 ${getTextureClass(book.coverTexture)}`}
          style={{
            backgroundColor: book.spineColor || '#2A362B',
          }}
        >
          {/* Spotlight shimmer overlay for pulled-out books */}
          <div className="book-spotlight-shimmer" />

          {/* Subtle Spine Emboss Cord Lines */}
          <div className="absolute top-5 left-1 right-1 h-[1px] bg-white/35" />
          <div className="absolute bottom-5 left-1 right-1 h-[1px] bg-white/35" />

          {/* Top Initial Emblem */}
          <div className="pt-0.5 z-10 text-center">
            <div className="w-4.5 h-4.5 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center mx-auto shadow-xs">
              <span className="text-[9px] font-serif font-bold text-white/90">
                {book.category?.charAt(0) || 'B'}
              </span>
            </div>
          </div>

          {/* Spine Title & Author */}
          <div className="flex-1 flex flex-col items-center justify-center py-2 my-auto overflow-hidden z-10 w-full">
            <div 
              className={`[writing-mode:vertical-rl] rotate-180 text-center font-bold text-xs uppercase truncate max-h-[135px] ${getFontFamily(book.fontStyle)}`}
              style={{
                color: book.textColor || '#F3EAD8',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}
              title={book.title}
            >
              {book.title}
            </div>

            <div 
              className="[writing-mode:vertical-rl] rotate-180 text-[8.5px] font-medium tracking-wider truncate max-h-[55px] mt-2 opacity-85 text-white/85"
              title={book.author}
            >
              {book.author}
            </div>
          </div>

          {/* Bottom Pages Count */}
          <div className="pb-0.5 z-10">
            <span className="text-[8px] font-mono tracking-tighter text-white/70">
              {book.pages}p
            </span>
          </div>

          {/* Silk Bookmark Ribbon dangling slightly */}
          <div 
            className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-3.5 rounded-b-[1px] shadow-xs transition-transform duration-200"
            style={{
              backgroundColor: '#D97706',
              transform: isHovered || isPulledOut ? 'translateY(2px)' : 'translateY(0)'
            }}
          />
        </div>

        {/* Book Contact Shadow — deeper when pulled out */}
        {isPulledOut ? (
          <div className="book-depth-shadow" />
        ) : (
          <div 
            className="absolute -bottom-1.5 left-0.5 right-0.5 h-2.5 book-contact-shadow transition-all duration-300"
            style={{
              transform: isHovered ? 'scale(1.18)' : 'scale(1)'
            }}
          />
        )}

        {/* Golden Glow Ring when pulled out */}
        {isPulledOut && <div className="book-glow-ring" />}

        {/* ACTION DOCK — persistent when pulled out, hover-only otherwise */}
        <div 
          className={`absolute inset-0 rounded-t-[4px] rounded-b-[2px] flex flex-col items-center justify-center gap-2.5 p-1 transition-all duration-200 z-30 ${
            isPulledOut 
              ? 'book-action-dock-selected bg-stone-950/70'
              : isHovered 
                ? 'opacity-100 pointer-events-auto bg-stone-950/80' 
                : 'opacity-0 pointer-events-none bg-stone-950/80'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Read Button */}
          <button
            onClick={handleReadClick}
            className="w-7 h-7 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 flex items-center justify-center shadow-md transition-transform transform hover:scale-110 cursor-pointer"
            title="Open and Read"
          >
            <BookOpen className="w-3.5 h-3.5" />
          </button>

          {/* Edit Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEditBook(book);
            }}
            className="w-7 h-7 rounded-full bg-white hover:bg-stone-100 text-stone-800 flex items-center justify-center shadow-md transition-transform transform hover:scale-110 cursor-pointer"
            title="Edit Details"
          >
            <Pencil className="w-3.5 h-3.5" />
          </button>

          {/* Delete Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (window.confirm(`Remove "${book.title}" from library?`)) {
                onDeleteBook(book.id);
              }
            }}
            className="w-7 h-7 rounded-full bg-stone-800 hover:bg-rose-600 text-white flex items-center justify-center shadow-md transition-transform transform hover:scale-110 cursor-pointer"
            title="Delete Book"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>

          {/* Push Back Button — only when pulled out */}
          {isPulledOut && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                soundFX.playShelfSlide(0.12);
                onShelfSelect(book);
              }}
              className="w-7 h-7 rounded-full bg-amber-600/80 hover:bg-amber-500 text-white flex items-center justify-center shadow-md transition-transform transform hover:scale-110 cursor-pointer mt-0.5"
              title="Put back on shelf"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
