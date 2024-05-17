<template>

  <div class="container-fluid">
    <div class="card">
      <div class="card-body">
        <div class="row" style="margin-top:-205px">
          <label style="font-size: 20px;">Experience</label>
          <button class="button-save btn btn-primary">Save and continue</button>
          <button class="button-reset btn btn-secondary" @click="reset">Reset</button>

          <!-- First half of the form -->
          <div class="col-md-4">
            <br>
            <div class="form-group">
              <br>
              <label for="title">
                <h6>Company Name</h6>
              </label>
              <input type="text" class="form-control" id="title" v-model="company_name" style="width: 230px;">
            </div>

            <div class="form-group">
              <label for="company">
                <h6>Reson for quiting</h6>
              </label>
              <textarea class="form-control" id="description" rows="3" v-model="reason_for_quiting"
                style="width: 550px;"></textarea>
            </div>


          </div>

          <!-- Second half of the form -->
          <div class="col-md-4">
            <br>
            <div class="form-group">
              <br>
              <label for="title">
                <h6>Job Title</h6>
              </label>
              <input type="text" class="form-control" id="company" v-model="job_title" style="width: 230px;">
            </div>




          </div>

          <div class="col-md-4">
            <br>
            <div class="form-group">
              <br>
              <label for="recruiter">
                <h6>Experience</h6>
              </label>
              <br>
              <select class="form-control " v-model="exp_years" style="width:80px;display: inline">
                <option value="">Years </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>

              <h6 style="display: inline; margin-left:4px"> years </h6>
              <select class="form-control " v-model="exp_months" style="width:80px;display: inline; margin-left:4px ">
                <option value=""> Months </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <h6 style="display: inline; margin-left:4px"> Months</h6>
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
import EventBus from './event-bus';

export default {
  name: 'experience',
  components: {
    VueMultiselect,
  },

  mounted(){
    EventBus.$on('document-data', this.handleDocumentData);
    EventBus.$on('personal-data', this.handlePersonalData);
    EventBus.$on('language-data', this.handleLanguageData);
    EventBus.$on('education-data',this.handleEducationData);
    EventBus.$on('certification-data',this.handleCertificationData);
  },

  data() {
    return {
      personalData: {},
      skills: {},
      company_name: '',
      exp_years: '',
      exp_months: '',
      company_location: '',
      reason_for_quiting: '',
      job_title: '',
      render_document: false,
      render_Personal: false,
      document_data: null,
      lang1 : '',
      education : null,
      certificates:null
    };
  },

  methods: {
    reset() {
        this.company_name = '',
        this.exp_years = '',
        this.exp_months = '',
        this.company_location = '',
        this.reason_for_quiting = '',
        this.job_title = ''

    },

    handleDocumentData(data){
      this.document_data = data;
      console.log("docuement data",data);
    },

    handlePersonalData(data,skills){
      this.personalData = data;
      this.skills = skills;
      console.log("personal data",data);
    },

    handleLanguageData(data){
      this.lang1 = data;
      console.log("language data",data);
    },

    handleEducationData(data){
      this.education = data;
      console.log("education data",data);
    },

    handleCertificationData(data){
      this.certificates = data;
      console.log("certificate data",data);
    }


  }
};
</script>

<style scoped>
.icons-con {
  margin-left: -40px;
}

.container {
  position: fixed;
  width: 100%;
  left: 170px;
  margin-left: 0;
  margin-top: -167px;
  text-align: center;
}

.container-fluid {
  margin-top: 45px;
  margin-left: 250px;
  width: 1000px;

}

.card {
  margin-top: 20px;
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