import { useState } from 'react'
import PageStage from '../components/PageStage'
import ProfileTabs from '../components/ProfileTabs'
import Chips from '../components/Chips'
import { ORG_BIDANG, ORG_KOMISARIAT, PENGURUS, PENGURUS_GROUPS, initials } from '../data/content'

const CRUMB_ROOT = { label: 'Profile Organisasi', to: '/tentang' }

export function Tentang() {
  return (
    <>
      <PageStage ghost="PROFILE" crumbs={[{ label: 'Profile Organisasi' }]} title="Profile Organisasi" sub="Sejarah, visi dan misi asosiasi konsultan kekayaan intelektual Indonesia." />
      <div className="band wrap">
        <ProfileTabs current="/tentang" />
        <div className="stack" style={{ gap: 56 }}>
          <section className="stack rv" aria-labelledby="sejarah-title">
            <h2 id="sejarah-title" className="kick">Sejarah</h2>
            <p className="copy lead">
              Asosiasi Konsultan Hak Kekayaan Intelektual Indonesia (AKHKI) didirikan pada tanggal 15 September 2006 berdasarkan Peraturan Pemerintah No. 2 Tahun 2005 tentang Konsultan Kekayaan Intelektual, dan diakui sebagai mitra Direktorat Jenderal Kekayaan Intelektual.
            </p>
            <ol className="tl">
              <li><b>2005</b><span>PP No. 2 Tahun 2005 tentang Konsultan KI.</span></li>
              <li><b>15 Sep 2006</b><span>AKHKI didirikan.</span></li>
              <li><b>2024 - 2028</b><span>Masa kepengurusan saat ini.</span></li>
            </ol>
            <p className="note">[placeholder] Cerita pendirian, tonggak penting dan daftar ketua umum terdahulu. Halaman Sejarah belum ada di situs asli dan teksnya perlu dari AKHKI.</p>
          </section>
          <div className="two rv" style={{ gap: 48, alignItems: 'flex-start' }}>
            <section className="stack" aria-labelledby="visi-h">
              <h2 id="visi-h" className="kick">Visi AKHKI</h2>
              <p className="quote">AKHKI menjadi profesi global yang memiliki komitmen tinggi dalam perlindungan Hak Kekayaan Intelektual secara Nasional dan Internasional.</p>
            </section>
            <section className="stack" aria-labelledby="misi-h">
              <h2 id="misi-h" className="kick">Misi AKHKI</h2>
              <p className="note">[placeholder] Salin kelima butir misi dari halaman Visi dan Misi di situs asli. Teks pada tangkapan layar terlalu kecil untuk disalin dengan benar.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export function Struktur() {
  return (
    <>
      <PageStage ghost="STRUKTUR" crumbs={[CRUMB_ROOT, { label: 'Struktur Organisasi' }]} title="Struktur Organisasi 2024-2028" sub="Susunan pengurus, bidang dan komisariat daerah AKHKI." />
      <div className="band wrap">
        <ProfileTabs current="/struktur" />
        <div className="org rv">
          <div className="lvl"><span className="node top">Ketua Umum</span></div>
          <span className="vl" aria-hidden="true" />
          <div className="lvl"><span className="node">Wakil Ketua Umum</span><span className="node">Dewan Penasehat</span><span className="node">Ahli Internal</span></div>
          <span className="vl" aria-hidden="true" />
          <div className="lvl"><span className="node">Sekretaris Jenderal</span><span className="node">Bendahara Umum</span></div>
          <span className="vl" aria-hidden="true" />
          <div className="lvl"><span className="node">Wakil Sekretaris Jenderal I</span><span className="node">Wakil Sekretaris Jenderal II</span><span className="node">Wakil Bendahara</span></div>
          <h2>Bidang-bidang</h2>
          <div className="lvl">{ORG_BIDANG.map((b) => <span className="node" key={b}>{b}</span>)}</div>
          <h2>Komisariat Daerah</h2>
          <div className="lvl">{ORG_KOMISARIAT.map((b) => <span className="node kom" key={b}>{b}</span>)}</div>
        </div>
        <p className="note" style={{ marginTop: 32 }}>Disusun ulang dari bagan di situs asli. Garis hubung antar jabatan perlu dicek ke bagan resmi. Bagan asli bisa dipasang sebagai gambar bila AKHKI mengirim filenya.</p>
      </div>
    </>
  )
}

export function Pengurus() {
  const [group, setGroup] = useState('Semua')
  const people = PENGURUS.filter((p) => group === 'Semua' || p.group === group)
  return (
    <>
      <PageStage ghost="PENGURUS" crumbs={[CRUMB_ROOT, { label: 'Pengurus' }]} title="Pengurus AKHKI 2024-2028" sub="Badan Pengurus Harian, Dewan Pembina dan Penasihat." />
      <div className="band wrap stack" style={{ gap: 28 }}>
        <ProfileTabs current="/pengurus" />
        <Chips label="Filter kelompok pengurus" items={PENGURUS_GROUPS} value={group} onChange={setGroup} />
        {people.length > 0 ? (
          <ul className="people" aria-label="Daftar pengurus" aria-live="polite">
            {people.map((p) => (
              <li className="person" key={p.name}>
                <div className="av" aria-hidden="true">{initials(p.name)}</div>
                <b>{p.name}</b>
                <small>{p.role}</small>
                <span className="ph">[foto menyusul]</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="note">[placeholder] Daftar anggota kelompok ini diisi dari situs asli.</p>
        )}
        <p className="note">Nama dan jabatan disalin dari tangkapan layar yang kecil. Mohon dicek ulang ejaan dan gelarnya. Foto menyusul. Ahli Internal dan semua bidang memakai pola kartu yang sama dan diisi dari situs asli.</p>
      </div>
    </>
  )
}
