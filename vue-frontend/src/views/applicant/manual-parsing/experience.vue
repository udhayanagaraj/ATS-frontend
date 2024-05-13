
<template>
    
    <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <div v-if="updateSuccess" class="alert alert-success" role="alert">
              Added successfully!
            </div>
            
            <div class="row" style="margin-top:-205px">
              <label style="font-size: 20px;" >Experience</label>
              <button class="button-save btn btn-primary">Save and continue</button>
              <button class="button-reset btn btn-secondary">Reset</button>
              
              <!-- First half of the form -->
              <div class="col-md-4">
                <br>
                  <div class="form-group">
                      <br>
                      <label for="title"><h6>Company Name</h6></label>
                      <input type="text" class="form-control" id="title" v-model="job.title" style="width: 230px;">
                  </div>
                  
                  
                  
                
                  <div class="form-group">
                      <label for="company"><h6>Reson for quiting</h6></label>
                      <textarea class="form-control" id="description" rows="3" v-model="job[9]" style="width: 550px;"></textarea>
                  </div>

                    
              </div>

              <!-- Second half of the form -->
              <div class="col-md-4">
                <br>
                <div class="form-group">
                    <br>
                    <label for="title"><h6>Job Title</h6></label>
                    <input type="text" class="form-control" id="company" v-model="job.company" style="width: 230px;">
                </div>

              

                
              </div>

              <div class="col-md-4">
                <br>
                  <div class="form-group" >
                      <br>
                      <label for="recruiter" ><h6>Experience</h6></label>
                      <br>
                      <select class="form-control " v-model="job.job_type" style="width:80px;display: inline">
                          <option value="">Years </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                      </select>
                      
                      <h6 style="display: inline;"> years  </h6>
                      <select class="form-control " v-model="job.job_type" style="width:80px;display: inline">
                          <option value=""> Months </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                      </select>
                      <h6 style="display: inline"> Months</h6>
                  </div>
                  
                  

              </div>

              
              </div>
              
              <router-link to="/pages/jobs" class="btn btn-secondary btn-margin-right">Cancel</router-link>
              <button class="btn btn-primary btn-margin-right">Submit</button>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import VueMultiselect from 'vue-multiselect';

  export default {
    name: 'experience',
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
        max-width: 100px;
    }
    .button-reset:hover{
        background-color: #e0e0e0;
    }
  </style>
   <style src="vue-multiselect/dist/vue-multiselect.css"></style>