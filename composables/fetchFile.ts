export const fetchFile = async () => {
    const config = useRuntimeConfig()
    const {  data, error
    } = await useFetch<Blob>(`${config.public.BASE_URL}/api/pegawai/pdf`, {
        responseType: 'blob',
        method: 'GET',
        headers : {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    });
    const blob = new Blob([data.value!], { type: 'application/pdf' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'tabel_pegawai.pdf')  // fallback filename
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
}