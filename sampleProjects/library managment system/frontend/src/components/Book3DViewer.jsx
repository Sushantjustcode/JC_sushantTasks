import React, { useState, useRef, useEffect, useCallback } from 'react';
import { soundFX } from '../utils/audio';
import {
  BookOpen, ChevronLeft, ChevronRight, X, RotateCcw, Bookmark
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   PAGE FLIP DIRECTION — RULES
   ─────────────────────────────────────────────────────────────
   NEXT (forward):
     • Leaf starts as the current RIGHT page
     • Pivots from its LEFT edge (= spine / center of book)
     • Sweeps LEFT-ward: rotateY 0° → -180°
     • Front face shows current right page
     • Back face (rotated 180°) shows the NEXT left page

   PREV (backward):
     • Leaf starts as the current LEFT page
     • Pivots from its RIGHT edge (= spine / center of book)
     • Sweeps RIGHT-ward: rotateY 0° → +180°
     • Front face shows current left page
     • Back face (rotated -180°) shows the PREV right page
   ───────────────────────────────────────────────────────────── */

const FLIP_MS = 650;  // page-turn duration
const OPEN_MS = 800;  // cover-open duration

function easeInOut(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
function easeOut3(t)  { return 1 - Math.pow(1 - t, 3); }

export default function Book3DViewer({ book, onCloseViewer }) {
  /* ── State ── */
  const [phase, setPhase]                 = useState('closed');  // 'closed' | 'open'
  const [coverAngle, setCoverAngle]       = useState(0);         // 0 = closed, -165 = fully open
  const [currentSpread, setCurrentSpread] = useState(0);
  const [flipping, setFlipping]           = useState(false);
  const [flipDir, setFlipDir]             = useState('next');
  const [leafAngle, setLeafAngle]         = useState(0);         // degrees
  const [isBookmarked, setIsBookmarked]   = useState(false);

  const rafRef   = useRef(null);
  const startRef = useRef(null);
  const targetSpread = useRef(0); // captured at flip start

  /* ── Page data ── */
  const pages = book.samplePages || [];
  const TOTAL_SPREADS = Math.max(1, Math.ceil(pages.length / 2));

  const getPage = (idx) => pages[idx] || {
    title: ['Preface', 'Chapter I', 'Chapter II', 'Chapter III', 'Epilogue'][idx % 5] ?? `Page ${idx + 1}`,
    content: idx === 0 ? (book.description || 'The story begins here…') : 'The narrative continues across these pages…'
  };

  // What's currently displayed (not during flip — during flip we still show current spread)
  const leftPage   = getPage(currentSpread * 2);
  const rightPage  = getPage(currentSpread * 2 + 1);
  const leftPageNum  = currentSpread * 2 + 1;
  const rightPageNum = currentSpread * 2 + 2;

  // Pages shown on the FLYING leaf
  // next: front = current right, back = next-spread left
  // prev: front = current left,  back = prev-spread right
  const flyFront = flipDir === 'next'
    ? rightPage
    : leftPage;
  const flyBack  = flipDir === 'next'
    ? getPage(targetSpread.current * 2)       // next left page
    : getPage(targetSpread.current * 2 + 1);  // prev right page

  /* ── Font / Texture helpers ── */
  const fontClass = { cormorant:'font-cormorant', cinzel:'font-cinzel', mono:'font-mono-tech' }[book.fontStyle] || 'font-playfair';
  const texClass  = { linen:'texture-linen', marbled:'texture-marbled', goldleaf:'texture-goldleaf',
                      velvet:'texture-velvet', cyber:'texture-cyber', botanical:'texture-botanical',
                      washi:'texture-washi' }[book.coverTexture] || 'texture-leather';

  /* ── Cover open / close (CSS transition driven) ── */
  const openBook = useCallback(() => {
    if (phase === 'open') return;
    soundFX.playBookOpen();
    setPhase('open');
    // Animate cover angle from 0 → -165 using rAF for smooth spring
    startRef.current = null;
    const animOpen = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const t = Math.min((ts - startRef.current) / OPEN_MS, 1);
      setCoverAngle(easeOut3(t) * -165);
      if (t < 1) rafRef.current = requestAnimationFrame(animOpen);
    };
    rafRef.current = requestAnimationFrame(animOpen);
  }, [phase]);

  const closeBook = useCallback(() => {
    if (phase === 'closed') return;
    soundFX.playBookClose();
    startRef.current = null;
    const animClose = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const t = Math.min((ts - startRef.current) / OPEN_MS, 1);
      setCoverAngle(easeOut3(t) * 165 - 165); // -165 → 0
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animClose);
      } else {
        setPhase('closed');
        setCoverAngle(0);
        setCurrentSpread(0);
      }
    };
    rafRef.current = requestAnimationFrame(animClose);
  }, [phase]);

  /* ── Page flip ── */
  const doFlip = useCallback((dir, nextSpread) => {
    if (flipping) return;
    soundFX.playPageTurn();
    targetSpread.current = nextSpread;
    setFlipDir(dir);
    setFlipping(true);
    // Initial angle: always 0° (leaf face-up in its starting position)
    setLeafAngle(0);
    startRef.current = null;

    const endAngle = dir === 'next' ? -180 : 180;

    const animate = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const t = Math.min((ts - startRef.current) / FLIP_MS, 1);
      setLeafAngle(easeInOut(t) * endAngle);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setLeafAngle(endAngle);
        // After leaf fully crosses, settle at new spread
        setTimeout(() => {
          setCurrentSpread(nextSpread);
          setFlipping(false);
          setLeafAngle(0);
        }, 20);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
  }, [flipping]);

  const goNext = useCallback(() => {
    if (!flipping && currentSpread < TOTAL_SPREADS - 1) doFlip('next', currentSpread + 1);
  }, [flipping, currentSpread, TOTAL_SPREADS, doFlip]);

  const goPrev = useCallback(() => {
    if (!flipping && currentSpread > 0) doFlip('prev', currentSpread - 1);
  }, [flipping, currentSpread, doFlip]);

  const goToSpread = useCallback((n) => {
    if (!flipping && n !== currentSpread) doFlip(n > currentSpread ? 'next' : 'prev', n);
  }, [flipping, currentSpread, doFlip]);

  /* ── Keyboard ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft')  goPrev();
      if (e.key === 'Escape')     onCloseViewer();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev, onCloseViewer]);

  /* ── Cleanup ── */
  useEffect(() => () => { cancelAnimationFrame(rafRef.current); }, []);

  /* ─────────────────────────────────────────────────────────── */

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto select-none">

      {/* ── Toolbar ── */}
      <div className="w-full flex items-center justify-between pb-3 mb-5 text-xs border-b border-stone-200/70 dark:border-stone-800">
        <div className="flex items-center gap-2 font-serif text-stone-800 dark:text-stone-200">
          <span className="font-bold text-sm">{book.title}</span>
          <span className="opacity-30">/</span>
          <span className="opacity-60 italic">{book.author}</span>
          {book.year && <span className="opacity-35 font-mono text-[10px]">{book.year}</span>}
        </div>

        <div className="flex items-center gap-3">
          {phase === 'open' && (
            <button
              onClick={() => { soundFX.playShelfSlide(0.07); setIsBookmarked(b => !b); }}
              className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-full transition cursor-pointer ${
                isBookmarked
                  ? 'text-amber-800 bg-amber-100 font-semibold'
                  : 'opacity-55 hover:opacity-100 hover:bg-stone-100'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
          )}

          {phase === 'open' ? (
            <button
              onClick={closeBook}
              className="flex items-center gap-1.5 text-xs text-stone-200 hover:text-stone-400 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Close Book</span>
            </button>
          ) : (
            <button
              onClick={openBook}
              className="flex items-center gap-1.5 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 px-4 py-1.5 rounded-full shadow transition active:scale-95 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Open Book</span>
            </button>
          )}

          <button
            onClick={onCloseViewer}
            className="w-7 h-7 rounded-full flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-stone-100 transition cursor-pointer"
            title="Return to shelf · Esc"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── 3D Stage ── */}
      <div className="relative w-full flex items-center justify-center" style={{ perspective: '2000px', minHeight: '520px' }}>

        {/* ================================================================ */}
        {/* CLOSED BOOK                                                       */}
        {/* ================================================================ */}
        {phase === 'closed' && (
          <div
            onClick={openBook}
            className="group relative cursor-pointer"
            style={{
              width: '300px', height: '450px',
              transformStyle: 'preserve-3d',
              transform: 'rotateY(-12deg) rotateX(3deg)',
              filter: 'drop-shadow(0 45px 55px rgba(0,0,0,0.28))',
              transition: 'filter 0.3s ease, transform 0.3s ease',
            }}
          >
            {/* Page block — right edge (spine pages visible) */}
            <div
              className="absolute right-[-13px] top-2 rounded-r-sm overflow-hidden"
              style={{
                width: '15px',
                height: 'calc(100% - 8px)',
                background: 'repeating-linear-gradient(to bottom,#f5efe4 0px,#f5efe4 1.5px,#e0d4be 1.5px,#e0d4be 3px)',
                borderRight: '1px solid #d4c8b0',
              }}
            />
            {/* Page block — bottom */}
            <div
              className="absolute bottom-[-10px] left-3 right-[-6px] rounded-b-sm overflow-hidden"
              style={{
                height: '12px',
                background: 'repeating-linear-gradient(to right,#f5efe4 0px,#f5efe4 1.5px,#e0d4be 1.5px,#e0d4be 3px)',
                borderBottom: '1px solid #d4c8b0',
              }}
            />

            {/* ── Front Cover ── */}
            <div
              className={`w-full h-full rounded-r-2xl rounded-l-sm relative p-7 flex flex-col justify-between items-center overflow-hidden border border-white/20 ${texClass}`}
              style={{
                backgroundColor: book.spineColor || '#2A362B',
                boxShadow: '0 20px 50px -10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.15)',
              }}
            >
              {/* Spine hinge dark strip */}
              <div className="absolute left-0 top-0 bottom-0 w-9 bg-gradient-to-r from-black/35 via-black/12 to-transparent pointer-events-none" />
              {/* Inner border frame */}
              <div className="absolute inset-[18px] border border-white/22 rounded-lg pointer-events-none" />
              {/* Subtle top sheen */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

              <div className="pt-1 text-center z-10">
                <span className="text-[9px] font-mono tracking-[0.2em] text-white/60 uppercase">
                  {book.year} · {book.coverTexture || 'Classic'}
                </span>
              </div>

              <div className="flex flex-col items-center text-center z-10 my-auto px-3 gap-3">
                <h1
                  className={`text-[26px] font-bold leading-tight text-white ${fontClass}`}
                  style={{ textShadow: '0 2px 14px rgba(0,0,0,0.45)' }}
                >
                  {book.title}
                </h1>
                <div className="flex items-center gap-2 w-full justify-center">
                  <div className="h-px flex-1 bg-white/30" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <div className="h-px flex-1 bg-white/30" />
                </div>
                <h2 className="text-[10.5px] tracking-[0.18em] uppercase font-semibold text-white/80">
                  {book.author}
                </h2>
              </div>

              <div className="pb-1 z-10 w-full flex items-center justify-between px-2">
                <span className="text-[9px] font-mono text-white/60">{book.pages}p</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-white/60">{book.category}</span>
              </div>

              {/* Silk bookmark */}
              <div
                className="absolute -bottom-3 left-16 w-2.5 h-6 rounded-b-[2px] shadow-sm"
                style={{ backgroundColor: '#D97706', clipPath: 'polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)' }}
              />

              {/* Hover hint — NO BLUR EVER */}
              <div className="absolute inset-0 flex items-end justify-center pb-9 opacity-0 group-hover:opacity-100 transition-all duration-250 pointer-events-none">
                <div className="px-4 py-2 rounded-full bg-white/95 text-stone-950 font-bold text-xs flex items-center gap-2 shadow-xl border border-stone-200/80">
                  <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                  <span>Click to open</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================ */}
        {/* OPEN BOOK                                                         */}
        {/* ================================================================ */}
        {phase === 'open' && (
          <div
            className="relative w-full max-w-4xl flex flex-col items-center"
            style={{ animation: 'bookSpreadOpen 0.45s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            {/* ── The two-page spread ── */}
            <div
              className="relative w-full rounded-2xl flex overflow-hidden"
              style={{
                height: '480px',
                boxShadow: '0 35px 80px -15px rgba(45,35,25,0.25), 0 8px 20px -5px rgba(45,35,25,0.10)',
                border: '1px solid #e0d8cc',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Spine crease */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-10 book-gutter-crease z-30 pointer-events-none" />

              {/* Bookmark ribbon */}
              {isBookmarked && (
                <div
                  className="absolute top-0 left-[calc(50%-8px)] w-3 h-[58%] bg-amber-500 z-40 rounded-b-sm shadow-lg"
                  style={{ clipPath: 'polygon(0 0,100% 0,100% 92%,50% 100%,0 92%)', animation: 'bookmarkDrop 0.3s ease both' }}
                />
              )}

              {/* ── LEFT PAGE (static) ── */}
              <PageSide
                page={leftPage}
                pageNum={leftPageNum}
                book={book}
                fontClass={fontClass}
                side="left"
                dim={flipping && flipDir === 'prev'}
              />

              {/* ── RIGHT PAGE (static) ── */}
              <PageSide
                page={rightPage}
                pageNum={rightPageNum}
                book={book}
                fontClass={fontClass}
                side="right"
                dim={flipping && flipDir === 'next'}
              />

              {/* ── FLYING LEAF ── */}
              {flipping && (
                <div
                  className="absolute top-0 bottom-0 z-50 pointer-events-none"
                  style={{
                    /* next: leaf starts at right half (left=50%); prev: left half (left=0%) */
                    left:   flipDir === 'next' ? '50%' : '0%',
                    width:  '50%',
                    /* next: pivot from LEFT edge (= spine); prev: pivot from RIGHT edge (= spine) */
                    transformOrigin: flipDir === 'next' ? 'left center' : 'right center',
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${leafAngle}deg)`,
                    willChange: 'transform',
                    // Progressive shadow as leaf curves mid-flip
                    filter: `drop-shadow(${
                      flipDir === 'next'
                        ? `${-Math.abs(Math.sin(leafAngle * Math.PI / 180)) * 18}px`
                        : `${Math.abs(Math.sin(leafAngle * Math.PI / 180)) * 18}px`
                    } 0 ${Math.abs(Math.sin(leafAngle * Math.PI / 180)) * 28}px rgba(0,0,0,0.22))`,
                  }}
                >
                  {/* Front face */}
                  <div
                    className="absolute inset-0 paper-warm-linen text-stone-900 flex flex-col border-stone-200"
                    style={{
                      padding: '2.2rem 1.8rem 1.4rem',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderLeft: flipDir === 'next' ? '1px solid #e8e0d0' : 'none',
                      borderRight: flipDir === 'prev' ? '1px solid #e8e0d0' : 'none',
                    }}
                  >
                    <div className="page-turn-shadow absolute inset-0 pointer-events-none" />
                    <PageContent page={flyFront} book={book} fontClass={fontClass}
                      pageNum={flipDir === 'next' ? rightPageNum : leftPageNum}
                      isLeft={flipDir === 'prev'} isDropCap />
                  </div>

                  {/* Back face (shows through when >90° rotated) */}
                  <div
                    className="absolute inset-0 paper-warm-linen text-stone-900 flex flex-col border-stone-200"
                    style={{
                      padding: '2.2rem 1.8rem 1.4rem',
                      transform: 'rotateY(180deg)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      borderRight: flipDir === 'next' ? '1px solid #e8e0d0' : 'none',
                      borderLeft: flipDir === 'prev' ? '1px solid #e8e0d0' : 'none',
                    }}
                  >
                    <div className="page-turn-shadow-reverse absolute inset-0 pointer-events-none" />
                    <PageContent page={flyBack} book={book} fontClass={fontClass}
                      pageNum={flipDir === 'next' ? targetSpread.current * 2 + 1 : targetSpread.current * 2 + 2}
                      isLeft={flipDir === 'next'} />
                  </div>
                </div>
              )}
            </div>

            {/* ── Reading controls ── */}
            <div className="flex flex-col items-center w-full mt-5 gap-3 px-2">
              <div className="flex items-center justify-between w-full gap-3">
                <button
                  onClick={goPrev}
                  disabled={currentSpread === 0 || flipping}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition ${
                    currentSpread === 0 || flipping
                      ? 'opacity-20 cursor-not-allowed'
                      : 'cursor-pointer text-stone-700 hover:bg-stone-100 active:scale-95'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                {/* Scrubber */}
                <div className="flex items-center gap-3 flex-1 max-w-sm bg-stone-100 px-5 py-2 rounded-full border border-stone-200">
                  <span className="text-[10px] font-mono text-stone-400 shrink-0">p.{leftPageNum}</span>
                  <input
                    type="range"
                    min="0" max={TOTAL_SPREADS - 1} step="1"
                    value={currentSpread}
                    disabled={flipping}
                    onChange={(e) => goToSpread(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer h-1.5 rounded-full"
                  />
                  <span className="text-[10px] font-mono text-stone-400 shrink-0">p.{TOTAL_SPREADS * 2}</span>
                </div>

                <button
                  onClick={goNext}
                  disabled={currentSpread === TOTAL_SPREADS - 1 || flipping}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition ${
                    currentSpread === TOTAL_SPREADS - 1 || flipping
                      ? 'opacity-20 cursor-not-allowed'
                      : 'cursor-pointer text-stone-700 hover:bg-stone-100 active:scale-95'
                  }`}
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: TOTAL_SPREADS }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSpread(i)}
                    disabled={flipping}
                    className={`rounded-full transition-all cursor-pointer ${
                      i === currentSpread ? 'w-6 h-2 bg-amber-500' : 'w-2 h-2 bg-stone-300 hover:bg-amber-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-[10px] font-mono text-stone-400 opacity-60">← → arrow keys to turn pages · Esc to close</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Sub-components ───────────────────────────────────────── */

function PageSide({ page, pageNum, book, fontClass, side, dim }) {
  return (
    <div
      className="w-1/2 h-full paper-warm-linen text-stone-900 flex flex-col relative select-text overflow-y-auto transition-opacity duration-200"
      style={{
        padding: '2.2rem 1.8rem 1.4rem',
        borderRight: side === 'left' ? '1px solid #e8e0d0' : 'none',
        opacity: dim ? 0.6 : 1,
      }}
    >
      <PageContent page={page} book={book} fontClass={fontClass} pageNum={pageNum}
        isLeft={side === 'left'} isDropCap={side === 'left'} />
    </div>
  );
}

function PageContent({ page, book, fontClass, pageNum, isLeft, isDropCap = false }) {
  return (
    <>
      {/* Header */}
      <div className={`flex justify-between text-[10.5px] text-stone-400 font-serif border-b border-stone-200/70 pb-2 mb-4 shrink-0 ${isLeft ? '' : 'flex-row-reverse'}`}>
        <span className="italic truncate max-w-[50%]">{isLeft ? book.title : page.title}</span>
        <span className="truncate max-w-[50%] text-right">{isLeft ? page.title : book.author}</span>
      </div>

      {/* Body */}
      <div className={`flex-1 text-[13px] leading-[1.9] text-stone-800 ${fontClass} overflow-y-auto`}>
        {isDropCap && page.content?.length > 0 ? (
          <>
            <span
              className="float-left text-[44px] font-bold leading-[0.82] pr-2.5 pt-1 text-stone-900"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {page.content.charAt(0)}
            </span>
            <p className="whitespace-pre-line">{page.content.slice(1)}</p>
          </>
        ) : (
          <p className="whitespace-pre-line">{page.content || '…'}</p>
        )}
      </div>

      {/* Footer */}
      <div className={`flex justify-between text-[10px] text-stone-400 font-serif border-t border-stone-200/70 pt-2 mt-4 shrink-0 ${isLeft ? '' : 'flex-row-reverse'}`}>
        <span>{isLeft ? book.author : 'Athenaeum'}</span>
        <span>{pageNum}</span>
      </div>
    </>
  );
}
