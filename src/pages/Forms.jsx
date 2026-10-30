import { useState } from 'react'
import PageStage from '../components/PageStage'
import { CONTACT, BIDANG } from '../data/content'

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false)
  const [shown, setShown] = useState(false)
  const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1600) }
  const fallback = () => { setShown(true); setTimeout(() => setShown(false), 3000) }
  const onClick = () => {
    try { navigator.clipboard.writeText(value).then(done, fallback) } catch { fallback() }
  }
  return <button type="button" className="btn light" onClick={onClick}>{copied ? 'Tersalin' : shown ? value : label}</button>
}

export function Kontak() {
  const [msg, setMsg] = useState('')
  const [f, setF] = useState({ nama: '', email: '', pesan: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setMsg(f.nama.trim() && f.email.trim() && f.pesan.trim() ? 'Pratinjau: pesan belum dikirim.' : 'Lengkapi nama, email dan pesan.')
  }
  return (
    <>
      <PageStage ghost="KONTAK" crumbs={[{ label: 'Contact Us' }]} title="Contact Us" sub="Tamara Center Lantai 9, Suite 998, Jakarta Selatan." />
      <div className="band wrap stack" style={{ gap: 28 }}>
        <div className="cgrid">
          <div className="ccard"><small>Alamat</small><address><b>Tamara Center Lantai 9, Suite 998<br />Jl. Jend. Sudirman Kav. 24<br />Jakarta Selatan - 12920</b></address></div>
          <div className="ccard"><small>Telepon</small><b>{CONTACT.phone}</b><CopyButton value={CONTACT.phone} label="Salin nomor" /></div>
          <div className="ccard"><small>Halo AKHKI (WhatsApp)</small><b>{CONTACT.whatsappDisplay}</b><a className="btn blue" href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">Chat sekarang</a></div>
          <div className="ccard"><small>Email</small><b>{CONTACT.email}</b><CopyButton value={CONTACT.email} label="Salin email" /></div>
        </div>
        <div className="two" style={{ gap: 24, alignItems: 'stretch' }}>
          <div className="mapcard">
            <span className="pin" aria-hidden="true" />
            <b>Tamara Center, Jl. Jend. Sudirman Kav. 24</b>
            <a className="btn" href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">Buka di Google Maps</a>
          </div>
          <form className="cform" onSubmit={submit} noValidate>
            <h2>Kirim pesan</h2>
            <label htmlFor="cn">Nama<input id="cn" name="nama" type="text" autoComplete="name" value={f.nama} onChange={set('nama')} /></label>
            <label htmlFor="ce">Email<input id="ce" name="email" type="email" autoComplete="email" spellCheck={false} value={f.email} onChange={set('email')} /></label>
            <label htmlFor="cm">Pesan<textarea id="cm" name="pesan" rows={3} value={f.pesan} onChange={set('pesan')} /></label>
            <button className="btn" type="submit" style={{ justifySelf: 'start' }}>Kirim</button>
            <p className="msg" role="status">{msg}</p>
            <p className="note">Formulir ini tambahan baru. Situs asli hanya menampilkan detail kontak dan peta.</p>
          </form>
        </div>
      </div>
    </>
  )
}

export function Masuk() {
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [reveal, setReveal] = useState(false)
  const [msg, setMsg] = useState('')
  const submit = (e) => {
    e.preventDefault()
    setMsg(number.trim() && password ? 'Pratinjau: login belum aktif.' : 'Isi nomor konsultan dan password.')
  }
  return (
    <section className="split">
      <div className="l">
        <span className="kick light">Khusus konsultan</span>
        <h1>Form Masuk Konsultan</h1>
        <span className="bar" aria-hidden="true" />
        <p>Mohon hanya masukan 4 digit pertama sebagai username.</p>
        <p>Contoh: XXXX-2020, maka hanya ketik 4 angka pertama nomor konsultan anda.</p>
      </div>
      <div className="r">
        <form className="login" onSubmit={submit} noValidate>
          <h2>Masuk anggota</h2>
          <label className="fl" htmlFor="ln">
            <input id="ln" name="nomor-konsultan" type="text" spellCheck={false} placeholder=" " autoComplete="username" inputMode="numeric" value={number} onChange={(e) => setNumber(e.target.value)} />
            <span>* Nomor Konsultan</span>
          </label>
          <div style={{ position: 'relative' }}>
            <label className="fl" htmlFor="lp">
              <input id="lp" name="password" type={reveal ? 'text' : 'password'} placeholder=" " autoComplete="current-password" style={{ paddingRight: 96 }} value={password} onChange={(e) => setPassword(e.target.value)} />
              <span>* Password</span>
            </label>
            <button type="button" className="eye" aria-pressed={reveal} aria-label={reveal ? 'Sembunyikan password' : 'Lihat password'} onClick={() => setReveal(!reveal)}>
              {reveal ? 'Sembunyi' : 'Lihat'}
            </button>
          </div>
          <div className="login-row">
            <label className="inline"><input type="checkbox" name="remember" /> Remember me</label>
            <a href="mailto:sekretariat@akhki.or.id?subject=Lupa%20password%20AKHKI">Lupa Password?</a>
          </div>
          <button className="btn red big" type="submit">Masuk</button>
          <p className="msg" role="status">{msg}</p>
        </form>
      </div>
    </section>
  )
}

export function Profil() {
  const [msg, setMsg] = useState('')
  return (
    <>
      <PageStage ghost="PROFIL" crumbs={[{ label: 'Update Profil' }]} title="Update Profil Konsultan" sub="Halaman khusus anggota. Data di sini tampil di Data Anggota." />
      <div className="band wrap">
        <form className="cform" style={{ maxWidth: 640 }} onSubmit={(e) => { e.preventDefault(); setMsg('Pratinjau: perubahan belum tersimpan.') }}>
          <label htmlFor="pf-id">ID Konsultan<input id="pf-id" type="text" defaultValue="[terisi setelah masuk]" readOnly /></label>
          <label htmlFor="pf-nama">Nama Lengkap<input id="pf-nama" name="nama" type="text" autoComplete="name" /></label>
          <label htmlFor="pf-email">Email<input id="pf-email" name="email" type="email" autoComplete="email" spellCheck={false} /></label>
          <label htmlFor="pf-foto">Foto profil<input id="pf-foto" name="foto" type="file" accept="image/*" /></label>
          <fieldset role="group" aria-labelledby="bidang-lg">
            <legend id="bidang-lg">Bidang keahlian</legend>
            <div className="checks">
              {BIDANG.map((b) => <label key={b} className="inline"><input type="checkbox" name="bidang" value={b} /> {b}</label>)}
            </div>
          </fieldset>
          <button className="btn red" type="submit" style={{ justifySelf: 'start' }}>Simpan</button>
          <p className="msg" role="status">{msg}</p>
          <p className="note">[placeholder] Kolom mengikuti kartu di Data Anggota. Perlu dicek dengan halaman Update Profil di situs asli, yang belum saya lihat.</p>
        </form>
      </div>
    </>
  )
}
