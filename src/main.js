import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';
import router from '../src/router/index'
import './styles/main.scss';

createApp(App).use(router).mount('#app');
