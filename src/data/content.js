// Content is placeholder until KHN supplies real text, photos and the logo file.
// Contact details and counts come from the current situs asli.

export const MAIN_MENU = [
  { label: 'Profile Organisasi', to: '/tentang', group: ['/tentang', '/struktur', '/pengurus'] },
  { label: 'Kegiatan Bulanan', to: '/kegiatan', group: ['/kegiatan', '/artikel'] },
  { label: 'Pustaka', to: '/pustaka', group: ['/pustaka'] },
  { label: 'Toko', to: '/toko', group: ['/toko'] },
  { label: 'Contact Us', to: '/kontak', group: ['/kontak'] },
]

export const MEMBER_MENU = [
  { label: 'Anggota', to: '/anggota', group: ['/anggota'] },
  { label: 'Kode Etik', to: '/kode-etik', group: ['/kode-etik'] },
  { label: 'Masuk', to: '/masuk', group: ['/masuk', '/profil'] },
]

export const FOOTER_QUICK_LINKS = [
  { label: 'Halaman Update Profil', to: '/profil' },
  { label: 'Pengurus 2024 - 2028', to: '/pengurus' },
  { label: 'Kegiatan Bulanan', to: '/kegiatan' },
  { label: 'Pustaka', to: '/pustaka' },
]

export const CONTACT = {
  building: 'Tamara Center',
  floor: 'Lantai 9, Suite 998',
  street: 'Jl. Jend. Sudirman Kav.24',
  city: 'Jakarta Selatan - 12920',
  phone: '(021) 0000 0000',
  whatsappDisplay: '+62 800 0000 0000',
  whatsappUrl: 'https://wa.me/628000000000',
  email: 'sekretariat@contoh.id',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Tamara+Center+Jl.+Jend.+Sudirman+Kav.+24+Jakarta',
}

export const BIDANG = ['Paten', 'Merek Dagang', 'Hak Cipta', 'Desain Industri', 'Litigasi HKI', 'Investigasi HKI']

export const ORG_BIDANG = [
  'Keanggotaan',
  'Pendidikan & Pelatihan Berkelanjutan',
  'Kerjasama Antarlembaga & Hubungan Luar Negeri',
  'Advokasi & Bantuan Hukum',
  'Media Sosial & Humas',
  'Teknologi Informasi',
  'Event & Pendanaan',
]

export const ORG_KOMISARIAT = [
  'Daerah Khusus Jakarta',
  'Jawa Barat, Banten & Sumatera',
  'Jawa Tengah & D.I. Yogyakarta',
  'Jawa Timur, Bali & Nusa Tenggara',
]

export const PENGURUS_GROUPS = [
  'Semua',
  'Badan Pengurus Harian',
  'Dewan Pembina & Penasihat',
  'Ahli Internal KHN',
  'Bidang Keanggotaan',
  'Bidang Pendidikan & Pelatihan Berkelanjutan',
  'Bidang Kerjasama Antarlembaga & Hubungan Luar Negeri',
  'Bidang Advokasi & Bantuan Hukum',
]

// Names and titles were typed from small screenshots: spelling and degrees must be checked.
export const PENGURUS = [
  { group: 'Badan Pengurus Harian', name: 'Dwi Anita Daruherdani, S.H., LL.M.', role: 'Ketua Umum' },
  { group: 'Badan Pengurus Harian', name: 'Gunawan Bagaskoro, S.P., S.H.', role: 'Wakil Ketua Umum' },
  { group: 'Badan Pengurus Harian', name: 'Maulitta Pramuiasari, S.Pd., S.H., M.H.', role: 'Sekretaris Jenderal' },
  { group: 'Badan Pengurus Harian', name: 'Rochmadi Zultan, S.H., M.H.', role: 'Wakil Sekretaris Jenderal I' },
  { group: 'Badan Pengurus Harian', name: 'Juanitasari Winaga, S.Pd., S.H., M.M.', role: 'Wakil Sekretaris Jenderal II' },
  { group: 'Badan Pengurus Harian', name: 'Nidya Rosella Kalangie, S.H.', role: 'Bendahara Umum' },
  { group: 'Badan Pengurus Harian', name: 'Lely Kurniawati, S.E.', role: 'Wakil Bendahara' },
  { group: 'Dewan Pembina & Penasihat', name: 'Prof. Dr. Cita Citrawinda Noerhadi, S.H., M.I.P.', role: 'Ketua' },
  { group: 'Dewan Pembina & Penasihat', name: 'Dr. Turman M. Panggabean, S.H., M.H.', role: 'Anggota' },
  { group: 'Dewan Pembina & Penasihat', name: 'Dr. Suyud Margono, S.H., M.Hum., FCIArb.', role: 'Anggota' },
  { group: 'Dewan Pembina & Penasihat', name: 'R. Ritzky A. Adiwilaga, S.H.', role: 'Anggota' },
  { group: 'Dewan Pembina & Penasihat', name: 'Dr. Justisiari Perdana Kusumah, S.H., M.H.', role: 'Anggota' },
]

