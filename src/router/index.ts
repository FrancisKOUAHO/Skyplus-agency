import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"
import Accueil from '@/views/Accueil.vue'
import Contact from '@/views/Contact.vue'
import Agence from '@/views/Agence.vue'
import Creations from '@/views/Creations.vue'
import Offre from '@/views/Offres/index.vue'
import PaymentSuccessful from '@/views/Offres/PaymentSuccessful.vue'
import PaymentFailed from '@/views/Offres/PaymentFailed.vue'
import InfosLegales from '@/views/InfosLegales/Index.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import Dashboard from '@/views/Admin/Dashboard.vue'
import Login from '@/views/Login.vue'
import Client from '@/views/Admin/Client/Client.vue'
import editClient from "@/views/Admin/Client/editClient.vue";
import Calendrier from '@/views/Admin/Calendrier.vue'
import Projet from '@/views/Admin/Projet.vue'
import EditerOffres from '@/views/Admin/EditerOffres/EditerOffres.vue'

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
        path: '/paiement-reussi',
        name: 'PaymentSuccessful',
        component: PaymentSuccessful,
        meta: {title: 'Skyplus |  Paiement réussi '}
    },
    {
        path: '/echec-paiement',
        name: 'PaymentFailed',
        component: PaymentFailed,
        meta: {title: 'Skyplus |  Échec du paiement '}
    },
    {
        path: '/editer-offres',
        name: 'EditerOffres',
        component: EditerOffres,
        meta: {title: 'Skyplus |  Editer-offres '}
    },
    {
        path: '/infos-legales',
        name: 'InfosLegales',
        component: InfosLegales,
        meta: {title: 'Skyplus |  infos-legales '}
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
