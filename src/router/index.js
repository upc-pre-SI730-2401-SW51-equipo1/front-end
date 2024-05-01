import { createRouter, createWebHistory} from 'vue-router';
import CheckoutOnline from "../payment/pages/CheckoutOnline.vue";
import CheckoutOfline from "../payment/pages/CheckoutOfline.vue";
import index from "../LadingPage/pages/index.vue";
import store from "../store.js";
import login from "../auth/pages/Login/Login.vue";
import CreateAccount from "../auth/pages/create-account/CreateAccount.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [

        { path: '/home', component: index },
        {path: "/online", component: CheckoutOnline,
            beforeEnter: (to, from, next) => {
                if (!store.getters.isAuthenticated) { // Utiliza el getter de Vuex
                    next('/')
                } else {
                    next()
                }
            }
        },
        {
            path: "/ofline",
            component: CheckoutOfline,
            beforeEnter: (to, from, next) => {
                if (!store.getters.isAuthenticated) { // Utiliza el getter de Vuex
                    next('/')
                } else {
                    next()
                }
            }
        },
        {
            path: "/login",
            component: login,},
        { path: '/', redirect: '/home' },
        { path: '/create-account', component: CreateAccount },
    ],
});
router.beforeEach((to, from, next) => {
    let baseTitle = 'ChromaComics';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});
export default router;