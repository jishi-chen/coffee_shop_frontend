import { createRouter, RouteRecordRaw, Router, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
        meta: {
            title: '首頁',
        },
    },
    {
        path: '/info',
        name: 'Info',
        component: () => import('../views/InfoView.vue'),
        meta: {
            title: '介紹',
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginView.vue'),
        meta: {
            title: '登',
        },
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
