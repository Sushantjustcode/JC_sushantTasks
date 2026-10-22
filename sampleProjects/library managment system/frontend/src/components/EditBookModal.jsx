import React, { useState, useEffect } from 'react';
import { X, Pencil, Check, Palette, Type, Sliders, Sparkles, Layers } from 'lucide-react';
import { soundFX } from '../utils/audio';

const PRESET_COLORS = [
  { name: 'Forest Olive', hex: '#2A362B', text: '#F3EAD8' },
  { name: 'Terracotta Rust', hex: '#9A3412', text: '#FEF3C7' },
  { name: 'Deep Indigo', hex: '#1E293B', text: '#38BDF8' },
  { name: 'Vintage Ochre', hex: '#854D0E', text: '#FEF9C3' },
  { name: 'Crimson Rose', hex: '#9F1239', text: '#FFE4E6' },
  { name: 'Midnight Ink', hex: '#0F172A', text: '#E2E8F0' },
  { name: 'Sage Moss', hex: '#354F52', text: '#CAD2C5' },
  { name: 'Warm Sand', hex: '#B08968', text: '#EDE0D4' },
  { name: 'Royal Amethyst', hex: '#581C87', text: '#F3E8FF' },
  { name: 'Cobalt Blue', hex: '#1D4ED8', text: '#DBEAFE' },
  { name: 'Matcha Mist', hex: '#4A5759', text: '#D8E2DC' },
  { name: 'Sunset Coral', hex: '#C2410C', text: '#FFEDD5' }
];

const TEXTURES = [
  { id: 'leather', name: 'Leather Bound' },
  { id: 'linen', name: 'Linen Cloth' },
  { id: 'marbled', name: 'Marbled Pattern' },
  { id: 'goldleaf', name: 'Gold Leaf' },
  { id: 'velvet', name: 'Matte Velvet' },
  { id: 'cyber', name: 'Cyberpunk' },
  { id: 'botanical', name: 'Botanical Kraft' },
  { id: 'washi', name: 'Japanese Washi' }
];

const EMBLEMS = [
  { id: 'champagne', name: 'Flute / Deco' },
  { id: 'dragon', name: 'Dragon' },
  { id: 'galaxy', name: 'Galaxy' },
  { id: 'circuit', name: 'Circuit' },
  { id: 'pillar', name: 'Roman Pillar' },
  { id: 'palette', name: 'Art Palette' },
  { id: 'magnifier', name: 'Investigation' },
  { id: 'book', name: 'Classical Book' }
];

const FONTS = [
  { id: 'playfair', name: 'Playfair Display', class: 'font-playfair' },
  { id: 'cormorant', name: 'Cormorant Garamond', class: 'font-cormorant' },
  { id: 'cinzel', name: 'Cinzel Roman', class: 'font-cinzel' },
  { id: 'mono', name: 'JetBrains Mono', class: 'font-mono-tech' }
];

const CATEGORIES = [
  "Classic Fiction",
  "Sci-Fi & Tech",
  "Philosophy",
  "Fantasy & Magic",
  "History & Arts",
  "Mystery & Crime"
];

