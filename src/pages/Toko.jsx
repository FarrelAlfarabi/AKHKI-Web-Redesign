import PageStage from '../components/PageStage'
import { CONTACT } from '../data/content'

const PRODUK = [
  { name: 'Buku Kode Etik Konsultan KI', price: 'Rp 75.000' },
  { name: 'Panduan Praktis Permohonan Paten', price: 'Rp 120.000' },
  { name: 'Sertifikat Keanggotaan Berbingkai', price: 'Rp 150.000' },
  { name: 'Paket Merchandise KHN', price: 'Rp 95.000' },
]

export default function Toko() {
  return (
    <>
      <PageStage ghost="TOKO" crumbs={[{ label: 'Toko' }]} title="Toko KHN" sub="Pesan lewat WhatsApp sekretariat. Pembayaran dan pengiriman dikonfirmasi lewat chat." />
      <div className="band wrap stack" style={{ gap: 24 }}>
        <div className="prods">
          {PRODUK.map((p, idx) => { const i = idx + 1; return (
            <article className="prod" key={i}>
              <div className="img" aria-hidden="true"><img src={`/img/produk-${i}.svg`} alt="" loading="lazy" /></div>
              <div className="b">
                <h2 className="prod-t">{p.name}</h2>
                <span>{p.price}</span>
                <a className="btn blue" href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: 8 }}>
                  Pesan via WhatsApp<span className="sr-only"> untuk produk {i}</span>
                </a>
              </div>
            </article>
          ) })}
        </div>
        <p className="note">Pembayaran dan pengiriman dikonfirmasi lewat chat dengan sekretariat.</p>
      </div>
    </>
  )
}
