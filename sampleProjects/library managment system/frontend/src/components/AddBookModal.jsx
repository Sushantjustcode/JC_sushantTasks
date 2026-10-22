import React, { useState } from 'react';
import { X, Plus, Palette, Type, Layers, BookOpen, ChevronLeft, ChevronRight, Trash2, PenLine } from 'lucide-react';
import { soundFX } from '../utils/audio';

const PRESET_COLORS = [
  { name: 'Forest Olive',    hex: '#2A362B', text: '#F3EAD8' },
  { name: 'Terracotta Rust', hex: '#9A3412', text: '#FEF3C7' },
  { name: 'Deep Indigo',     hex: '#1E293B', text: '#38BDF8' },
  { name: 'Vintage Ochre',   hex: '#854D0E', text: '#FEF9C3' },
  { name: 'Crimson Rose',    hex: '#9F1239', text: '#FFE4E6' },
  { name: 'Midnight Ink',    hex: '#0F172A', text: '#E2E8F0' },
  { name: 'Sage Moss',       hex: '#354F52', text: '#CAD2C5' },
  { name: 'Warm Sand',       hex: '#B08968', text: '#EDE0D4' },
  { name: 'Royal Amethyst',  hex: '#581C87', text: '#F3E8FF' },
  { name: 'Cobalt Blue',     hex: '#1D4ED8', text: '#DBEAFE' },
  { name: 'Matcha Mist',     hex: '#4A5759', text: '#D8E2DC' },
  { name: 'Sunset Coral',    hex: '#C2410C', text: '#FFEDD5' },
];

const TEXTURES = [
  { id: 'leather',  name: 'Leather Bound'   },
  { id: 'linen',    name: 'Linen Cloth'      },
  { id: 'marbled',  name: 'Marbled Pattern'  },
  { id: 'goldleaf', name: 'Gold Leaf'        },
  { id: 'velvet',   name: 'Matte Velvet'     },
  { id: 'cyber',    name: 'Cyberpunk'        },
  { id: 'botanical',name: 'Botanical Kraft'  },
  { id: 'washi',    name: 'Japanese Washi'   },
];

const FONTS = [
  { id: 'playfair',  name: 'Playfair Display',    class: 'font-playfair'   },
  { id: 'cormorant', name: 'Cormorant Garamond',   class: 'font-cormorant'  },
  { id: 'cinzel',    name: 'Cinzel Roman',          class: 'font-cinzel'     },
  { id: 'mono',      name: 'JetBrains Mono',        class: 'font-mono-tech'  },
];

const CATEGORIES = [
  'Classic Fiction', 'Sci-Fi & Tech', 'Philosophy',
  'Fantasy & Magic', 'History & Arts', 'Mystery & Crime',
];

const TABS = [
  { id: 'details',   label: 'Book Details',  icon: BookOpen },
  { id: 'design',    label: 'Cover Design',  icon: Palette  },
  { id: 'pages',     label: 'Write Pages',   icon: PenLine  },
];

