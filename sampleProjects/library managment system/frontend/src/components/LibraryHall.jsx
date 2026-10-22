import React, { useState } from 'react';
import { 
  Search, 
  Volume2, 
  VolumeX, 
  Plus, 
  Sparkles,
  Sun,
  Flame,
  Shuffle,
  ArrowUpDown
} from 'lucide-react';
import { CATEGORIES } from '../data/defaultBooks';
import { soundFX } from '../utils/audio';

export default function LibraryHall({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  onOpenAddModal,
  ambiance,
  onToggleAmbiance,
  onRandomPick,
  sortBy,
  onSortChange
}) {
  const [isMuted, setIsMuted] = useState(soundFX.muted);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const handleMuteToggle = () => {
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
  };

  const isCandlelight = ambiance === 'candlelight';

  return (
    <header className="w-full max-w-5xl mx-auto pt-8 pb-3 px-4 select-none z-20">
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#e8ded0] dark:border-[#3d2a1b]">
        
        {/* Minimalist Wordmark */}
        <div className="flex items-center gap-2.5">
          <span className="font-serif font-bold text-lg tracking-widest uppercase transition-colors">
            ATHENAEUM
          </span>
        </div>

        {/* Minimalist Categories */}
        <nav className="hidden md:flex items-center gap-6 text-xs tracking-wider">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  soundFX.playShelfSlide(0.06);
                  onCategoryChange(cat);
                }}
                className={`transition-colors cursor-pointer py-1 relative ${
                  isActive
                    ? 'font-bold opacity-100'
                    : 'opacity-40 hover:opacity-80'
                }`}
              >
                <span>{cat}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-current rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Minimalist Controls: Surprise Pick, Ambiance, Search, Add, Audio */}
        <div className="flex items-center gap-2">
          
          {/* 1. Surprise Bibliophile Pick */}
          <button
            onClick={onRandomPick}
            className="w-8 h-8 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer"
            title="Pick a random book from the shelf"
          >
            <Shuffle className="w-3.5 h-3.5" />
          </button>

          {/* 2. Ambiance Switcher: Daylight ☀️ vs Candlelight 🕯️ */}
          <button
            onClick={onToggleAmbiance}
            className="w-8 h-8 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer"
            title={isCandlelight ? 'Switch to Daylight' : 'Switch to Candlelight Dusk'}
          >
            {isCandlelight ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Flame className="w-4 h-4 text-amber-600" />
            )}
          </button>

          {/* 3. Subtle Sort Selector */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="w-8 h-8 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer"
              title="Organize Shelf"
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-10 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-1.5 shadow-xl text-xs z-50 whitespace-nowrap flex flex-col gap-1">
                {[
                  { id: 'default', label: 'Default Order' },
                  { id: 'thickness', label: 'Book Width / Thickness' },
                  { id: 'year', label: 'Publication Year' },
                  { id: 'title', label: 'Title (A → Z)' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onSortChange(s.id);
                      setIsSortOpen(false);
                      soundFX.playShelfSlide(0.08);
                    }}
                    className={`px-3 py-1 text-left rounded-lg transition cursor-pointer ${
                      sortBy === s.id
                        ? 'bg-stone-100 dark:bg-stone-800 font-bold'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4. Subtle Expanding Search */}
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center bg-white dark:bg-stone-900 border border-[#ded5c7] dark:border-stone-800 rounded-full px-3 py-1 shadow-xs animate-in fade-in zoom-in-95 duration-150">
                <Search className="w-3.5 h-3.5 opacity-40 mr-2" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Filter volumes..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="bg-transparent text-xs focus:outline-none w-32 sm:w-40"
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    onSearchChange('');
                  }}
                  className="opacity-40 hover:opacity-80 text-xs ml-1"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-8 h-8 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer"
                title="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* 5. Add Book Button (+) */}
          <button
            onClick={onOpenAddModal}
            className="w-8 h-8 rounded-full bg-stone-900 dark:bg-amber-400 text-white dark:text-stone-950 flex items-center justify-center shadow-xs transition cursor-pointer"
            title="Place New Book"
          >
            <Plus className="w-4 h-4" />
          </button>

          {/* 6. Sound Mute Toggle */}
          <button
            onClick={handleMuteToggle}
            className="w-8 h-8 rounded-full flex items-center justify-center opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Categories Row */}
      <div className="md:hidden flex items-center gap-3 overflow-x-auto py-2 scrollbar-none text-xs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundFX.playShelfSlide(0.06);
              onCategoryChange(cat);
            }}
            className={`whitespace-nowrap px-2.5 py-1 rounded-full ${
              activeCategory === cat
                ? 'bg-stone-900 dark:bg-amber-400 text-white dark:text-stone-950 font-semibold'
                : 'opacity-50 hover:opacity-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
}
