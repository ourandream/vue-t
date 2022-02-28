import Main from './components/main.vue'
import Login from './components/login.vue'
import results from './components/results.vue'
import P404 from './components/404.vue'
import Statistics from './components/statistics.vue'
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '/',
                name: 'Results',
                component: results
            },
            {
                path:'/statistics',
                name:'Statistics',
                component:Statistics
            }
        ]
    },
    {
        path:'/404',
        name:'404',
        component:P404
    }
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})