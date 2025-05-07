export const useAuth = () => {
    const getToken = () => {
        if (import.meta.client) {
            return localStorage.getItem('token')
        }
        return null
    }
    return {
        getToken
    }
}
