import PageStage from '../components/PageStage'
import { CONTACT } from '../data/content'

export default function Toko() {
  return (
    <>
      <PageStage ghost="TOKO" crumbs={[{ label: 'Toko' }]} title="Toko AKHKI" sub="Pesan lewat WhatsApp sekretariat. Pembayaran dan pengiriman dikonfirmasi lewat chat." />
      <div className="band wrap stack" style={{ gap: 24 }}>
        <div className="prods">
          {[1, 2, 3, 4].map((i) => (
            <article className="prod" key={i}>
              <div className="img" aria-hidden="true">[foto produk]</div>
              <div className="b">
                <h2 className="prod-t">[Nama produk {i}]</h2>
                <span>Rp [harga]</span>
                <a className="btn blue" href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: 8 }}>
                  Pesan via WhatsApp<span className="sr-only"> untuk produk {i}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="note">[placeholder] Halaman baru yang belum ada di situs asli. Nama produk, harga dan stok perlu dari AKHKI. Bayar online bisa ditambah nanti.</p>
      </div>
    </>
  )
}
