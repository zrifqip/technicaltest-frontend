import type {Pegawai, PegawaiDB, PegawaiResponse} from "~/types/Pegawai";
import {useAuth} from "~/composables/useAuth";

export const fetchPegawai = () => {
    const { getToken } = useAuth()
    const token = getToken()
    console.log("TOKEN",token);
    const config = useRuntimeConfig()
    const pegawai = ref<Pegawai[]>([])
    const pagination = ref({
        pageIndex: 0,
        pageSize: 20
    })
    const { data, error, pending, refresh } = useFetch<PegawaiResponse>(
        `${config.public.BASE_URL}/api/pegawai`,
        {
            query: {
                page: computed(() => pagination.value.pageIndex + 1)
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }
    )
    watchEffect(() => {
        if (data.value?.data) {
            pegawai.value = data.value.data
        }
    })

    watch(pagination, async () => {
        await refresh()
    }, { deep: true })


    watchEffect(() => {
        if (pending.value) {
            console.log('loadin');
        } else if (error.value) {
            console.log('error:', error.value.message);
        } else {
            console.log('fetched:', data.value?.data);
        }
    })

    const paginationInfo = computed(() => ({
        total: data.value?.total || 0,
        lastPage: data.value?.last_page || 1,
        currentPage: data.value?.current_page || 1,
        perPage: data.value?.per_page || 20,
    }))

    return {
        pegawai,
        pagination,
        pending,
        paginationInfo
    }
}
export const postPegawai = (pegawaiData: PegawaiDB) => {
    const config = useRuntimeConfig()
    const { data, error, pending } = useFetch<PegawaiDB>(
        `${config.public.BASE_URL}/api/pegawai`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: pegawaiData
        }
    )
    return {
        data,
        error,
        pending
    }
}

