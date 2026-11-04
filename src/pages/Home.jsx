import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { BIDANG, CONTACT, formatCount } from '../data/content'

const HEADLINE = ['Rumah', 'bagi', 'konsultan', 'kekayaan', 'intelektual', 'Indonesia']

export default function Home() {
  return (
    <>
      <section className="hx" aria-labelledby="hero-title">
        <span className="shape a" aria-hidden="true" />
        <span className="shape b" aria-hidden="true" />
        <div className="wrap hx-in">
          <div className="hx-txt">
            <p className="hx-tag"><i aria-hidden="true" />Berdiri sejak 15 September 2006</p>
            <h1 id="hero-title">
              {HEADLINE.map((w, i) => (
                <Fragment key={w}>
                  <span style={{ '--i': i }}>{w}</span>{' '}
                </Fragment>
              ))}
            </h1>
            <p className="hx-lead">
              KHN adalah satu-satunya wadah asosiasi Konsultan Hak Kekayaan Intelektual di Indonesia, diakui sebagai mitra Direktorat Jenderal Kekayaan Intelektual.
            </p>
            <div className="hx-cta">
              <Link className="btn red big" to="/anggota">Cari Konsultan</Link>
              <Link className="btn ghostw big" to="/pengurus">Pengurus 2024-2028</Link>
            </div>
          </div>
          <div className="hx-panel" role="group" aria-label="KHN dalam angka">
            <div className="stat"><b>{formatCount(1113)}</b><span>Anggota KHN</span></div>
            <div className="stat"><b>4</b><span>Komisariat Daerah</span></div>
            <div className="stat last"><b>6</b><span>Bidang keahlian</span></div>
            <p>Angka dari situs asli. Dicek ulang sebelum peluncuran.</p>
          </div>
        </div>
        <div className="hx-strip">
          <div className="wrap">
            <b>TERBARU</b>
            <Link to="/kegiatan">KHN Selenggarakan FGD Kupas Tuntas Permenkum No. 5 dan No. 6 Tahun 2026 tentang Merek dan Paten</Link>
            <small>15 Juni 2026</small>
          </div>
        </div>
      </section>

      <div className="mq" aria-hidden="true">
        <div>
          {[0, 1, 2, 3].flatMap((r) => [...BIDANG, 'Konsultan KI Indonesia'].map((b) => <span key={r + b}>{b}</span>))}
        </div>
      </div>

      <section className="band wrap" aria-labelledby="bidang-title">
        <div className="sechead rv">
          <span className="kick">Layanan konsultan anggota</span>
          <h2 id="bidang-title">Bidang keahlian KHN</h2>
        </div>
        <div className="tiles rv">
          {BIDANG.map((b) => (
            <article className="tile" key={b}>
              <span className="w" aria-hidden="true">{b.charAt(0)}</span>
              <h3>{b}</h3>
              <small>Layanan konsultan anggota KHN</small>
            </article>
          ))}
        </div>
      </section>

      <section className="band soft" aria-labelledby="jalan-title">
        <div className="wrap">
          <div className="sechead rv">
            <span className="kick">Perjalanan</span>
            <h2 id="jalan-title">Dari peraturan pemerintah hingga hari ini</h2>
          </div>
          <ol className="tl rv">
            <li><b>2005</b><span>Peraturan Pemerintah No. 2 Tahun 2005 tentang Konsultan Kekayaan Intelektual.</span></li>
            <li><b>15 Sep 2006</b><span>KHN didirikan sebagai wadah asosiasi konsultan KI.</span></li>
            <li><b>2024 - 2028</b><span>Masa kepengurusan saat ini.</span></li>
          </ol>
          <p className="note" style={{ marginTop: 28 }}>[placeholder] Tonggak lain dari sejarah KHN akan ditambahkan setelah teks sejarah diterima.</p>
        </div>
      </section>

      <section className="band wrap" aria-labelledby="berita-title">
        <div className="sechead rv">
          <span className="kick">Kegiatan dan berita</span>
          <h2 id="berita-title">Apa yang sedang KHN kerjakan</h2>
        </div>
        <div className="news rv">
          <Link className="nfeat" to="/artikel">
            <span className="wrapimg"><span className="nimg">[placeholder] Foto berita utama</span></span>
            <span className="ntxt">
              <small>Jakarta, 7 Juli 2025</small>
              <b>KHN Berikan Masukan Substantif dalam Pembahasan Rancangan Perubahan Permenkumham No. 38 Tahun 2018 tentang Permohonan Paten</b>
            </span>
          </Link>
          <div className="nlist">
            <Link to="/kegiatan"><small>5 SEPTEMBER 2026 · SEMINAR</small><b>Konsultan KI di Era AI: Menavigasi Perubahan Hukum, Teknologi, dan Praktik Profesi</b></Link>
            <Link to="/kegiatan"><small>15 JUNI 2026 · FGD</small><b>FGD Permenkum No. 5 dan No. 6 Tahun 2026 tentang Merek dan Paten</b></Link>
            <Link to="/kegiatan"><small>MEI 2026 · AUDIENSI</small><b>Konsultasi penyusunan Peraturan Menteri tentang Konsultan Kekayaan Intelektual</b></Link>
            <Link className="btn light" to="/kegiatan">Semua Kegiatan Bulanan</Link>
          </div>
        </div>
      </section>

      <section className="band soft" aria-labelledby="visi-title">
        <div className="wrap vis rv">
          <div className="vis-q">
            <h2 id="visi-title" className="kick">Visi</h2>
            <p>KHN menjadi profesi global yang memiliki komitmen tinggi dalam perlindungan Hak Kekayaan Intelektual secara Nasional dan Internasional.</p>
            <Link className="btn red" to="/tentang">Selengkapnya</Link>
          </div>
          <div className="pbox">
            <h2 className="kick">Pustaka KHN</h2>
            <div className="file"><span className="pdf" aria-hidden="true">PDF</span><span className="nm"><b>Materi Gelar Wicara 5 Mei 2021 Updated (untuk peserta)</b><br /><small>Materi Seminar · 37.27 MB</small></span></div>
            <div className="file"><span className="pdf" aria-hidden="true">PDF</span><span className="nm"><b>Kompilasi Materi Webinar KHN 7 April 2021</b><br /><small>Materi Seminar · 12.84 MB</small></span></div>
            <div className="file"><span className="pdf" aria-hidden="true">PDF</span><span className="nm"><b>KHN Kode Etik 22.08.21</b><br /><small>Materi Lain</small></span></div>
            <Link className="btn blue" to="/pustaka" style={{ justifySelf: 'start' }}>Buka Pustaka</Link>
          </div>
        </div>
      </section>

      <section className="halo-band" aria-labelledby="halo-title">
        <div className="wrap">
          <div>
            <h2 id="halo-title">HALO KHN</h2>
            <p>Butuh konsultan KI, ingin bergabung, atau punya pertanyaan? Sekretariat siap membantu.</p>
          </div>
          <a className="btn big" href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">Kontak Kami Sekarang</a>
        </div>
      </section>
    </>
  )
}
