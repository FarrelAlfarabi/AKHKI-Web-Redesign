import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderAt } from '../test/renderApp'

describe('Data Anggota', () => {
  it('shows the first page of six sample members and a pager', () => {
    renderAt('/anggota')
    expect(screen.getAllByRole('article')).toHaveLength(6)
    const pager = screen.getByRole('group', { name: 'Halaman hasil' })
    expect(within(pager).getAllByRole('button')).toHaveLength(2)
  })

  it('moves to the second page', async () => {
    renderAt('/anggota')
    await userEvent.click(screen.getByRole('button', { name: 'Halaman 2' }))
    expect(screen.getAllByRole('article')).toHaveLength(2)
    expect(screen.getByRole('button', { name: 'Halaman 2' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('finds a member by name and goes back to page one', async () => {
    renderAt('/anggota')
    await userEvent.click(screen.getByRole('button', { name: 'Halaman 2' }))
    await userEvent.type(screen.getByLabelText('Nama Lengkap'), 'Citra')
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(1)
    expect(cards[0]).toHaveTextContent('Citra Maharani, S.H.')
  })

  it('says so when nobody matches, and Reset brings the list back', async () => {
    renderAt('/anggota')
    await userEvent.type(screen.getByLabelText('ID Konsultan'), 'nope')
    expect(screen.getByText('Tidak ada anggota yang cocok.')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Reset' }))
    expect(screen.getAllByRole('article')).toHaveLength(6)
    expect(screen.getByLabelText('ID Konsultan')).toHaveValue('')
  })

  it('sorts Z to A', async () => {
    renderAt('/anggota')
    await userEvent.selectOptions(screen.getByLabelText('Urutkan berdasarkan'), 'za')
    expect(screen.getAllByRole('article')[0]).toHaveTextContent('Hendra Wijaya')
  })

  it('never shows real email addresses on sample cards', () => {
    renderAt('/anggota')
    expect(document.body.textContent).not.toMatch(/[\w.-]+@(?!contoh\.id)[\w.-]+\.\w+/)
  })
})

describe('Kode Etik', () => {
  it('names the document and reserves space for the PDF viewer', () => {
    renderAt('/kode-etik')
    expect(screen.getByRole('heading', { level: 1, name: 'Kode Etik Konsultan KI' })).toBeInTheDocument()
    expect(screen.getByText('KHN Kode Etik 22.08.21')).toBeInTheDocument()
    expect(screen.getByText("KODE ETIK KONSULTAN KI")).toBeInTheDocument()
  })
})
