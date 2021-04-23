import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Contact from '../views/Contact.vue'
import Agence from '../views/Agence.vue'
import Creations from '../views/Creations.vue'
import PageNotFound from '../views/PageNotFound.vue'
import AdminLogin from '../views/Admin/Login.vue'
import Admin from '../views/Admin/Index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/creations',
        name: 'Creations',
        component: Creations
    },
    {
        path: '/agence',
        name: 'Agence',
        component: Agence
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/skyplus-admin',
        name: 'AdminLogin',
        component: AdminLogin
    },
    {
        path: '/skyplus',
        name: 'Admin',
        component: Admin
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
