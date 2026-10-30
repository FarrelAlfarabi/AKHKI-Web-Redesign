import { Link } from 'react-router-dom'

export default function PageStage({ ghost, crumbs = [], title, sub }) {
  return (
    <div className="stage" data-ghost={ghost}>
      <div className="wrap">
        <nav className="crumb" aria-label="Jejak halaman">
          <Link to="/">Beranda</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="crumb-part">
              <span aria-hidden="true">/</span>{' '}
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        <span className="bar" aria-hidden="true" />
        {sub && <p className="sub">{sub}</p>}
      </div>
    </div>
  )
}
