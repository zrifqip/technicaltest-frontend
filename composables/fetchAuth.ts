import { ref } from 'vue'
import { useFetch } from '#app'
import type {AuthResponse} from "~/types/Auth";

export const loginAdmin = async (username: string, password: string) => {
    const config = useRuntimeConfig()
    await fetchCSRFToken()
    const isLoading = ref(false)
    const errorMessage = ref('')
    isLoading.value = true
    errorMessage.value = ''
    try {
        const { data } = await useFetch<AuthResponse>(`${config.public.BASE_URL}/api/login`, {
            method: 'POST',
            body: {
                name : username,
                password : password
            },
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            lazy: true
        })

        if (!data.value) {
            throw new Error('No data received from server')
        }

        const token = data.value.data.remember_token.split('|')[1]
        localStorage.setItem('token', token)
        return data
    } catch (err) {
        errorMessage.value = 'An error occurred: ' + err
        throw new Error(errorMessage.value)
    } finally {
        isLoading.value = false
    }
}

export const loginGuest = async (username: string) => {
    const isLoading = ref(false)
    const errorMessage = ref('')
    await fetchCSRFToken()
    const config = useRuntimeConfig()
    isLoading.value = true
    errorMessage.value = ''

    try {
        const { data } = await useFetch<AuthResponse>(`${config.public.BASE_URL}/api/loginGuest`, {
            method: 'POST',
            credentials: 'include',
            body: {
                name : username
            },
            headers: {
                'Content-Type': 'application/json',
            },
            lazy: true
        })

        if (!data.value) {
            throw new Error('No data received from server')
        }
        const token = data.value.data.remember_token.split('|')[1]
        localStorage.setItem('token', token)
        return data
    } catch (err) {
        errorMessage.value = 'An error occurred: ' + err
        throw new Error(errorMessage.value)
    } finally {
        isLoading.value = false
    }
}

const fetchCSRFToken = async () => {
    const config = useRuntimeConfig()
    const response = await fetch(`${config.public.BASE_URL}/sanctum/csrf-cookie`, {
        credentials: 'include',
    })
    if (!response.ok) {
        throw new Error('Failed to fetch CSRF token')
    }
}
