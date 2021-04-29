import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

/*router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // cette route demande une autorisation, vérifions si l'utilisateur est logué.
        // sinon, redirigeons le sur la page de login.
        if (store.state.authenticated) {
            next({
                name: 'AdminLogin',
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.state.authenticated) {
            next({
                name: 'Admin',
            })
        } else {
            next()
        }
    } else {
        next() // assurez vous de toujours appeler `next()` !
    }
})*/

createApp(App).use(store).use(router).mount('#app')
