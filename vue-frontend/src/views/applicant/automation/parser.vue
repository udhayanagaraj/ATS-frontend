
<template>
    <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <div v-if="updateSuccess" class="alert alert-success" role="alert">
              Added successfully!
            </div>
            
            <div class="row" style="margin-top:-10px">
                            
              <!-- First half of the form -->
              <div class="col-md-4">
                  <div class="form-group">
                      <br>
                      <label for="title"><h6>Name</h6></label>
                      <input type="text" class="form-control" id="title" v-model="name" style="width: 230px;">
                  </div>
                  <div class="form-group">
                      <label for="company"><h6>Institute</h6></label>
                      <input type="text" class="form-control" id="company" v-model="institute" style="width: 230px;">
                  </div>
              
                  <div class="form-group">
                      <label for="title"><h6>Skills</h6></label>
                      <div class="row">
                          <div class="col">
                              <VueMultiselect
                              v-model="selectedSkills"
                              :options="options"
                              :multiple="true"
                              :close-on-select="true"
                              placeholder="Pick some"
                              style="width: 226px"
                              >
                              </VueMultiselect>
                          </div>
                      </div>
                  </div>
                  
                  
                  
              </div>

              <!-- Second half of the form -->
              <div class="col-md-4">
                  
                <div class="form-group">
                    <br>
                    <label for="title"><h6>Email</h6></label>
                    <input type="text" class="form-control" id="company" v-model="email" style="width: 230px;">
                </div>

                <div class="form-group">
                  <label for="title"><h6>Address</h6></label>
                  <input type="text" class="form-control" id="company" v-model="address" style="width: 230px;">
                </div>
                
                <div class="form-group">
                    <label for="title"><h6>Github URL</h6></label>
                    <input type="text" class="form-control" id="company" v-model="Github_url" style="width: 230px;">
                </div>
                
                
                
              </div>

              <div class="col-md-4">
                  <div class="form-group">
                      <br>
                      <label for="title"><h6>Mobile Number</h6></label>
                      <input type="text" class="form-control" id="company" v-model="mobile" style="width: 230px;">
                  </div>
                
                  <div class="form-group">
                      <label for="title"><h6>Info</h6></label>
                      <input type="text" class="form-control" id="company" v-model="info" style="width: 230px;">
                  </div>
                  <div class="form-group">
                      <label for="title"><h6>Linkedin URL</h6></label>
                      <input type="text" class="form-control" id="company" v-model="Linkedin_url" style="width: 230px;">
                  </div>
                  
              </div>
              </div>
              <router-link to="/pages/jobs" class="btn btn-secondary btn-margin-right">Cancel</router-link>
              <button  class="btn btn-primary ">Submit</button>
          </div>
        </div>
        
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import VueMultiselect from 'vue-multiselect';

  export default {
    name: 'personal-details',
    components: {
      VueMultiselect 
    },
    data() {
      return {
        name:'',
        email:'',
        mobile:'',
        institute:'',
        address:'',
        info:'',
        skills:'',
        Github_url : '',
        Linkedin_url:'',

        maxExperience:'0',
        minExperience : '0',
        updateSuccess : false,
        selectedSkills: [],
        options:['Java','Python','Machine learning','Accounting','Tally','Executive','Excel','Computer Networks','OpenCV','Electronics','Communication','Arduino'],
       
        
      };
    },
   
    methods: {
      
    }
  };
  </script>
    
    <style scoped>
    .icons-con{
      margin-left: -40px;
    }

    .container-fluid{
      top:0;
      left: 0;
      width: 100%;
      height: 580px;
    }

    .card {
        display: flex;
        align-items: center;
        margin-top: 90px;
        width: 1200px;
        height: 400px;
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
        max-width: 100px;
    }
    .button-reset:hover{
        background-color: #e0e0e0;
    }
  </style>
   <style src="vue-multiselect/dist/vue-multiselect.css"></style>