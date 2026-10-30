import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageStage from '../components/PageStage'
import Chips from '../components/Chips'
import { KEGIATAN, KEGIATAN_TYPES } from '../data/content'

const FEATURED = KEGIATAN[0].title

export function Kegiatan() {
  const [type, setType] = useState('Semua')
  const rows = [...KEGIATAN].reverse().filter((k) => type === 'Semua' || k.type === type)
  return (
    <>
      <PageStage ghost="KEGIATAN" crumbs={[{ label: 'Kegiatan Bulanan' }]} title="Kegiatan Bulanan AKHKI" sub="Berita, seminar, FGD dan audiensi, dicatat per bulan." />
      <div className="band wrap stack" style={{ gap: 32 }}>
        <Link className="nfeat wide" to="/artikel">
          <span className="wrapimg"><span className="nimg">[placeholder] Foto berita utama</span></span>
          <span className="ntxt">
            <small>KEGIATAN BULANAN · JAKARTA, 7 JULI 2025</small>
            <b>{FEATURED}</b>
          </span>
        </Link>
        <section className="stack" aria-labelledby="keg-h">
          <h2 id="keg-h" className="kick">Kegiatan bulanan</h2>
          <Chips label="Filter jenis kegiatan" items={KEGIATAN_TYPES} value={type} onChange={setType} />
          {rows.length > 0 ? (
            <ul className="rows" aria-label="Daftar kegiatan" aria-live="polite">
              {rows.map((k) => (
                <li className="row" key={k.title}>
                  <div className="dt"><b>{k.day}</b><span>{k.month}</span></div>
                  <span className="t">{k.type}</span>
                  <span className="h">{k.title}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="note">Belum ada kegiatan jenis ini.</p>
          )}
          <p className="note">[placeholder] Ringkasan, lokasi, foto dan tautan materi di Pustaka ditambahkan per kegiatan. Daftar ini contoh dari berita yang sudah ada.</p>
        </section>
      </div>
    </>
  )
}

export function Artikel() {
  return (
    <>
      <PageStage ghost="BERITA" crumbs={[{ label: 'Kegiatan Bulanan', to: '/kegiatan' }, { label: 'Artikel' }]} title={FEATURED} sub="Kegiatan Bulanan · Jakarta, 7 Juli 2025" />
      <div className="band wrap">
        <article className="article">
          <div className="ph-box">[placeholder] Foto berita</div>
          <p className="note">[placeholder] Isi artikel dari situs asli. Halaman ini adalah template untuk setiap berita: judul, tanggal, foto, isi, lalu tautan kembali.</p>
          <Link className="btn light" to="/kegiatan" style={{ justifySelf: 'start' }}>Kembali ke Kegiatan Bulanan</Link>
        </article>
      </div>
    </>
  )
}
