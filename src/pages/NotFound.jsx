import { Link } from 'react-router-dom'
import PageStage from '../components/PageStage'

export default function NotFound() {
  return (
    <section>
      <PageStage ghost="404" title="Halaman tidak ditemukan" sub="Alamat yang Anda buka tidak ada atau sudah dipindahkan." />
      <div className="band wrap">
        <Link className="btn red" to="/">Kembali ke Beranda</Link>
      </div>
    </section>
  )
}
