
<template>
    
    <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <div v-if="updateSuccess" class="alert alert-success" role="alert">
              Added successfully!
            </div>
            
            <div class="row">
              <label style="font-size: 20px;" >Personal Details</label>
              <button class="button-save">Save and continue</button>
              <button class="button-reset">Reset</button>

              <!-- First half of the form -->
              <div class="col-md-4">
                  <div class="form-group">
                      <br>
                      <label for="title"><h6>Employee</h6></label>
                      <input type="text" class="form-control" id="title" v-model="job.title" style="width: 230px;">
                  </div>
                  <div class="form-group">
                      <label for="company"><h6>Mobile Number</h6></label>
                      <input type="text" class="form-control" id="company" v-model="job.company" style="width: 230px;">
                  </div>
              
                  <div class="form-group">
                      <label for="experience"><h6>Date Of Birth</h6></label>
                      <input type="date" class="form-control" id="company" v-model="job.company" style="width: 230px;">
                  </div>
                  
                  
                
                  <div class="form-group">
                      <label for="company"><h6>State</h6></label>
                      <select class="form-control" v-model="job.job_type" style="width:230px;">
                      <option value="">Select State</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Maharastra">Maharastra</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Karnataka">Karnataka</option>
                      </select>
                  </div>

                  <div class="form-group" >
                      <label for="recruiter" ><h6>Experience</h6></label>
                      <select class="form-control " v-model="job.job_type" style="width:80px;">
                          <option value="">Years </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                      </select>
                      
                      <h6>years</h6>
                      <select class="form-control " v-model="job.job_type" style="width:80px;">
                          <option value="">Months</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                      </select>
                      <h6>Months</h6>
                  </div>   
              </div>

              <!-- Second half of the form -->
              <div class="col-md-4">
                  
                <div class="form-group">
                    <br>
                    <label for="title"><h6>Middle Name</h6></label>
                    <input type="text" class="form-control" id="company" v-model="job.company" style="width: 230px;">
                </div>

                <div class="form-group">
                  <div class="form-group">
                      <label for="company"><h6>Alternate Mobile Number</h6></label>
                      <input type="text" class="form-control" id="company" v-model="job.company" style="width: 230px;">
                  </div>
                </div>

                <div class="form-group">
                  <label for="title"><h6>Address:</h6></label>
                  <input type="text" class="form-control" id="company" v-model="job.company" style="width: 230px;">
                </div>

                <div class="form-group">
                  <label for="company"><h6>Zip code</h6></label>
                  <input type="text" class="form-control" id="company" v-model="job.company" style="width: 230px;">
                </div>

                <div class="form-group">
                  <label for="description"><h6>Relocation</h6></label>
                  <br>
                  <input type="radio" name="" id="" ><label style="font-size:19px">&nbsp; yes &nbsp;</label>  
                  <input type="radio" name="" id="" ><label style="font-size:19px">&nbsp; No</label>
                </div>
              </div>

              <div class="col-md-4">
                  <div class="form-group">
                      <br>
                      <label for="title"><h6>Last Name</h6></label>
                      <input type="text" class="form-control" id="company" v-model="job.company" style="width: 230px;">
                  </div>
                  <div class="form-group">
                      <label for="title"><h6>Email</h6></label>
                      <input type="text" class="form-control" id="company" v-model="job.company" style="width: 230px;">
                  </div>
                  <div class="form-group">
                      <label for="title"><h6>City</h6></label>
                      <input type="text" class="form-control" id="company" v-model="job.company" style="width: 230px;">
                  </div>
                  <div class="form-group">
                      <label for="title"><h6>Linkedin URL</h6></label>
                      <input type="text" class="form-control" id="company" v-model="job.company" style="width: 230px;">
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
                              >
                              </VueMultiselect>
                          </div>
                      </div>
                  </div>

              </div>

              
              </div>
              
              <router-link to="/pages/jobs" class="btn btn-secondary btn-margin-right">Cancel</router-link>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import VueMultiselect from 'vue-multiselect';

  export default {
    name: 'employee',
    components: {
      VueMultiselect 
    },
    data() {
      return {
        job: {
            title: '',
            description: '',
            locations: '',
            company: '',
            industry: '',
            experience: '',
            education: '',
            benefits: '', 
            about: '',
            skills: '',
            recruiter:'',
            num_profile:0,
            interviews:0,
            selections:0,
            joined:0,
            backouts:0,
            job_type:''            
            
        },
        // editor : ClassicEditor,
        personal:'',
        documents : '',
        maxExperience:'0',
        minExperience : '0',
        updateSuccess : false,
        pastedText : '',
        selectedSkills: [],
        options:['Java','Python','Machine learning','Accounting','Tally','Executive','Excel','Computer Networks','OpenCV','Electronics','Communication','Arduino'],
       
        
      };
    },
   
    methods: {
      addJob() {
        console.log("first")
    }
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
  </style>
   <style src="vue-multiselect/dist/vue-multiselect.css"></style>