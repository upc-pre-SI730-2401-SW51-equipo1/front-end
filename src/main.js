import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";

import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Menubar from "primevue/menubar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import RecomendationContent from "@/recommendations/component/recomendation-content.component.vue";

const app = createApp(App);
app.use(PrimeVue, { ripple: true });

// Registrar componentes globalmente
app.component('pv-menubar', Menubar);
app.component('pv-data-table', DataTable);
app.component('pv-column', Column);
app.component('pv-toolbar', Toolbar);
app.component('pv-recomendation', RecomendationContent);

// Montar la aplicación
app.mount('#app');
