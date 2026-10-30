import { Link } from 'react-router-dom'

const TABS = [
  { to: '/tentang', label: 'Sejarah, Visi dan Misi' },
  { to: '/struktur', label: 'Struktur Organisasi' },
  { to: '/pengurus', label: 'Pengurus 2024 - 2028' },
]

export default function ProfileTabs({ current }) {
  return (
    <nav className="pills" aria-label="Bagian profil">
      {TABS.map((t) => (
        <Link key={t.to} to={t.to} aria-current={t.to === current ? 'page' : undefined}>
          {t.label}
        </Link>
      ))}
    </nav>
  )
}
