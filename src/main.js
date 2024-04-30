import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import { createMemoryHistory, createRouter } from 'vue-router';
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

const routes = [
    { path: '/', component: index },
    { path: '/about', component: index },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
app.use(PrimeVue);
app.use(router);
// Registrar componentes globalmente
app.component('pv-menubar', Menubar);
app.component('pv-data-table', DataTable);
app.component('pv-column', Column);
app.component('pv-toolbar', Toolbar);

// Montar la aplicación
app.mount('#app');
