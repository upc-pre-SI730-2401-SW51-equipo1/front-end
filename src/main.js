import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from './router';

// Importar estilos de PrimeVue
import 'primevue/resources/themes/md-light-indigo/theme.css'  // Tema principal
import 'primevue/resources/primevue.min.css'  // Estilos de componentes
import 'primeicons/primeicons.css'  // Iconos de PrimeVue
import 'primeflex/primeflex.css'  // Flexbox grid

// Importar componentes de PrimeVue
import Menubar from "primevue/menubar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import "./global.css";
import store from "./store.js";
import Button from "primevue/button";
import CascadeSelect from "primevue/cascadeselect";
import Card from "primevue/card";

// Crear la aplicación Vue y configurar PrimeVue
const app = createApp(App);



app.use(PrimeVue);
app.use(router);
app.use(store);
// Registrar componentes globalmente
app.component('pv-menubar', Menubar);
app.component('pv-data-table', DataTable);
app.component('pv-card', Card);
app.component('pv-column', Column);
app.component('pv-toolbar', Toolbar);

app.component('pv-cascade-select', CascadeSelect);
app.component('pv-button', Button);

// Montar la aplicación
app.mount('#app');
