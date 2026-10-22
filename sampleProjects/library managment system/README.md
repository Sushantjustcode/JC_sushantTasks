# 📚 Athenaeum — Immersive Library Management System

> **For AI Agents reading this**: This README is specifically structured to help you (and the user) save tokens and ramp up fast. Read the **Project Map** section first, then jump to the section you need.

---

## 🗺️ Project Map (start here)

```
library managment system/
├── README.md                    ← You are here
├── package.json                 ← Root (scripts: dev, start)
│
├── backend/
│   ├── server.js                ← Express REST API (port 5000)
│   └── data/
│       └── books.json           ← JSON file database (source of truth)
│
└── frontend/
    ├── vite.config.js           ← Vite + React + Tailwind v4 config
    ├── package.json
    ├── index.html
    └── src/
        ├── App.jsx              ← ROOT: state mgmt, CRUD, ambiance, filter/sort
        ├── index.css            ← ALL custom CSS (textures, 3D, keyframes, themes)
        │
        ├── data/
        │   └── defaultBooks.js  ← 8 public-domain books with 4 sample pages each
        │
        ├── utils/
        │   └── audio.js         ← Web Audio API: bookOpen, bookClose, pageTurn, shelfSlide
        │
        └── components/
            ├── AmbientCanvas.jsx    ← Three.js particle system (daylight / candlelight)
            ├── LibraryHall.jsx      ← Header: search, category filter, sort, ambiance toggle, random pick
            ├── Bookshelf.jsx        ← Renders shelf rows, distributes books 6-per-shelf
            ├── BookSpine.jsx        ← Individual upright book on shelf, hover dock (Read/Edit/Delete)
            ├── BookModal.jsx        ← Fullscreen modal wrapper around Book3DViewer
            ├── Book3DViewer.jsx     ← 3D book: cover, page flip (rAF-driven), reading controls
            ├── AddBookModal.jsx     ← 3-tab modal: Details | Cover Design | Write Pages
            └── EditBookModal.jsx    ← Same layout as Add, pre-filled with book data
```

---

## 🚀 Running the Project

```bash
# Start both servers (from root):
cd "library managment system"
npm run dev          # starts both backend + frontend concurrently

# Or individually:
# Backend  → http://localhost:5000
cd backend && node server.js

# Frontend → http://localhost:3000
cd frontend && npm run dev -- --host
```

---

## 🏗️ Architecture

### Backend
- **Stack**: Express.js + Node.js, zero database, JSON file persistence
- **File**: `backend/server.js`
- **Data**: `backend/data/books.json` — array of book objects
- **REST API**:
  | Method | Route | Description |
  |--------|-------|-------------|
  | GET    | `/api/books`        | List all books |
  | POST   | `/api/books`        | Add a new book |
  | PUT    | `/api/books/:id`    | Update a book by ID |
  | DELETE | `/api/books/:id`    | Remove a book |

### Frontend
- **Stack**: React 18 + Vite + Tailwind CSS v4 + Three.js
- **State**: All in `App.jsx` — no Redux, no Context (keeps it simple)
- **Fonts**: Google Fonts — Plus Jakarta Sans (UI), Playfair Display, Cormorant Garamond, Cinzel, JetBrains Mono
- **Cache key**: `athenaeum_books_cache_v4` in localStorage (bump version to clear old data)

---

## 📖 Book Data Schema

```js
{
  id: "book-frankenstein",         // string, unique
  title: "Frankenstein",
  author: "Mary Shelley",
  category: "Classic Fiction",     // see CATEGORIES in defaultBooks.js
  year: 1818,
  rating: 4.9,
  pages: 280,
  height: 260,                     // px, book height on shelf (225–270)
  thickness: 44,                   // px, book width on shelf (28–68)
  spineColor: "#2A362B",           // hex color for cover + spine
  textColor: "#F3EAD8",            // hex color for title text on cover
  coverTexture: "leather",         // one of: leather | linen | marbled | goldleaf | velvet | cyber | botanical | washi
  fontStyle: "cormorant",          // one of: playfair | cormorant | cinzel | mono
  description: "...",              // synopsis, shown as fallback page content
  samplePages: [                   // array of readable pages (shown in Book3DViewer)
    { pageNumber: 1, title: "Letter I", content: "..." },
    { pageNumber: 2, title: "Chapter IV", content: "..." },
    // ... up to N pages (displayed 2 per spread)
  ],
  tags: ["Gothic", "Classics"],    // optional string array
  tableOfContents: [...]           // optional string array
}
```

---

## 🎭 Key Components Guide

### `Book3DViewer.jsx`
The most complex component. Controls:
- **Phase**: `'closed'` → `'open'` (state machine, rAF-driven)
- **Page flip**: `doFlip(dir, nextSpread)` — dir is `'next'` or `'prev'`
  - NEXT: leaf starts at right half, pivots LEFT edge, angle 0° → -180°
  - PREV: leaf starts at left half, pivots RIGHT edge, angle 0° → +180°
- **Props**: `{ book, onCloseViewer }`
- **No blur** anywhere — hardcoded design constraint

### `BookSpine.jsx`
- Renders one upright book on the shelf
- `isHovered` → lifts book + shows hover dock (Read / Edit / Delete icons)
- Width from `book.thickness`, height from `book.height`
- **No backdrop-blur on hover dock** (was causing blur issues, removed)

