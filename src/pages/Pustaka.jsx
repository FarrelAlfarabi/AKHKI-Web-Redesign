import { useState } from 'react'
import PageStage from '../components/PageStage'
import Chips from '../components/Chips'
import { DOCS, PUSTAKA_CATEGORIES } from '../data/content'

export default function Pustaka() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Semua')
  const q = query.trim().toLowerCase()
  const docs = DOCS.filter((d) => (category === 'Semua' || d.category === category) && d.title.toLowerCase().includes(q))
  return (
    <>
      <PageStage ghost="PUSTAKA" crumbs={[{ label: 'Pustaka' }]} title="Pustaka KHN" sub="Pesatnya perkembangan hukum di bidang kekayaan intelektual perlu diimbangi dengan peningkatan literasi yang kontinu. KHN menyediakan materi yang dibuat oleh para profesional terpercaya." />
      <div className="band wrap stack" style={{ gap: 24 }}>
        <div className="msearch">
          <label htmlFor="psearch">Cari dokumen
            <input id="psearch" name="q" type="search" placeholder="Contoh: Kode Etik" value={query} onChange={(e) => setQuery(e.target.value)} />
          </label>
        </div>
        <Chips label="Filter kategori" items={PUSTAKA_CATEGORIES} value={category} onChange={setCategory} />
        <div className="docs" aria-live="polite">
          {docs.length === 0 && <p className="note">Tidak ada dokumen yang cocok.</p>}
          {docs.map((d) => (
            <article className="doc" key={d.title}>
              <div className="top">
                <span className="pdf" aria-hidden="true">PDF</span>
                <div>
                  <h2 className="doc-t">{d.title}</h2>
                  <small>{[d.category, d.size, d.downloads].filter(Boolean).join(' · ')}</small>
                </div>
              </div>
              <button type="button" className="btn blue" disabled title="Pratinjau, belum ada file" style={{ justifySelf: 'start' }}>
                DOWNLOAD<span className="sr-only"> {d.title}</span>
              </button>
            </article>
          ))}
        </div>
        <p className="note">Tiga dokumen ini ada di situs asli. Tombol unduh belum aktif di pratinjau.</p>
      </div>
    </>
  )
}
