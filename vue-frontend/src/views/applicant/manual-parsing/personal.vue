<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-body">
        <div v-if="updateSuccess" class="alert alert-success" role="alert">
          Added successfully!
        </div>

        <div class="row" style="margin-top:-10px">
          <label style="font-size: 20px;">Personal Details</label>
          <button class="button-save btn btn-primary" @click="handleClick">Save and continue</button>
          <button class="button-reset btn btn-secondary" @click="reset">Reset</button>

          <!-- First half of the form -->
          <div class="col-md-4">
            <div class="form-group">
              <br>
              <label for="title">
                <h6>First Name</h6>
              </label>
              <input type="text" class="form-control" id="title" v-model="personal.first_name" style="width: 230px;">
            </div>
            <div class="form-group">
              <label for="company">
                <h6>Mobile Number</h6>
              </label>
              <input type="text" class="form-control" id="company" v-model="personal.mobile" style="width: 230px;">
            </div>

            <div class="form-group">
              <label for="experience">
                <h6>Date Of Birth</h6>
              </label>
              <input type="date" class="form-control" id="company" v-model="personal.dob" style="width: 230px;">
            </div>



            <div class="form-group">
              <label for="company">
                <h6>State</h6>
              </label>
              <select class="form-control" v-model="personal.state" style="width:230px;">
                <option value=""  disabled selected>Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Maharastra">Maharastra</option>
                <option value="Kerala">Kerala</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>

            <div class="form-group">
              <label for="experience">
                <h6>Job Title</h6>
              </label>
              <input type="text" class="form-control" id="company" v-model="personal.job_title" style="width: 230px;">
            </div>
          </div>

          <!-- Second half of the form -->
          <div class="col-md-4">

            <div class="form-group">
              <br>
              <label for="title">
                <h6>Middle Name</h6>
              </label>
              <input type="text" class="form-control" id="company" v-model="personal.middle_name" style="width: 230px;">
            </div>

            <div class="form-group">
              <div class="form-group">
                <label for="company">
                  <h6>Alternate Mobile Number</h6>
                </label>
                <input type="text" class="form-control" id="company" v-model="personal.alternate_mobile"
                  style="width: 230px;">
              </div>
            </div>

            <div class="form-group">
              <label for="title">
                <h6>Address:</h6>
              </label>
              <input type="text" class="form-control" id="company" v-model="personal.address" style="width: 230px;">
            </div>

            <div class="form-group">
              <label for="company">
                <h6>Pin code</h6>
              </label>
              <input type="text" class="form-control" id="company" v-model="personal.pincode" style="width: 230px;">
            </div>

            <div class="form-group">
              <label for="description">
                <h6>Willling to Relocate</h6>
              </label>
              <br>
              <input type="radio" v-model="personal.relocation" value="yes"><label style="font-size:19px">&nbsp; yes
                &nbsp;</label>
              <input type="radio" v-model="personal.relocation" value="no"><label style="font-size:19px">&nbsp;
                No</label>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-group">
              <br>
              <label for="title">
                <h6>Last Name</h6>
              </label>
              <input type="text" class="form-control" id="last_name" v-model="personal.last_name" style="width: 230px;">
            </div>
            <div class="form-group">
              <label for="title">
                <h6>Email</h6>
              </label>
              <input type="email" class="form-control" id="email" v-model="personal.email" style="width: 230px;">
            </div>
            <div class="form-group">
              <label for="company">
                <h6>City</h6>
              </label>
              <select class="form-control" v-model="personal.city" style="width:230px;">
                <option value="" disabled selected>Select city</option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Cochi">Cochi</option>
                <option value="Mumbai "> Mumbai</option>
                <option value="Pune">Pune</option>
              </select>
            </div>
            <div class="form-group">
              <label for="title">
                <h6>Linkedin URL</h6>
              </label>
              <input type="text" class="form-control" id="company" v-model="personal.linkedin_url"
                style="width: 230px;">
            </div>
            <div class="form-group">
              <label for="title">
                <h6>Skills</h6>
              </label>
              <div class="row">
                <div class="col">
                  <VueMultiselect v-model="selectedSkills" :options="options" :multiple="true" :close-on-select="true"
                    placeholder="Pick some" style="width:227px">
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
import EventBus from './event-bus';


export default {
  name: 'personal-details',
  components: {
    VueMultiselect
  },
  data() {
    return {
      personal: {
        first_name: '',
        last_name: '',
        middle_name: '',
        mobile: '',
        dob: '',
        state: '',
        job_title: '',
        alternate_mobile: '',
        address: '',
        city: '',
        pincode: '',
        email: '',
        linkedin_url: '',
        relocation: '',

      },


      updateSuccess: false,
      selectedSkills: [],
      options: ['Java', 'Python', 'Machine learning', 'Accounting', 'Tally', 'Executive', 'Excel', 'Computer Networks', 'OpenCV', 'Electronics', 'Communication', 'Arduino'],
    };
  },

  methods: {

    reset() {
        this.personal.first_name = '',
        this.personal.last_name = '',
        this.personal.middle_name = '',
        this.personal.mobile = '',
        this.personal.dob = '',
        this.personal.state = '',
        this.personal.job_title = '',
        this.personal.alternate_mobile = '',
        this.personal.address = '',
        this.personal.city = '',
        this.personal.pincode = '',
        this.personal.email = '',
        this.personal.linkedin_url = '',
        this.personal.relocation = '',
        this.selectedSkills = null
    },

    handleClick(){
      EventBus.$emit('personal-data',this.personal,this.selectedSkills);
      console.log("Personal data emitted");
    }
    
  }
};
</script>

<style scoped>
.icons-con {
  margin-left: -40px;
}

.container-fluid {
  top: 0;
  margin-left: 250px;
  width: 1000px;
  height: 580px;
}

.card {
  margin-top: 30px;
  border: none;
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
  margin-top: 190px;
  /* Add some top margin */
}



.custom-button {
  padding: 10px 20px;
  /* Adjust padding as needed */
  background-color: #f8efef;
  /* White-silver background color */
  border-radius: 5px;
  /* Rounded corners */
  cursor: pointer;
  /* Show pointer cursor on hover */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Add a subtle shadow */
  margin-bottom: 10px;
  /* Add margin between buttons */
  width: 300px;
}

.custom-button:hover {
  background-color: #e0e0e0;
  /* Darken background on hover */
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
</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>