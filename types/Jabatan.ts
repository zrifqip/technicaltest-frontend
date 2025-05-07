export type Jabatan = {
    id_jabatan: number
    nama_jabatan: string
    eselon: string
}
export type JabatanResponse = {
    data: Jabatan[]
    message: string
}