import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { createStore } from 'vuex';
import { createApp } from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';


const store = createStore({
    state : {
        candidates : []
    },
    mutations:{
        setCandidates(state,candidates){
            state.candidates = candidates;
        }
    },
    actions:{
        updateCandidates({commit},candidates){
            commit('setCandidates',candidates);
        }
    },
    getters:{
        getCandidates: state => state.candidates
    }
});

const app = createApp(App)

app.use(store)
app.use(router)
app.use(CKEditor)
app.mount('#app')
