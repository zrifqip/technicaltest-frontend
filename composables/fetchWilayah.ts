import type { kotaMap, kotaResponse } from '~/types/Wilayah'

export const fetchKota = () => {
    const config = useRuntimeConfig()

    const { data, error, pending } = useFetch<kotaResponse>(
        `${config.public.BASE_URL}/api/kota/`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        }
    )
    const kota = computed<kotaMap[]>(() =>
        (data.value?.data ?? []).map(k => ({
            value: k.id,
            label: k.Nama
        }))
    )
    watchEffect(() => console.log('mapped kota', kota.value))


    watchEffect(() => {
        if (pending.value) {
            console.log('loading kota')
        } else if (error.value) {
            console.log('error:', error.value.message)
        } else {
            console.log('fetched kota:', kota.value)
        }
    })
    return {
        kota,
        pending,
    }
}
