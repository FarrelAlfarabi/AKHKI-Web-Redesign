# AKHKI web app (React preview build)

Vite + React 18 + React Router 6. Tests: Vitest + Testing Library.

- `npm install`, then `npm run dev` (local), `npm test` (52 tests), `npm run build` (output in `dist/`).
- Routes: `/`, `/tentang`, `/struktur`, `/pengurus`, `/kegiatan`, `/artikel`, `/pustaka`, `/toko`, `/anggota`, `/kode-etik`, `/kontak`, `/masuk`, `/profil`.
- Hosting needs a fallback to `index.html` for every path (`vercel.json` and `public/_redirects` are included).
- Palette is the original AKHKI palette (see `src/styles.css` variables). Font: Poppins.
- All text marked `[placeholder]` or `[contoh]` is not final. `public/logo.png` is a crop from a screenshot, replace it with the real logo file.
- Not connected yet: member login (`/masuk`), profile save, contact form, downloads. They show a preview message and do nothing else.
- Tests sit at one seam: the whole app rendered at a route, driven the way a visitor uses it. Content lives in `src/data/content.js`.
