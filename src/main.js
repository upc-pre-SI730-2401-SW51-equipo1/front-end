import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import { createRouter, createWebHistory} from 'vue-router';
import CheckoutOnline from "../src/payment/pages/CheckoutOnline.vue";
import CheckoutOfline from "../src/payment/pages/CheckoutOfline.vue";
// Importar estilos de PrimeVue
import 'primevue/resources/themes/md-light-indigo/theme.css'  // Tema principal
import 'primevue/resources/primevue.min.css'  // Estilos de componentes
import 'primeicons/primeicons.css'  // Iconos de PrimeVue
import 'primeflex/primeflex.css'  // Flexbox grid
import index from "../src/LadingPage/pages/index.vue"
// Importar componentes de PrimeVue
import Menubar from "primevue/menubar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import "./global.css";

// Crear la aplicación Vue y configurar PrimeVue
const app = createApp(App);



const router = createRouter({
    history: createWebHistory(),
    routes: [

        { path: '/home', component: index },
        {path: "/online", component: CheckoutOnline,
        },
        {
            path: "/ofline",
            component: CheckoutOfline,
        },
        { path: '/', redirect: '/home' },
    ],
});
router.beforeEach((to, from, next) => {
    let baseTitle = 'ACME Learning Center';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});
export default router;
app.use(PrimeVue);
app.use(router);
// Registrar componentes globalmente
app.component('pv-menubar', Menubar);
app.component('pv-data-table', DataTable);
app.component('pv-column', Column);
app.component('pv-toolbar', Toolbar);

// Montar la aplicación
app.mount('#app');
