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
      <PageStage ghost="KEGIATAN" crumbs={[{ label: 'Kegiatan Bulanan' }]} title="Kegiatan Bulanan KHN" sub="Berita, seminar, FGD dan audiensi, dicatat per bulan." />
      <div className="band wrap stack" style={{ gap: 32 }}>
        <Link className="nfeat wide" to="/artikel">
          <span className="wrapimg"><span className="nimg"><img src="/img/berita-1.svg" alt="Audiensi konsultan KI bersama pembuat kebijakan (ilustrasi)" loading="lazy" /></span></span>
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
          <img className="art-img" src="/img/berita-2.svg" alt="Konsultan KI membahas rancangan peraturan (ilustrasi)" />
          <p>Pengurus KHN diundang berdialog dengan perwakilan kementerian untuk membahas rancangan perubahan peraturan tentang permohonan paten. KHN membawa catatan dari anggota yang sehari-hari mengurus permohonan.</p>
          <p>Dalam pertemuan itu KHN menyampaikan tiga masukan: kejelasan tenggat tiap tahap pemeriksaan, aturan masa transisi bagi permohonan yang sedang berjalan, dan kemudahan pengajuan dokumen lewat sistem daring.</p>
          <p>Hasil pertemuan akan dibagikan kepada seluruh anggota lewat Pustaka KHN, lengkap dengan materi paparan dan daftar tindak lanjut.</p>
          <Link className="btn light" to="/kegiatan" style={{ justifySelf: 'start' }}>Kembali ke Kegiatan Bulanan</Link>
        </article>
      </div>
    </>
  )
}
