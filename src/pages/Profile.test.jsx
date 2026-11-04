import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderAt } from '../test/renderApp'

describe('Profile Organisasi', () => {
  it('states when and why KHN was founded', () => {
    renderAt('/tentang')
    expect(screen.getByRole('heading', { level: 1, name: 'Profile Organisasi' })).toBeInTheDocument()
    expect(screen.getByText(/didirikan pada tanggal 15 September 2006/)).toBeInTheDocument()
  })

  it('shows the vision statement', () => {
    renderAt('/tentang')
    expect(screen.getByText(/profesi global yang memiliki komitmen tinggi/)).toBeInTheDocument()
  })

  it('flags the missing mission text as a placeholder instead of inventing it', () => {
    renderAt('/tentang')
    expect(screen.getByText(/\[placeholder\] Salin kelima butir misi/)).toBeInTheDocument()
  })

  it('offers tabs to the three sub pages and marks the current one', () => {
    renderAt('/struktur')
    const tabs = screen.getByRole('navigation', { name: 'Bagian profil' })
    expect(within(tabs).getAllByRole('link').map((a) => a.textContent)).toEqual([
      'Sejarah, Visi dan Misi',
      'Struktur Organisasi',
      'Pengurus 2024 - 2028',
    ])
    expect(within(tabs).getByRole('link', { name: 'Struktur Organisasi' })).toHaveAttribute('aria-current', 'page')
  })

  it('draws the organisation chart with the top office, fields and regional commissariats', () => {
    renderAt('/struktur')
    expect(screen.getByRole('heading', { level: 1, name: /Struktur Organisasi 2024-2028/ })).toBeInTheDocument()
    expect(screen.getByText('Ketua Umum')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Bidang-bidang' })).toBeInTheDocument()
    expect(screen.getByText('Daerah Khusus Jakarta')).toBeInTheDocument()
  })
})

describe('Pengurus 2024-2028', () => {
  it('lists all board members, starting with the Ketua Umum', () => {
    renderAt('/pengurus')
    const list = screen.getByRole('list', { name: 'Daftar pengurus' })
    const items = within(list).getAllByRole('listitem')
    expect(items).toHaveLength(12)
    expect(items[0]).toHaveTextContent('Ketua Umum')
  })

  it('filters by group and tells the user when a group is not filled yet', async () => {
    renderAt('/pengurus')
    const filter = screen.getByRole('group', { name: 'Filter kelompok pengurus' })
    await userEvent.click(within(filter).getByRole('button', { name: 'Dewan Pembina & Penasihat' }))
    const list = screen.getByRole('list', { name: 'Daftar pengurus' })
    expect(within(list).getAllByRole('listitem')).toHaveLength(5)

    await userEvent.click(within(filter).getByRole('button', { name: 'Ahli Internal KHN' }))
    expect(screen.queryByRole('list', { name: 'Daftar pengurus' })).not.toBeInTheDocument()
    expect(screen.getByText(/\[placeholder\] Daftar anggota kelompok ini/)).toBeInTheDocument()
  })

  it('reflects the chosen group on the filter button', async () => {
    renderAt('/pengurus')
    const filter = screen.getByRole('group', { name: 'Filter kelompok pengurus' })
    expect(within(filter).getByRole('button', { name: 'Semua' })).toHaveAttribute('aria-pressed', 'true')
    await userEvent.click(within(filter).getByRole('button', { name: 'Badan Pengurus Harian' }))
    expect(within(filter).getByRole('button', { name: 'Badan Pengurus Harian' })).toHaveAttribute('aria-pressed', 'true')
    expect(within(filter).getByRole('button', { name: 'Semua' })).toHaveAttribute('aria-pressed', 'false')
  })
})
