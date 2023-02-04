import HomeView from '@/views/HomeView.svelte';
import SearchView from '@/views/SearchView.svelte';
import LoginView from '@/views/LoginView.svelte';
import NotFound from '@/views/NotFound.svelte';

export default {
    getRouteFromName(name) {
        return this.routes.filter((route) => route.name === name)[0];
    },
    getRouteFromPath(path) {
        const route = this.routes.filter((route) => route.path === path)[0];
        if (route) {
            return route;
        }
        return {
            component: NotFound,
        }
    },
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomeView,
        },
        {
            name: 'search',
            path: '/',
            component: SearchView,
        },
        {
            name: 'login',
            path: '/login',
            component: LoginView,
        }
    ]
};
