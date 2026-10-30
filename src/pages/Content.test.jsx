import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderAt } from '../test/renderApp'

describe('Kegiatan Bulanan', () => {
  it('lists the four known activities, newest first', () => {
    renderAt('/kegiatan')
    expect(screen.getByRole('heading', { level: 1, name: 'Kegiatan Bulanan AKHKI' })).toBeInTheDocument()
    const list = screen.getByRole('list', { name: 'Daftar kegiatan' })
    const items = within(list).getAllByRole('listitem')
    expect(items).toHaveLength(4)
    expect(items[0]).toHaveTextContent('Konsultan KI di Era AI')
    expect(items[3]).toHaveTextContent('Masukan Substantif')
  })

  it('filters by activity type and says so when none match', async () => {
    renderAt('/kegiatan')
    const filter = screen.getByRole('group', { name: 'Filter jenis kegiatan' })
    await userEvent.click(within(filter).getByRole('button', { name: 'FGD' }))
    const list = screen.getByRole('list', { name: 'Daftar kegiatan' })
    expect(within(list).getAllByRole('listitem')).toHaveLength(1)
    expect(within(list).getByText(/FGD Kupas Tuntas|Permenkum No. 5/)).toBeInTheDocument()

    await userEvent.click(within(filter).getByRole('button', { name: 'Webinar' }))
    expect(screen.getByText('Belum ada kegiatan jenis ini.')).toBeInTheDocument()
  })

  it('opens the featured story on the article page, which links back', async () => {
    renderAt('/kegiatan')
    await userEvent.click(screen.getByRole('link', { name: /Masukan Substantif/ }))
    expect(screen.getByRole('heading', { level: 1, name: /Masukan Substantif/ })).toBeInTheDocument()
    await userEvent.click(screen.getByRole('link', { name: /Kembali ke Kegiatan Bulanan/ }))
    expect(screen.getByRole('heading', { level: 1, name: 'Kegiatan Bulanan AKHKI' })).toBeInTheDocument()
  })
})

describe('Pustaka', () => {
  it('shows the three documents that exist on the original site', () => {
    renderAt('/pustaka')
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('searches documents by title', async () => {
    renderAt('/pustaka')
    await userEvent.type(screen.getByRole('searchbox', { name: 'Cari dokumen' }), 'kode etik')
    const docs = screen.getAllByRole('article')
    expect(docs).toHaveLength(1)
    expect(docs[0]).toHaveTextContent('AKHKI Kode Etik 22.08.21')
  })

  it('filters by category and reports an empty search', async () => {
    renderAt('/pustaka')
    await userEvent.click(screen.getByRole('button', { name: 'Materi Seminar' }))
    expect(screen.getAllByRole('article')).toHaveLength(2)
    await userEvent.type(screen.getByRole('searchbox', { name: 'Cari dokumen' }), 'zzz')
    expect(screen.queryAllByRole('article')).toHaveLength(0)
    expect(screen.getByText('Tidak ada dokumen yang cocok.')).toBeInTheDocument()
  })

  it('does not pretend downloads work before real files exist', () => {
    renderAt('/pustaka')
    for (const b of screen.getAllByRole('button', { name: /download/i })) expect(b).toBeDisabled()
  })
})

describe('Toko', () => {
  it('offers four placeholder products that order through the secretariat WhatsApp', () => {
    renderAt('/toko')
    const links = screen.getAllByRole('link', { name: /Pesan via WhatsApp/ })
    expect(links).toHaveLength(4)
    for (const l of links) {
      expect(l).toHaveAttribute('href', 'https://wa.me/6282260118868')
      expect(l).toHaveAttribute('target', '_blank')
      expect(l.getAttribute('rel')).toContain('noopener')
    }
  })

  it('marks product names and prices as placeholders', () => {
    renderAt('/toko')
    expect(screen.getByText('[Nama produk 1]')).toBeInTheDocument()
    expect(screen.getAllByText('Rp [harga]')).toHaveLength(4)
  })
})
