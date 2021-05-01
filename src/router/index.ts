import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"
import Accueil from '@/views/Accueil.vue'
import Contact from '@/views/Contact.vue'
import Agence from '@/views/Agence.vue'
import Creations from '@/views/Creations.vue'
import Offre from '@/views/Offres/index.vue'
import InfosLegales from '@/views/InfosLegales/Index.vue'
import OffresIndependants from '@/views/Offres/OffresIndependants.vue'
import OffresEntreprises from '@/views/Offres/OffresEntreprises.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import Dashboard from '@/views/Admin/Dashboard.vue'
import Login from '@/views/Login.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Accueil',
        component: Accueil,
        meta: {title: 'Skyplus | Accueil'}
    },
    {
        path: '/creations',
        name: 'Creations',
        component: Creations,
        meta: {title: 'Skyplus | Créations'}
    },
    {
        path: '/agence',
        name: 'Agence',
        component: Agence,
        meta: {title: 'Skyplus | Agence'}
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {title: 'Skyplus | Contact'}
    },
    {
        path: '/Offre',
        name: 'Offre',
        component: Offre,
        meta: {title: 'Skyplus |  Nos offres '}
    },
    {
        path: '/infos-legales',
        name: 'InfosLegales',
        component: InfosLegales,
        meta: {title: 'Skyplus |  infos-legales '}
    },
    {
        path: '/offres-independants-creation-site',
        name: 'OffresIndependants',
        component: OffresIndependants,
        meta: {title: 'Skyplus | Offres Independants'}
    },
    {
        path: '/offres-entreprises-creation-site',
        name: 'OffresEntreprises',
        component: OffresEntreprises,
        meta: {title: 'Skyplus | Offres Entreprises'}
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {title: 'Skyplus | Connexion'}
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {title: 'Skyplus | Dashboard'}
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound,
        meta: {title: 'Skyplus | Page not found'}
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