export default function EditBookModal({ book, isOpen, onClose, onSaveBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Classic Fiction');
  const [year, setYear] = useState(2026);
  const [pages, setPages] = useState(280);
  const [thickness, setThickness] = useState(40);
  const [spineColor, setSpineColor] = useState(PRESET_COLORS[0].hex);
  const [textColor, setTextColor] = useState(PRESET_COLORS[0].text);
  const [fontStyle, setFontStyle] = useState('playfair');
  const [coverTexture, setCoverTexture] = useState('leather');
  const [coverEmblem, setCoverEmblem] = useState('book');
  const [description, setDescription] = useState('');
  const [excerpt, setExcerpt] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(book.title || '');
      setAuthor(book.author || '');
      setCategory(book.category || 'Classic Fiction');
      setYear(book.year || 2026);
      setPages(book.pages || 250);
      setThickness(book.thickness || Math.min(60, Math.max(30, Math.floor((book.pages || 250) / 7))));
      setSpineColor(book.spineColor || PRESET_COLORS[0].hex);
      setTextColor(book.textColor || PRESET_COLORS[0].text);
      setFontStyle(book.fontStyle || 'playfair');
      setCoverTexture(book.coverTexture || 'leather');
      setCoverEmblem(book.coverEmblem || 'book');
      setDescription(book.description || '');
      setExcerpt(book.samplePages?.[0]?.content || '');
    }
  }, [book]);

  if (!isOpen || !book) return null;

  // Sync pages to thickness dynamically when pages slider moves
  const handlePagesChange = (newPages) => {
    setPages(newPages);
    const computedThickness = Math.min(65, Math.max(30, Math.floor(newPages / 7.5)));
    setThickness(computedThickness);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    soundFX.playBookPickUp();

    const updatedBook = {
      ...book,
      title,
      author,
      category,
      year: parseInt(year, 10) || book.year,
      pages: parseInt(pages, 10) || book.pages,
      thickness: parseInt(thickness, 10) || 40,
      spineColor,
      textColor,
      fontStyle,
      coverTexture,
      coverEmblem,
      description: description.trim() || book.description,
      samplePages: [
        {
          pageNumber: 1,
          title: book.samplePages?.[0]?.title || 'Chapter I',
          content: excerpt.trim() || (book.samplePages?.[0]?.content || description)
        },
        book.samplePages?.[1] || {
          pageNumber: 2,
          title: 'Notes',
          content: 'Archival reflections and notes.'
        }
      ]
    };

    onSaveBook(updatedBook);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#fcfbf9] border border-[#ded5c7] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-auto flex flex-col text-stone-900 max-h-[92vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-5">
          <div className="flex items-center gap-2.5">
            <Pencil className="w-4 h-4 text-stone-600" />
            <h2 className="text-lg font-serif font-bold text-stone-900">Edit Book & Cover Crafting</h2>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="md:col-span-8 flex flex-col gap-4">
            
            {/* Title & Author */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-stone-600 mb-1 block">Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-stone-800"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-stone-600 mb-1 block">Author</label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-stone-800"
                />
              </div>
            </div>

            {/* Category & Year */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-stone-600 mb-1 block">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-stone-800"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-stone-600 mb-1 block">Year</label>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-stone-800"
                />
              </div>
            </div>

            {/* PAGE COUNT & BOOK WIDTH SLIDERS */}
            <div className="p-3.5 bg-stone-100/80 rounded-xl border border-stone-200 flex flex-col gap-3">
              <div>
                <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                  <span>Page Slider (Volume Length):</span>
                  <span className="font-mono text-stone-900 font-bold">{pages} pages</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="1200"
                  step="20"
                  value={pages}
                  onChange={(e) => handlePagesChange(Number(e.target.value))}
                  className="w-full accent-stone-900 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-stone-700 mb-1">
                  <span>Book Width / Shelf Thickness:</span>
                  <span className="font-mono text-stone-900 font-bold">{thickness}px width</span>
                </div>
                <input
                  type="range"
                  min="28"
                  max="68"
                  step="1"
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Cover Material Textures */}
            <div>
              <label className="text-xs font-semibold text-stone-600 mb-1.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-stone-500" />
                <span>Cover Material Texture</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TEXTURES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setCoverTexture(t.id)}
                    className={`px-2.5 py-1.5 rounded-lg border text-xs cursor-pointer transition-all ${
                      coverTexture === t.id
                        ? 'border-stone-900 bg-white font-bold shadow-xs'
                        : 'border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 12 Curated Aesthetic Color Palette */}
            <div>
              <label className="text-xs font-semibold text-stone-600 mb-1.5 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-stone-500" />
                <span>Curated Color Palette</span>
              </label>
              <div className="flex flex-wrap gap-1.5">
                {PRESET_COLORS.map((col) => (
                  <button
                    key={col.name}
                    type="button"
                    onClick={() => {
                      setSpineColor(col.hex);
                      setTextColor(col.text);
                    }}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[11px] cursor-pointer transition-all ${
                      spineColor === col.hex
                        ? 'border-stone-900 bg-white font-semibold shadow-xs'
                        : 'border-stone-200 bg-stone-50 text-stone-600'
                    }`}
                  >
                    <span 
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: col.hex }}
                    />
                    <span>{col.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div>
              <label className="text-xs font-semibold text-stone-600 mb-1.5 flex items-center gap-1.5">
                <Type className="w-3.5 h-3.5 text-stone-500" />
                <span>Typography</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {FONTS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFontStyle(f.id)}
                    className={`px-3 py-1.5 rounded-lg border text-left text-xs cursor-pointer transition-all ${
                      fontStyle === f.id
                        ? 'border-stone-900 bg-white font-bold'
                        : 'border-stone-200 bg-stone-50 text-stone-600'
                    } ${f.class}`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Synopsis */}
            <div>
              <label className="text-xs font-semibold text-stone-600 mb-1 block">Synopsis</label>
              <textarea
                rows="2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-stone-800"
              />
            </div>
          </div>

          {/* Right Live Spine Preview */}
          <div className="md:col-span-4 flex flex-col items-center justify-center p-5 bg-stone-100/70 rounded-xl border border-stone-200">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mb-4 font-semibold">
              Live Width & Texture
            </span>

            <div
              className={`rounded-t-[4px] rounded-b-[2px] book-spine-tactile flex flex-col justify-between items-center py-4 px-1 relative transition-all duration-300 texture-${coverTexture}`}
              style={{
                height: '250px',
                width: `${thickness}px`,
                backgroundColor: spineColor,
              }}
            >
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-[9px] text-white/90 font-serif font-bold">
                  {category.charAt(0)}
                </span>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center my-auto overflow-hidden">
                <div 
                  className={`[writing-mode:vertical-rl] rotate-180 text-center font-bold text-xs uppercase truncate max-h-[120px] font-${fontStyle}`}
                  style={{ color: textColor }}
                >
                  {title || 'TITLE'}
                </div>
              </div>

              <div className="text-[8px] font-mono text-white/70">
                {pages}p
              </div>
            </div>

            <p className="text-[10px] text-stone-400 text-center mt-4">
              Width: {thickness}px · {coverTexture}
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="md:col-span-12 flex justify-end gap-2.5 pt-3 border-t border-stone-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 text-xs font-medium cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs shadow-xs transition cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
