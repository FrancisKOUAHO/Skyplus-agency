import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Contact from '../views/Contact.vue'
import Histoire from '../views/Histoire.vue'
import Projets from '../views/Projets.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/projets',
        name: 'Projets',
        component: Projets
    },
    {
        path: '/histoire',
        name: 'Histoire',
        component: Histoire
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
