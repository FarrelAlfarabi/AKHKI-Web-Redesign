import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderAt } from '../test/renderApp'

describe('Contact Us', () => {
  it('shows address, phone, WhatsApp and email from the original site', () => {
    renderAt('/kontak')
    expect(screen.getByRole('heading', { level: 1, name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getAllByText(/Tamara Center/).length).toBeGreaterThan(0)
    expect(screen.getAllByText('(021) 0000 0000').length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'Chat sekarang' })).toHaveAttribute('href', 'https://wa.me/628000000000')
    expect(screen.getAllByText('sekretariat@contoh.id').length).toBeGreaterThan(0)
  })

  it('copies the phone number and confirms it', async () => {
    const user = userEvent.setup()
    renderAt('/kontak')
    await user.click(screen.getByRole('button', { name: 'Salin nomor' }))
    expect(await navigator.clipboard.readText()).toBe('(021) 0000 0000')
    expect(screen.getByRole('button', { name: 'Tersalin' })).toBeInTheDocument()
  })

  it('asks for missing fields before pretending to send', async () => {
    renderAt('/kontak')
    await userEvent.click(screen.getByRole('button', { name: 'Kirim' }))
    expect(screen.getByRole('status')).toHaveTextContent('Lengkapi nama, email dan pesan.')
  })

  it('says plainly that the message was not sent in the preview', async () => {
    renderAt('/kontak')
    await userEvent.type(screen.getByLabelText('Nama'), 'Budi')
    await userEvent.type(screen.getByLabelText('Email'), 'budi@example.com')
    await userEvent.type(screen.getByLabelText('Pesan'), 'Halo')
    await userEvent.click(screen.getByRole('button', { name: 'Kirim' }))
    expect(screen.getByRole('status')).toHaveTextContent('Pratinjau: pesan belum dikirim.')
  })
})

describe('Masuk (member login)', () => {
  it('explains the username rule from the original site', () => {
    renderAt('/masuk')
    expect(screen.getByRole('heading', { level: 1, name: 'Form Masuk Konsultan' })).toBeInTheDocument()
    expect(screen.getByText(/hanya masukan 4 digit pertama/)).toBeInTheDocument()
  })

  it('requires both fields', async () => {
    renderAt('/masuk')
    await userEvent.click(screen.getByRole('button', { name: 'Masuk' }))
    expect(screen.getByRole('status')).toHaveTextContent('Isi nomor konsultan dan password.')
  })

  it('does not log anyone in yet and says login is not connected', async () => {
    renderAt('/masuk')
    await userEvent.type(screen.getByLabelText(/Nomor Konsultan/), '1234')
    await userEvent.type(screen.getByLabelText(/Password/, { selector: 'input' }), 'rahasia')
    await userEvent.click(screen.getByRole('button', { name: 'Masuk' }))
    expect(screen.getByRole('status')).toHaveTextContent('Pratinjau: login belum aktif.')
  })

  it('reveals and hides the password', async () => {
    renderAt('/masuk')
    const pw = screen.getByLabelText(/Password/, { selector: 'input' })
    expect(pw).toHaveAttribute('type', 'password')
    await userEvent.click(screen.getByRole('button', { name: 'Lihat password' }))
    expect(pw).toHaveAttribute('type', 'text')
    await userEvent.click(screen.getByRole('button', { name: 'Sembunyikan password' }))
    expect(pw).toHaveAttribute('type', 'password')
  })
})

describe('Update Profil', () => {
  it('has the member fields and a read-only consultant ID', () => {
    renderAt('/profil')
    expect(screen.getByLabelText('ID Konsultan')).toHaveAttribute('readonly')
    expect(screen.getByLabelText('Nama Lengkap')).toBeInTheDocument()
    expect(screen.getByRole('group', { name: 'Bidang keahlian' })).toBeInTheDocument()
  })

  it('does not claim the changes were saved', async () => {
    renderAt('/profil')
    await userEvent.click(screen.getByRole('button', { name: 'Simpan' }))
    expect(screen.getByRole('status')).toHaveTextContent('Pratinjau: perubahan belum tersimpan.')
  })
})
