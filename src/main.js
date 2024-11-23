import { createApp } from 'vue';
import App from './App.vue';

import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Estilos globales de Vuetify
import './style.css';
//import '@mdi/font/css/materialdesignicons.css'; // Íconos de Vuetify

const vuetify = createVuetify();

createApp(App).use(vuetify).mount('#app');