### `AmbientCanvas.jsx`
- Three.js, 3 particle layers
- `ambiance='daylight'`: golden motes + dust + sunbeam blobs, additive blending
- `ambiance='candlelight'`: ember cores + amber glow + smoke wisps, flickering opacity

### `LibraryHall.jsx`
- Expanding search bar (click the search icon)
- Category text-links (horizontal row)
- Sort dropdown: default | title | year | thickness
- ☀️/🕯️ ambiance toggle button
- 🔀 Random shuffle pick

---

## 🎨 CSS Architecture (`index.css`)

All custom CSS lives in one file. Key sections:
- **Theme variables**: `:root` font families
- **Body themes**: `body` (daylight default), `body.theme-candlelight`
- **3D utilities**: `.perspective-2000`, `.preserve-3d`, `.backface-hidden`
- **Keyframes**: `fadeInUp`, `slideInFromTop`, `bookSpreadOpen`, `bookmarkDrop`
- **Cover textures** (8 classes): `.texture-leather`, `.texture-linen`, etc.
- **Shelf classes**: `.real-shelf-unit`, `.real-shelf-wood`, `.real-shelf-lip`, `.shelf-side-pillar`
- **Page flip**: `.page-turn-shadow`, `.page-turn-shadow-reverse`
- **Paper texture**: `.paper-warm-linen` (dot grid, zero blur)
- **Spine**: `.book-spine-tactile`, `.book-contact-shadow`

---

## ✨ Feature List

| Feature | Where |
|---------|--------|
| 3D book opening (rAF animated) | `Book3DViewer.jsx` |
| Page flip animation (correct direction) | `Book3DViewer.jsx` → `doFlip()` |
| Keyboard navigation (←→ Esc) | `Book3DViewer.jsx` → `useEffect keydown` |
| Bookmark ribbon | `Book3DViewer.jsx` |
| Page scrubber slider | `Book3DViewer.jsx` |
| Dot spread indicators | `Book3DViewer.jsx` |
| Hover dock (Read/Edit/Delete) | `BookSpine.jsx` |
| 8 cover textures | `index.css` |
| 12 color palettes | `AddBookModal.jsx`, `EditBookModal.jsx` |
| Custom hex color picker | `AddBookModal.jsx` |
| Book width/thickness slider | `AddBookModal.jsx`, `EditBookModal.jsx` |
| Manual page writer (per-page editor) | `AddBookModal.jsx` → `PageEditor` |
| Live spine + cover preview | `AddBookModal.jsx` → Design tab |
| 4 font styles | All modals |
| Search (title/author/category/tags) | `App.jsx` → `filteredBooks` |
| Category filter | `LibraryHall.jsx` → `App.jsx` |
| Sort (title/year/thickness) | `LibraryHall.jsx` → `App.jsx` |
| Random book shuffle | `App.jsx` → `handleRandomPick` |
| ☀️ Daylight / 🕯️ Candlelight mode | `App.jsx`, `AmbientCanvas.jsx`, `index.css` |
| Three.js ambient particles | `AmbientCanvas.jsx` |
| Web Audio SFX (no files needed) | `utils/audio.js` |
| Express REST backend | `backend/server.js` |
| JSON file persistence | `backend/data/books.json` |
| LocalStorage cache fallback | `App.jsx` → `athenaeum_books_cache_v4` |
| 8 public-domain books with real content | `data/defaultBooks.js` |

---

## 🐛 Known Gotchas & Constraints

1. **Blur is forbidden**: Never add `backdrop-blur` or `blur()` to any element in or around the reading modal — was causing user-reported irritation.

2. **Cache key versioning**: The key `athenaeum_books_cache_v4` in `App.jsx` is intentional. If you change the default book data schema, **bump the version** (v5, v6…) so localStorage is not read from stale cache.

3. **defaultBooks.js syntax**: Keys inside `samplePages` objects must be unquoted JS object keys (`content:`, `title:`). Quoted keys (`"content":`) cause Vite transform errors. Always check with `node -e "require('./src/data/defaultBooks.js')"`.

4. **Playwright / browser automation**: Do NOT use browser subagent tools — the Playwright CDN returns 404 in this environment. Test via `curl` or `fetch` from the terminal.

5. **Page flip direction rule** (CRITICAL if you edit `Book3DViewer.jsx`):
   - NEXT: `transformOrigin: 'left center'`, `leafAngle: 0 → -180`
   - PREV: `transformOrigin: 'right center'`, `leafAngle: 0 → +180`

6. **Borrow feature**: Intentionally removed. Do not re-add it.

7. **Tailwind v4**: Uses `@import "tailwindcss"` not `@tailwind base/components/utilities`. The `theme-candlelight:` variant is a custom class applied to `document.body`.

---

## 📁 File Sizes (approx.)

| File | Lines | Purpose |
|------|-------|---------|
| `Book3DViewer.jsx` | ~350 | Most complex: 3D flip, cover open |
| `AddBookModal.jsx` | ~350 | 3-tab form with page writer |
| `index.css` | ~300 | All custom styles |
| `AmbientCanvas.jsx` | ~230 | Three.js particle systems |
| `defaultBooks.js` | ~390 | 8 books × 4 pages each |
| `App.jsx` | ~260 | Root state machine |
| `Bookshelf.jsx` | ~80 | Shelf layout |
| `BookSpine.jsx` | ~185 | Individual book spine |

---

*Last updated by Antigravity AI · 2026-09-14*
