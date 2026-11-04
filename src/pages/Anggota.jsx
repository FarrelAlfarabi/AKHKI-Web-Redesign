import { useState } from 'react'
import PageStage from '../components/PageStage'
import { initials } from '../data/content'

const PAGE_SIZE = 6
const MEMBERS = Array.from({ length: 8 }, (_, i) => ({ name: `[contoh] Nama Anggota ${i + 1}`, id: `[ID ${i + 1}]` }))
const collator = (a, b) => a.localeCompare(b, undefined, { numeric: true })

export function Anggota() {
  const [keyword, setKeyword] = useState('')
  const [nama, setNama] = useState('')
  const [id, setId] = useState('')
  const [sort, setSort] = useState('az')
  const [page, setPage] = useState(0)

  const reset = (setter) => (e) => { setter(e.target.value); setPage(0) }
  const q = [keyword, nama, id].join(' ').toLowerCase().trim()
  const found = MEMBERS.filter((m) => !q || `${m.name} ${m.id}`.toLowerCase().includes(q))
  found.sort((a, b) => (sort === 'id' ? collator(a.id, b.id) : sort === 'za' ? collator(b.name, a.name) : collator(a.name, b.name)))
  const pages = Math.max(1, Math.ceil(found.length / PAGE_SIZE))
  const current = Math.min(page, pages - 1)
  const visible = found.slice(current * PAGE_SIZE, current * PAGE_SIZE + PAGE_SIZE)

  return (
    <>
      <PageStage ghost="ANGGOTA" crumbs={[{ label: 'Keanggotaan' }]} title="Data Anggota KHN" sub="Temukan konsultan KI anggota KHN berdasarkan nama atau ID Konsultan." />
      <div className="band wrap">
        <form className="msearch" role="search" aria-label="Cari anggota" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="msearch">Kata kunci<input id="msearch" name="q" type="search" placeholder="Nama atau bidang" value={keyword} onChange={reset(setKeyword)} /></label>
          <label htmlFor="mnama">Nama Lengkap<input id="mnama" name="nama" type="text" autoComplete="off" value={nama} onChange={reset(setNama)} /></label>
          <label htmlFor="mid">ID Konsultan<input id="mid" name="id-konsultan" type="text" autoComplete="off" spellCheck={false} value={id} onChange={reset(setId)} /></label>
          <label htmlFor="msort">Urutkan berdasarkan
            <select id="msort" value={sort} onChange={reset(setSort)}>
              <option value="az">Nama A-Z</option>
              <option value="za">Nama Z-A</option>
              <option value="id">ID Konsultan</option>
            </select>
          </label>
          <div className="btns">
            <button className="btn light" type="button" onClick={() => { setKeyword(''); setNama(''); setId(''); setPage(0) }}>Reset</button>
            <button className="btn blue" type="submit">Cari</button>
          </div>
        </form>
        <div className="mres" aria-live="polite">
          {visible.length === 0 && <p className="note">Tidak ada anggota yang cocok.</p>}
          {visible.map((m) => (
            <article className="mem" key={m.id}>
              <div className="av" aria-hidden="true">{initials(m.name)}</div>
              <h2 className="mem-t">{m.name}</h2>
              <dl>
                <div><dt>Nama Lengkap</dt><dd>{m.name}</dd></div>
                <div><dt>ID Konsultan</dt><dd>{m.id}</dd></div>
                <div><dt>Main Email Address</dt><dd>[email]</dd></div>
              </dl>
            </article>
          ))}
        </div>
        {pages > 1 && (
          <div className="chips" style={{ marginTop: 20 }} role="group" aria-label="Halaman hasil">
            {Array.from({ length: pages }, (_, i) => (
              <button key={i} type="button" className="chip" aria-pressed={i === current} aria-label={`Halaman ${i + 1}`} onClick={() => setPage(i)}>{i + 1}</button>
            ))}
          </div>
        )}
        <p className="note" style={{ marginTop: 24 }}>Kartu di atas adalah contoh. Direktori asli memuat nama, ID Konsultan dan email anggota, dan datanya harus dimigrasi serta diuji dulu.</p>
      </div>
    </>
  )
}

export function KodeEtik() {
  return (
    <>
      <PageStage ghost="ETIK" crumbs={[{ label: 'Peraturan' }]} title="Kode Etik Konsultan KI" sub="Pedoman profesi bagi seluruh konsultan kekayaan intelektual anggota KHN." />
      <div className="band wrap two" style={{ alignItems: 'flex-start', gap: 32 }}>
        <div className="pdfbox">[placeholder]<br />Penampil PDF Kode Etik (20 halaman) seperti di situs asli</div>
        <div className="ccard" style={{ flex: '1 1 260px' }}>
          <small>Dokumen</small>
          <b>KHN Kode Etik 22.08.21</b>
          <span className="muted-s">PDF, 20 halaman</span>
          <button type="button" className="btn blue" disabled title="Pratinjau, belum ada file" style={{ marginTop: 8 }}>Unduh Kode Etik</button>
        </div>
      </div>
    </>
  )
}