// ─── Manual Page Editor ──────────────────────────────────────
function PageEditor({ pages, onChange }) {
  const [current, setCurrent] = useState(0);

  const addPage = () => {
    const newPages = [...pages, { pageNumber: pages.length + 1, title: `Chapter ${pages.length + 1}`, content: '' }];
    onChange(newPages);
    setCurrent(newPages.length - 1);
  };

  const removePage = (idx) => {
    if (pages.length <= 1) return;
    const newPages = pages.filter((_, i) => i !== idx).map((p, i) => ({ ...p, pageNumber: i + 1 }));
    onChange(newPages);
    setCurrent(Math.min(idx, newPages.length - 1));
  };

  const updatePage = (idx, field, val) => {
    onChange(pages.map((p, i) => i === idx ? { ...p, [field]: val } : p));
  };

  const pg = pages[current] || { title: '', content: '' };

  return (
    <div className="flex flex-col gap-4">
      {/* Page navigator */}
      <div className="flex items-center gap-2 flex-wrap">
        {pages.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
              i === current
                ? 'bg-stone-900 text-white shadow'
                : 'bg-stone-100 border border-stone-200 text-stone-600 hover:border-stone-400'
            }`}
          >
            {p.title ? p.title.slice(0, 12) : `Page ${i + 1}`}
          </button>
        ))}
        <button
          type="button"
          onClick={addPage}
          className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-amber-50 border border-amber-200 text-amber-700 hover:bg-amber-100 transition cursor-pointer"
        >
          <Plus className="w-3 h-3" /> Add Page
        </button>
      </div>

      {/* Current page editor */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
        {/* Page header bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrent(c => Math.max(0, c - 1))}
              disabled={current === 0}
              className="w-6 h-6 rounded-md flex items-center justify-center text-stone-500 hover:bg-stone-200 disabled:opacity-30 cursor-pointer transition"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-stone-500">Page {current + 1} / {pages.length}</span>
            <button
              type="button"
              onClick={() => setCurrent(c => Math.min(pages.length - 1, c + 1))}
              disabled={current === pages.length - 1}
              className="w-6 h-6 rounded-md flex items-center justify-center text-stone-500 hover:bg-stone-200 disabled:opacity-30 cursor-pointer transition"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={pg.title}
              onChange={(e) => updatePage(current, 'title', e.target.value)}
              placeholder="Page title / chapter name…"
              className="text-xs px-2 py-1 border border-stone-200 rounded-lg bg-white text-stone-800 focus:outline-none focus:border-stone-500 w-48"
            />
            <button
              type="button"
              onClick={() => removePage(current)}
              disabled={pages.length <= 1}
              className="w-6 h-6 rounded-md flex items-center justify-center text-stone-400 hover:text-rose-600 hover:bg-rose-50 disabled:opacity-30 cursor-pointer transition"
              title="Remove this page"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Page writing area — styled like real book paper */}
        <div className="paper-warm-linen p-0">
          <textarea
            value={pg.content}
            onChange={(e) => updatePage(current, 'content', e.target.value)}
            placeholder={`Write the content for "${pg.title || 'this page'}" here…\n\nYou can write anything — prose, poetry, notes. This will appear exactly as typed when you open the book.`}
            className="w-full bg-transparent border-none outline-none resize-none text-[13px] leading-[1.85] text-stone-800 font-serif p-6"
            rows={11}
            style={{ fontFamily: 'Georgia, serif' }}
          />
        </div>

        {/* Word count */}
        <div className="flex justify-between items-center px-4 py-2 bg-stone-50/80 border-t border-stone-200">
          <span className="text-[10px] font-mono text-stone-400">
            {pg.content?.split(/\s+/).filter(Boolean).length || 0} words · {pg.content?.length || 0} chars
          </span>
          <span className="text-[10px] text-stone-400 italic">
            Tip: Each page shows ~200 words in the reader
          </span>
        </div>
      </div>

      {/* Summary */}
      <div className="flex items-center gap-2 text-[11px] text-stone-500 bg-stone-50 rounded-lg px-3 py-2 border border-stone-200">
        <PenLine className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span>
          <strong>{pages.length}</strong> pages written ·{' '}
          <strong>{pages.reduce((a, p) => a + (p.content?.split(/\s+/).filter(Boolean).length || 0), 0)}</strong> total words
        </span>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────
export default function AddBookModal({ isOpen, onClose, onAddBook }) {
  const [activeTab, setActiveTab]     = useState('details');
  const [title, setTitle]             = useState('');
  const [author, setAuthor]           = useState('');
  const [category, setCategory]       = useState('Classic Fiction');
  const [year, setYear]               = useState(new Date().getFullYear());
  const [pages, setPages]             = useState(280);
  const [thickness, setThickness]     = useState(40);
  const [spineColor, setSpineColor]   = useState(PRESET_COLORS[0].hex);
  const [textColor, setTextColor]     = useState(PRESET_COLORS[0].text);
  const [fontStyle, setFontStyle]     = useState('playfair');
  const [coverTexture, setCoverTexture] = useState('leather');
  const [description, setDescription] = useState('');
  const [samplePages, setSamplePages] = useState([
    { pageNumber: 1, title: 'Chapter I', content: '' },
    { pageNumber: 2, title: 'Chapter II', content: '' },
  ]);

  if (!isOpen) return null;

  const handlePagesChange = (n) => {
    setPages(n);
    setThickness(Math.min(65, Math.max(30, Math.floor(n / 7.5))));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) {
      setActiveTab('details');
      return;
    }
    soundFX.playBookPickUp();

    const validPages = samplePages.filter(p => p.content.trim().length > 0);
    const finalPages = validPages.length > 0 ? validPages : [
      { pageNumber: 1, title: 'Chapter I', content: description.trim() || 'The pages await the first words…' },
      { pageNumber: 2, title: 'Chapter II', content: 'The story continues on the next page…' },
    ];

    onAddBook({
      title: title.trim(),
      author: author.trim(),
      category,
      year: parseInt(year, 10) || new Date().getFullYear(),
      pages: parseInt(pages, 10) || 240,
      thickness: parseInt(thickness, 10) || 40,
      spineColor,
      textColor,
      fontStyle,
      coverTexture,
      description: description.trim() || `A volume by ${author.trim()}.`,
      samplePages: finalPages,
      tags: [category],
    });
    onClose();
    // Reset form
    setTitle(''); setAuthor(''); setDescription('');
    setSamplePages([
      { pageNumber: 1, title: 'Chapter I', content: '' },
      { pageNumber: 2, title: 'Chapter II', content: '' },
    ]);
    setActiveTab('details');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/45 backdrop-blur-xs">
      <div className="relative w-full max-w-4xl bg-[#fcfbf9] border border-[#ded5c7] rounded-2xl shadow-2xl z-10 my-auto flex flex-col text-stone-900 max-h-[95vh] overflow-hidden">

        {/* ── Modal Header ── */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-stone-200 shrink-0">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-4 h-4 text-stone-500" />
            <h2 className="text-base font-serif font-bold text-stone-900">Craft & Place New Volume</h2>
          </div>
          <button onClick={onClose} className="w-7 h-7 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Tab Bar ── */}
        <div className="flex items-center gap-0 px-7 pt-4 shrink-0 border-b border-stone-200">
          {TABS.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition cursor-pointer -mb-px ${
                  activeTab === tab.id
                    ? 'border-stone-900 text-stone-900 bg-white'
                    : 'border-transparent text-stone-500 hover:text-stone-700 hover:bg-stone-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
                {tab.id === 'pages' && (
                  <span className="ml-0.5 text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-bold">
                    {samplePages.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ── Tab Content ── */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto px-7 py-6">

            {/* ═══ DETAILS TAB ═══ */}
            {activeTab === 'details' && (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-600 mb-1.5 block">Title *</label>
                    <input
                      type="text" required placeholder="Book title…"
                      value={title} onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700 focus:ring-1 focus:ring-stone-300 transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-stone-600 mb-1.5 block">Author *</label>
                    <input
                      type="text" required placeholder="Author name…"
                      value={author} onChange={(e) => setAuthor(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700 focus:ring-1 focus:ring-stone-300 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="col-span-2">
                    <label className="text-xs font-semibold text-stone-600 mb-1.5 block">Category</label>
                    <select
                      value={category} onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700"
                    >
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-stone-600 mb-1.5 block">Year</label>
                    <input
                      type="number" value={year} onChange={(e) => setYear(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-stone-600 mb-1.5 block">Rating</label>
                    <input
                      type="number" min="1" max="5" step="0.1" defaultValue="4.5"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700"
                    />
                  </div>
                </div>

                {/* Page & thickness sliders */}
                <div className="p-4 bg-stone-100/80 rounded-2xl border border-stone-200 flex flex-col gap-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-stone-700 mb-2">
                      <span>Volume Length (pages)</span>
                      <span className="font-mono text-stone-900">{pages} pages</span>
                    </div>
                    <input
                      type="range" min="80" max="1200" step="20" value={pages}
                      onChange={(e) => handlePagesChange(Number(e.target.value))}
                      className="w-full accent-stone-900 cursor-pointer"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-stone-700 mb-2">
                      <span>Shelf Thickness (book width)</span>
                      <span className="font-mono text-stone-900">{thickness}px</span>
                    </div>
                    <input
                      type="range" min="28" max="68" step="1" value={thickness}
                      onChange={(e) => setThickness(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Synopsis */}
                <div>
                  <label className="text-xs font-semibold text-stone-600 mb-1.5 block">
                    Synopsis <span className="font-normal opacity-60">(shown on book cover & used as first-page fallback)</span>
                  </label>
                  <textarea
                    rows="3" placeholder="A brief description of the book…"
                    value={description} onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-xl text-stone-900 focus:outline-none focus:border-stone-700 resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
                  <PenLine className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                  <span>
                    Go to the <strong>Write Pages</strong> tab to write the actual content of each page — one by one, just like a real book.
                  </span>
                </div>
              </div>
            )}

            {/* ═══ DESIGN TAB ═══ */}
            {activeTab === 'design' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 flex flex-col gap-5">

                  {/* Cover Texture */}
                  <div>
                    <label className="text-xs font-semibold text-stone-600 mb-2 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" /> Cover Material
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {TEXTURES.map(t => (
                        <button
                          key={t.id} type="button" onClick={() => setCoverTexture(t.id)}
                          className={`px-2.5 py-2 rounded-xl border text-xs cursor-pointer transition-all ${
                            coverTexture === t.id
                              ? 'border-stone-900 bg-white font-bold shadow-sm'
                              : 'border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300'
                          }`}
                        >
                          {t.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div>
                    <label className="text-xs font-semibold text-stone-600 mb-2 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5" /> Cover Color
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PRESET_COLORS.map(col => (
                        <button
                          key={col.name} type="button"
                          onClick={() => { setSpineColor(col.hex); setTextColor(col.text); }}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[11px] cursor-pointer transition-all ${
                            spineColor === col.hex
                              ? 'border-stone-900 bg-white font-semibold shadow-sm'
                              : 'border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300'
                          }`}
                        >
                          <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: col.hex }} />
                          {col.name}
                        </button>
                      ))}
                    </div>
                    {/* Custom hex */}
                    <div className="flex items-center gap-3 mt-3">
                      <label className="text-[11px] text-stone-500">Custom color:</label>
                      <input
                        type="color" value={spineColor}
                        onChange={(e) => setSpineColor(e.target.value)}
                        className="w-8 h-8 rounded-lg border border-stone-300 cursor-pointer bg-transparent p-0.5"
                        title="Pick any cover color"
                      />
                      <span className="text-[11px] font-mono text-stone-500">{spineColor}</span>
                    </div>
                  </div>

                  {/* Typography */}
                  <div>
                    <label className="text-xs font-semibold text-stone-600 mb-2 flex items-center gap-1.5">
                      <Type className="w-3.5 h-3.5" /> Typography
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {FONTS.map(f => (
                        <button
                          key={f.id} type="button" onClick={() => setFontStyle(f.id)}
                          className={`px-3 py-2.5 rounded-xl border text-left text-xs cursor-pointer transition-all ${
                            fontStyle === f.id
                              ? 'border-stone-900 bg-white font-bold shadow-sm'
                              : 'border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300'
                          } ${f.class}`}
                        >
                          {f.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Spine Preview */}
                <div className="md:col-span-4 flex flex-col items-center justify-start gap-4 p-5 bg-stone-100/70 rounded-2xl border border-stone-200">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-semibold">
                    Live Preview
                  </span>
                  <div
                    className={`rounded-t-[4px] rounded-b-[2px] book-spine-tactile flex flex-col justify-between items-center py-4 px-1 relative overflow-hidden transition-all duration-300 texture-${coverTexture}`}
                    style={{ height: '240px', width: `${thickness}px`, backgroundColor: spineColor }}
                  >
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <span className="text-[9px] text-white/90 font-serif font-bold">{category.charAt(0)}</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center overflow-hidden px-0.5">
                      <div
                        className={`[writing-mode:vertical-rl] rotate-180 text-center font-bold text-xs uppercase truncate max-h-[120px] font-${fontStyle}`}
                        style={{ color: textColor }}
                      >
                        {title || 'BOOK TITLE'}
                      </div>
                    </div>
                    <div className="text-[8px] font-mono text-white/60 shrink-0">{pages}p</div>
                  </div>
                  <p className="text-[10px] text-stone-400 text-center">
                    {thickness}px wide · {coverTexture}
                  </p>

                  {/* Cover preview */}
                  <div
                    className={`w-28 rounded-r-lg rounded-l-sm p-3 flex flex-col items-center justify-between overflow-hidden border border-white/20 texture-${coverTexture}`}
                    style={{ height: '110px', backgroundColor: spineColor }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/20 rounded-l-sm" />
                    <span className="text-[8px] font-mono text-white/60 uppercase tracking-widest z-10">{year}</span>
                    <span
                      className={`text-[10px] font-bold text-center text-white z-10 leading-tight font-${fontStyle}`}
                      style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}
                    >
                      {title || 'Title'}
                    </span>
                    <span className="text-[8px] text-white/70 z-10 tracking-widest uppercase">{author || 'Author'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* ═══ PAGES TAB ═══ */}
            {activeTab === 'pages' && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900">Write Your Pages</h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Write each page individually. These will appear when reading the book.
                    </p>
                  </div>
                </div>
                <PageEditor pages={samplePages} onChange={setSamplePages} />
              </div>
            )}
          </div>

          {/* ── Footer Actions ── */}
          <div className="flex items-center justify-between gap-3 px-7 py-4 border-t border-stone-200 shrink-0 bg-stone-50/80">
            <div className="flex items-center gap-2">
              {TABS.map((tab, i) => (
                <button
                  key={tab.id} type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-2 h-2 rounded-full transition cursor-pointer ${activeTab === tab.id ? 'bg-stone-900 w-5' : 'bg-stone-300'}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button" onClick={onClose}
                className="px-4 py-2 rounded-xl border border-stone-300 text-stone-600 hover:bg-stone-100 text-xs font-medium cursor-pointer transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs shadow transition active:scale-95 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                Place on Shelf
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
