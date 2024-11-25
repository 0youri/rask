
export default defineNuxtRouteMiddleware((to, from) => {
    // if (import.meta.server) return

]    // if (import.meta.client) {
        const savedChallenge = localStorage.getItem('challengeValue');
        if (!savedChallenge) {
            const savedCategory = localStorage.getItem('categoryValue');
            if (savedCategory) {
                return navigateTo('/challenge')
            } else {
                return navigateTo('/category')
            }
        }
    // }
});