
<template>
    <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <div v-if="updateSuccess" class="alert alert-success" role="alert">
              Added successfully!
            </div>
            
            <div class="row" style="margin-top:-10px">
              <label style="font-size: 20px;" >Education</label>
              <button class="button-save btn btn-primary">Save and continue</button>
              <button class="button-reset btn btn-secondary" @click="reset">Reset</button>

              <!-- First half of the form -->
              <div class="col-md-4">
                  <div class="form-group">
                      <br>
                      <span>Secondary School</span>
                      <br>
                      <label for="company"><h6>Board</h6></label>
                      <select class="form-control" v-model="education.secondary_board" style="width:230px;">
                        <option value="">Select Board</option>
                        <option value="State Board">State Board</option>
                        <option value="Central Board">Central Board</option>
                        <option value="International">International</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <span>Higher Secondary</span>
                      <br>
                      <label for="company"><h6>Board</h6></label>
                      <select class="form-control" v-model="education.higher_secondary_board" style="width:230px;">
                        <option value="">Select Board</option>
                        <option value="State Board">State Board</option>
                        <option value="Central Board">Central Board</option>
                        <option value="International">International</option>
                      </select>
                  </div>
              
                  <div class="form-group">
                      <br>
                      <label for="experience"><h6>UG</h6></label>
                      <select class="form-control" v-model="education.UG_institute" style="width:230px;">
                        <option value="">Select College</option>
                        <option value="Anna University">Anna University</option>
                        <option value="Madras University">Madras University</option>
                        <option value="Vels University">Vels University</option>
                      </select>
                  </div>
                  
                  
                
                  <div class="form-group">
                      <br>
                      <label for="experience"><h6>PG</h6></label>
                      <select class="form-control" v-model="education.PG_institute" style="width:230px;">
                        <option value="">Select College</option>
                        <option value="Anna University">Anna University</option>
                        <option value="Madras University">Madras University</option>
                        <option value="Vels University">Vels University</option>
                      </select>
                  </div>

                   
              </div>

              <!-- Second half of the form -->
              <div class="col-md-4">
                  
                <div class="form-group">
                    <br>
                    <br>
                    <label for="title"><h6>10th Percentage</h6></label>
                    <input type="text" class="form-control" id="company" v-model="education.secondary_percentage" style="width: 230px;">
                </div>

                <div class="form-group">
                  <div class="form-group">
                      <br>
                      <label for="company"><h6>12th Percentage</h6></label>
                      <input type="text" class="form-control" id="company" v-model="education.higher_secondary_percentage" style="width: 230px;">
                  </div>
                </div>

                <div class="form-group">
                  <br>
                  <label for="title"><h6>UG Percentage</h6></label>
                  <input type="text" class="form-control" id="company" v-model="education.UG_percentage" style="width: 230px;">
                </div>

                <div class="form-group">
                  <br>
                  <label for="company"><h6>PG Percentage</h6></label>
                  <input type="text" class="form-control" id="company" v-model="education.PG_percentage" style="width: 230px;">
                </div>

              </div>

              <div class="col-md-4">
                <div class="form-group">
                    <br>
                    <br>
                    <label for="title"><h6>Passed out year</h6></label>
                    <input type="text" class="form-control" id="company" v-model="education.secondary_passed_out_year" style="width: 230px;">
                </div>
                <div class="form-group">
                    <br>
                    <label for="title"><h6>Passed out year</h6></label>
                    <input type="text" class="form-control" id="company" v-model="education.higher_secondary_passed_out_year" style="width: 230px;">
                </div>
                <div class="form-group">
                    <br>
                    <label for="title"><h6>Passed out year</h6></label>
                    <input type="text" class="form-control" id="company" v-model="education.UG_passed_out_year" style="width: 230px;">
                </div>
                <div class="form-group">
                    <br>
                    <label for="title"><h6>Passed out year</h6></label>
                    <input type="text" class="form-control" id="company" v-model="education.PG_passed_out_year" style="width: 230px;">
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
    name: 'education',
    components: {
      VueMultiselect 
    },
    data() {
      return {
        education: {
            secondary_board: '',
            secondary_percentage: '',
            secondary_passed_out_year: '',
            higher_secondary_board: '',
            higher_secondary_percentage: '',
            higher_secondary_passed_out_year: '',
            UG_institute: '',
            UG_percentage: '',
            UG_passed_out_year: '',
            PG_institute: '',
            PG_percentage: '',
            PG_passed_out_year: '',  
        },
        
        updateSuccess : false,  
      };
    },
   
    methods: {
      reset() {        
        this.education.secondary_board= '',
        this.education.secondary_percentage= '',
        this.education.secondary_passed_out_year= '',
        this.education.higher_secondary_board= '',
        this.education.higher_secondary_percentage= '',
        this.education.higher_secondary_passed_out_year= '',
        this.education.UG_institute= '',
        this.education.UG_percentage= '',
        this.education.UG_passed_out_year= '',
        this.education.PG_institute= '',
        this.education.PG_percentage= '',
        this.education.PG_passed_out_year= ''
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
    
    margin-top:-177px;
    text-align:center;
  }

  .container-fluid{
    margin-top: 35px;
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