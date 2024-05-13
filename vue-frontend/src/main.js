import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import router from './router';


import { createApp } from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';


const app = createApp(App)


app.use(router)
app.use(CKEditor)
app.mount('#app')
