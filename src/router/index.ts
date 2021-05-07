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
import Client from '@/views/Admin/Client/Client.vue'
import editClient from "@/views/Admin/Client/editClient.vue";
import Calendrier from '@/views/Admin/Calendrier.vue'
import Projet from '@/views/Admin/Projet.vue'
import Facturation from '@/views/Admin/Facturation/Facturation.vue'
import Commandez from '@/views/Paiement/Commandez.vue'
import CommandeComplete from '@/views/Paiement/CommandeComplete.vue'

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
        path: '/commande-complete/:id',
        name: 'CommandeComplete',
        component: CommandeComplete,
        meta: {title: 'Skyplus | Completer'}
    },
    {
        path: '/commandez',
        name: 'Commandez',
        component: Commandez,
        meta: {title: 'Skyplus | Commandez'}
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {title: 'Skyplus | Dashboard', requiresAuth: true}
    },
    {
        path: '/client',
        name: 'Client',
        component: Client,
        meta: {title: 'Skyplus | Client', requiresAuth: true}
    },
    {
        path: '/client/:id',
        name: 'editClient',
        component: editClient,
        meta: {title: 'Skyplus | Client', requiresAuth: true}
    },
    {
        path: '/calendrier',
        name: 'Calendrier',
        component: Calendrier,
        meta: {title: 'Skyplus | Calendrier', requiresAuth: true}
    },
    {
        path: '/projet',
        name: 'Projet',
        component: Projet,
        meta: {title: 'Skyplus | Projet', requiresAuth: true}
    },
    {
        path: '/facturation',
        name: 'Facturation',
        component: Facturation,
        meta: {title: 'Skyplus | FormFacturation', requiresAuth: true}
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

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("jwt") == null) {
            next({
                path: "/dashboard"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router
