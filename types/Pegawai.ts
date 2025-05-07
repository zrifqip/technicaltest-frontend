export type Pegawai = {
    NIP: string
    Nama: string
    Alamat: string
    'Tgl Lahir': string
    'Tempat Lahir': string
    'Jenis Kelamin': string
    Gol: string
    Eselon: string
    Jabatan: string
    'Tempat Tugas': string
    Agama: string
    'Unit Kerja': string
    'No. HP': string
    NPWP: string
    avatar?: { src: string, alt: string }
}

export type PegawaiResponse = {
    current_page: number
    data: Pegawai[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}
export type PegawaiDB= {
    NIP: string
    Nama: string
    Alamat: string
    Tanggal_Lahir: string
    kota_lahir_id: number
    jenis_kelamin: string
    Gol: string
    jabatan_id: string
    agama: string
    No_Handphone : string
    NPWP: string
    avatar?: { src: string, alt: string }
}
