
<template>
    
    <div class="container-fluid">
        <div class="card" >
          <div class="card-body">
            <div v-if="updateSuccess" class="alert alert-success" role="alert">
              Added successfully!
            </div>
            
            <div class="row" >
              <label style="font-size: 20px" >Certifications</label>
              <br>
              <button class="button-save btn btn-primary">Save and continue</button>
              <button class="button-reset btn btn-secondary">Reset</button>

              <div class="form-group">
                <br>
                <br>
                <br>
                <label for="title"><h3>Select Certifications</h3></label>
                <div class="row">
                    <div class="col">
                      <VueMultiselect
                        v-model="selectedSkills"
                        :options="options"
                        :multiple="true"
                        :close-on-select="true"
                        placeholder="Pick some"
                        style="width: 500px;"
                        >
                      </VueMultiselect>
                    </div>
                </div>
              </div>

              <div v-if="selectedSkills.length > 0">
                <label><h4>Selected Skills:</h4></label>
                <div v-for="(skill, index) in selectedSkills" :key="index" class="selected-skill" >
                  <span>{{ skill }}</span>
                  <button @click="removeSelectedSkill(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                  </button>
                </div>
              </div>
            
              </div>
              <br>
              <br>
              <br>
              <br>
              <router-link to="/pages/jobs" class="btn btn-secondary btn-margin-right">Cancel</router-link>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import VueMultiselect from 'vue-multiselect';

  export default {
    name: 'certifications',
    components: {
      VueMultiselect 
    },
    data() {
      return {
        selectedSkills: [],
        options:['Associate Java Programming from oracle','Machine learning with python','Cloud computing with Aws ','Tally and advanced excel from microsoft','Python Programming','Ethical Hacking','Computer Networking','Automation with Devops','Electronics and Communications from iit','Embedded system and arduino programming'],
       
        
      };
    },
   
    methods: {
      removeSkill(removedSkill) {
      const index = this.selectedSkills.indexOf(removedSkill);
      if (index !== -1) {
        this.selectedSkills.splice(index, 1);
      }
      },
      removeSelectedSkill(index) {
        this.selectedSkills.splice(index, 1);
      },
}
};
  </script>

<style scoped>
.container-fluid {
  position: fixed;
  top: 50%;
  left: 62%;
  transform: translate(-50%, -50%);
  width: 1000px;
  margin-top: 1px; /* Adjust as needed */
  overflow: auto;
}

.card {
  margin-top: 165px;
  height: 700px;
  border: none;
  overflow: auto;
}

.form-group {
  margin-bottom: 20px;
}

.button-save {
  margin-left: 640px;
  max-width: 190px;
}

.button-save:hover {
  background-color: #e0e0e0;
}

.button-reset {
  margin-left: 20px;
  max-width: 100px;
}

.button-reset:hover {
  background-color: #e0e0e0;
}

.selected-skill {
  margin-bottom: 5px;
}

.selected-skill button {
  margin-left: 10px;
}

.card-body {
  position: relative;
}

/* Add this style to prevent container from moving up */
.card-body::after {
  content: "";
  display: block;
  height: 1px; /* Adjust as needed */
  clear: both;
}
</style>
