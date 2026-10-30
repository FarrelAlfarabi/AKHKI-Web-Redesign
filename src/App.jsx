import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { Tentang, Struktur, Pengurus } from './pages/Profile'
import { Kegiatan, Artikel } from './pages/Kegiatan'
import { Anggota, KodeEtik } from './pages/Anggota'
import { Kontak, Masuk, Profil } from './pages/Forms'
import Pustaka from './pages/Pustaka'
import Toko from './pages/Toko'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/struktur" element={<Struktur />} />
        <Route path="/pengurus" element={<Pengurus />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/pustaka" element={<Pustaka />} />
        <Route path="/anggota" element={<Anggota />} />
        <Route path="/kode-etik" element={<KodeEtik />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/toko" element={<Toko />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
