import type {JabatanResponse,Jabatan} from "~/types/Jabatan";

export const fetchJabatan = (id_kota: number, id_unit_kerja: number) => {
    const config = useRuntimeConfig()
    const jabatan = ref<Jabatan[]>([])

    const { data, error, pending, refresh } = useFetch<JabatanResponse>(
        `${config.public.BASE_URL}/api/jabatan`,
        {
            query: {
                id_kota,
                id_unit_kerja
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    watchEffect(() => {
        if (data.value?.data) {
            jabatan.value = data.value.data
        }
    })
    return {
        jabatan,
        error,
        pending,
        refresh
    }
}
