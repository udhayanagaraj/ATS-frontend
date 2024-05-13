
<template>
    
    <div class="container-fluid">
        <div class="card" style=" margin-top:-190px;">
          <div class="card-body">
            <div v-if="updateSuccess" class="alert alert-success" role="alert">
              Added successfully!
            </div>
            
            <div class="row" >
              <label style="font-size: 20px; position: fixed" >Certifications</label>
              <button class="button-save">Save and continue</button>
              <button class="button-reset">Reset</button>
              
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
                <div v-for="(skill, index) in selectedSkills" :key="index" class="selected-skill">
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
  .icons-con{
    margin-left: -40px;
  }
  .container{
    position: fixed;  
    width: 100%; 
    left: 170px;
    margin-left: 0;
    margin-top:-167px;
    text-align:center;
  }

  .container-fluid{
    margin-top: 45px;
    margin-left: 250px;
    width: 1000px;
    
  }

  .card {
    margin-top: 20px;
    border:none;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .btn-margin-top {
  margin-right: 10px;
  margin-top: -10px;
  margin-bottom: 15px;
}

.btn-margin-right {
  margin-right: 13px;
}

.button-container {
  margin-top: 190px; /* Add some top margin */
}



.custom-button {
  padding: 10px 20px; /* Adjust padding as needed */
  background-color: #f8efef; /* White-silver background color */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Show pointer cursor on hover */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  margin-bottom: 10px; /* Add margin between buttons */
  width: 300px;
}

.custom-button:hover {
  background-color: #e0e0e0; /* Darken background on hover */
}

    .button-save{
        margin-left:640px;
        max-width: 190px;
    }
    .button-save:hover{
        background-color: #e0e0e0;
    }
    .button-reset{
        margin-left:20px;
        max-width: 110px;
    }
    .button-reset:hover{
        background-color: #e0e0e0;
    }
    .selected-skill {
      margin-bottom: 5px;
    }
    .selected-skill button {
      margin-left: 10px;
    }

    .card-body{
      position:relative;
    }
  </style>
   <style src="vue-multiselect/dist/vue-multiselect.css"></style>