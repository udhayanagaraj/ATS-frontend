<template>
    <Sidebar @button-click="handleButtonClick"/>
    <template v-if="componentState.personal">
        <Personal/>
    </template>
    <template v-if="componentState.documents">
            <Documents/>
    </template>
    <template v-if="componentState.education">
        <Education/>
    </template>
    <template v-if="componentState.certifications">
        <Certifications/>
    </template>
    <template v-if="componentState.language">
        <Language/>
    </template>
    <template v-if="componentState.experience">
        <Experience/>
    </template>
</template>


<script>

import Documents from './documents.vue';
import Education from './education.vue';
import Sidebar from '../side-bar/sidebar.vue';
import Personal from './personal.vue';
import Language from './language.vue';
import Certifications from './certification.vue';
import Experience from './experience.vue';


export default{
    name:'manual',
    components: {
      Personal,
      Documents,
      Education,
      Experience,
      Certifications,
      Language,
      Sidebar,
    },
    data(){
        return {
            componentState:{
                personal:true,
                language:false,
                education:false,
                certifications:false,
                experience:false,
                documents : false,
            }  
        }
    },
    methods:{
        handleButtonClick(component){
            for (let key in this.componentState) {
                this.componentState[key] = key === component;
            } 
        }
    }
};


</script>