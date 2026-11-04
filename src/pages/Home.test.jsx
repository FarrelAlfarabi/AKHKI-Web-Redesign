import { screen, within } from '@testing-library/react'
import { renderAt } from '../test/renderApp'

describe('home page', () => {
  it('introduces KHN as the home of Indonesian IP consultants', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Rumah bagi konsultan kekayaan intelektual Indonesia')
  })

  it('shows the member and regional counts from the original site', () => {
    renderAt('/')
    const stats = screen.getByLabelText('KHN dalam angka')
    expect(within(stats).getByText('1.113')).toBeInTheDocument()
    expect(within(stats).getByText('Anggota KHN')).toBeInTheDocument()
    expect(within(stats).getByText('4')).toBeInTheDocument()
  })

  it('lists the six fields of expertise', () => {
    renderAt('/')
    const section = screen.getByRole('region', { name: 'Bidang keahlian KHN' })
    const names = within(section).getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(names).toEqual(['Paten', 'Merek Dagang', 'Hak Cipta', 'Desain Industri', 'Litigasi HKI', 'Investigasi HKI'])
  })

  it('points the main call to action at the member directory', () => {
    renderAt('/')
    expect(screen.getByRole('link', { name: 'Cari Konsultan' })).toHaveAttribute('href', '/anggota')
  })

  it('links the latest activity to Kegiatan Bulanan', () => {
    renderAt('/')
    expect(screen.getByRole('link', { name: /Semua Kegiatan Bulanan/ })).toHaveAttribute('href', '/kegiatan')
  })

  it('opens WhatsApp from the HALO KHN band in a new tab safely', () => {
    renderAt('/')
    const link = screen.getByRole('link', { name: 'Kontak Kami Sekarang' })
    expect(link).toHaveAttribute('href', 'https://wa.me/628000000000')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link.getAttribute('rel')).toContain('noopener')
  })
})
