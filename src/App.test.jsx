import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderAt } from './test/renderApp'

describe('site shell', () => {
  it('shows the five approved main menu labels in order', () => {
    renderAt('/')
    const nav = screen.getByRole('navigation', { name: 'Menu utama' })
    const labels = within(nav).getAllByRole('link').map((a) => a.textContent)
    expect(labels).toEqual(['Profile Organisasi', 'Kegiatan Bulanan', 'Pustaka', 'Toko', 'Contact Us'])
  })

  it('links the logo to the home page', () => {
    renderAt('/pustaka')
    expect(screen.getByRole('link', { name: /KHN, ke beranda/i })).toHaveAttribute('href', '/')
  })

  it('offers member links Anggota, Kode Etik and Masuk above the menu', () => {
    renderAt('/')
    const util = screen.getByLabelText('Menu anggota')
    expect(within(util).getAllByRole('link').map((a) => a.textContent)).toEqual(['Anggota', 'Kode Etik', 'Masuk'])
  })

  it('marks the current section in the main menu', () => {
    renderAt('/pustaka')
    const nav = screen.getByRole('navigation', { name: 'Menu utama' })
    expect(within(nav).getByRole('link', { name: 'Pustaka' })).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByRole('link', { name: 'Toko' })).not.toHaveAttribute('aria-current')
  })

  it('keeps Profile Organisasi highlighted on its sub pages', () => {
    renderAt('/struktur')
    const nav = screen.getByRole('navigation', { name: 'Menu utama' })
    expect(within(nav).getByRole('link', { name: 'Profile Organisasi' })).toHaveAttribute('aria-current', 'page')
  })

  it('navigates when a menu item is clicked', async () => {
    renderAt('/')
    const nav = screen.getByRole('navigation', { name: 'Menu utama' })
    await userEvent.click(within(nav).getByRole('link', { name: 'Toko' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Toko KHN' })).toBeInTheDocument()
  })

  it('shows a not-found page with a way home for unknown addresses', () => {
    renderAt('/tidak-ada')
    expect(screen.getByRole('heading', { level: 1, name: /tidak ditemukan/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /kembali ke beranda/i })).toHaveAttribute('href', '/')
  })

  it('has a skip link to the main content and a single main landmark', () => {
    renderAt('/')
    expect(screen.getByRole('link', { name: /langsung ke konten/i })).toHaveAttribute('href', '#main')
    expect(screen.getAllByRole('main')).toHaveLength(1)
  })

  it.each([
    ['/', 'KHN | Perkumpulan Konsultan HKI Nusantara'],
    ['/pustaka', 'Pustaka | KHN'],
    ['/struktur', 'Struktur Organisasi | KHN'],
    ['/tidak-ada', 'Halaman tidak ditemukan | KHN'],
  ])('sets the browser tab title for %s', (path, title) => {
    renderAt(path)
    expect(document.title).toBe(title)
  })
})
