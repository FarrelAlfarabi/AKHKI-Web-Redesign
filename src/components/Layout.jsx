import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { MAIN_MENU, titleFor, MEMBER_MENU, FOOTER_QUICK_LINKS, CONTACT } from '../data/content'

const isActive = (group, pathname) => group.some((p) => pathname === p || pathname.startsWith(p + '/'))

function MenuLink({ item, pathname, className }) {
  const current = isActive(item.group, pathname)
  return (
    <Link to={item.to} className={className} aria-current={current ? 'page' : undefined}>
      {item.label}
    </Link>
  )
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titleFor(pathname)
  }, [pathname])

  return (
    <>
      <a className="skip" href="#main">Langsung ke konten</a>
      <div className="topnote">
        Pratinjau desain. Teks bertanda [placeholder] atau [contoh] belum final.
      </div>
      <header className="site">
        <div className="wrap top">
          <Link className="logo" to="/" aria-label="KHN, ke beranda">
            <img src="/logo.png" alt="" width="134" height="56" />
          </Link>
          <nav className="util" aria-label="Menu anggota">
            {MEMBER_MENU.map((m) => (
              <MenuLink key={m.to} item={m} pathname={pathname} />
            ))}
          </nav>
        </div>
      </header>
      <nav className="menubar" aria-label="Menu utama">
        <div className="wrap">
          {MAIN_MENU.map((m) => (
            <MenuLink key={m.to} item={m} pathname={pathname} />
          ))}
        </div>
      </nav>
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site">
        <div className="wrap">
          <div>
            <h2 className="foot-h">Tautan Cepat</h2>
            <ul>
              {FOOTER_QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="foot-h">Kontak Info</h2>
            <address className="k">
              <div>
                <b>Sekretariat:</b>
                <br />
                <b>{CONTACT.building}</b> {CONTACT.floor}
                <br />
                {CONTACT.street}
                <br />
                {CONTACT.city}
              </div>
              <div>
                <b>Phone:</b>
                <br />
                {CONTACT.phone}
              </div>
              <div>
                <b>Halo KHN:</b>
                <br />
                {CONTACT.whatsappDisplay}
              </div>
              <div>
                <b>Email:</b>
                <br />
                {CONTACT.email}
              </div>
              <div>
                Instagram · YouTube · LinkedIn · Telegram{' '}
                <span className="muted">[placeholder] tautan akun resmi</span>
              </div>
            </address>
          </div>
        </div>
      </footer>
    </>
  )
}