export function initials(name) {
  const words = name
    .replace(/[[\]()]/g, '')
    .replace(/\b(Prof|Dr|R)\.?\s/g, '')
    .split(/[ ,]+/)
    .filter((w) => /^[A-Z]/.test(w) && !w.includes('.'))
  return ((words[0] || 'A').charAt(0) + (words[1] || '').charAt(0)).toUpperCase()
}

export const KEGIATAN_TYPES = ['Semua', 'Seminar', 'FGD', 'Audiensi', 'Webinar']

export const KEGIATAN = [
  { day: '7', month: 'Jul 2025', type: 'Audiensi', title: 'KHN Berikan Masukan Substantif dalam Pembahasan Rancangan Perubahan Permenkumham No. 38 Tahun 2018 tentang Permohonan Paten' },
  { day: 'Mei', month: '2026', type: 'Audiensi', title: 'Konsultasi penyusunan Peraturan Menteri tentang Konsultan Kekayaan Intelektual' },
  { day: '15', month: 'Jun 2026', type: 'FGD', title: 'KHN Selenggarakan FGD Kupas Tuntas Permenkum No. 5 dan No. 6 Tahun 2026 tentang Merek dan Paten' },
  { day: '5', month: 'Sep 2026', type: 'Seminar', title: 'Konsultan KI di Era AI: Menavigasi Perubahan Hukum, Teknologi, dan Praktik Profesi (bersama HKTDC)' },
]

export const PUSTAKA_CATEGORIES = ['Semua', 'Materi Seminar', 'Materi Lain']

export const DOCS = [
  { title: 'Materi Gelar Wicara 5 Mei 2021 Updated (untuk peserta)', category: 'Materi Seminar', size: '37.27 MB', downloads: '5 downloads' },
  { title: 'Kompilasi Materi Webinar KHN 7 April 2021', category: 'Materi Seminar', size: '12.84 MB', downloads: '1 download' },
  { title: 'KHN Kode Etik 22.08.21', category: 'Materi Lain', size: '1.2 MB' },
]

export const SITE_NAME = 'KHN'
export const HOME_TITLE = 'KHN | Perkumpulan Konsultan HKI Nusantara'

export const PAGE_TITLES = {
  '/tentang': 'Profile Organisasi',
  '/struktur': 'Struktur Organisasi',
  '/pengurus': 'Pengurus 2024-2028',
  '/kegiatan': 'Kegiatan Bulanan',
  '/artikel': 'Artikel',
  '/pustaka': 'Pustaka',
  '/toko': 'Toko',
  '/anggota': 'Data Anggota',
  '/kode-etik': 'Kode Etik',
  '/kontak': 'Contact Us',
  '/masuk': 'Masuk Anggota',
  '/profil': 'Update Profil',
}

export function titleFor(pathname) {
  if (pathname === '/') return HOME_TITLE
  const name = PAGE_TITLES[pathname] ?? 'Halaman tidak ditemukan'
  return `${name} | ${SITE_NAME}`
}

export const formatCount = (n) => new Intl.NumberFormat('id-ID').format(n)
