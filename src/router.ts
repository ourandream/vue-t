import Student from './components/student/Main.vue'
import Login from './components/Login.vue'
import Results from './components/student/Results.vue'
import P404 from './components/404.vue'
import Statistics from './components/student/Statistics.vue'
import ChangePassword from './components/ChangePassword.vue'
import StudentInfo from './components/student/StudentInfo.vue'
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/changePassword',
        name: 'changePassword',
        component: ChangePassword
    },
    {
        path: '/',
        name: 'Student',
        component: Student,
        children: [
            {
                path: '/',
                name: 'StudentInfo',
                component: StudentInfo
            },
            {
                path:'/statistics',
                name:'Statistics',
                component:Statistics
            },
            {
                path:'/results',
                name:'Results',
                component:Results
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