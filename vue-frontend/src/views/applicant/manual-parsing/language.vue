<template>

  <div class="container-fluid" style="margin-top: -70px;">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <label style="font-size: 20px;">Language</label>
          <button class="button-save btn btn-primary" @click="handleClick">Save and continue</button>
          <button class="button-reset btn btn-secondary" @click="reset">Reset</button>

          <!-- First half of the form -->
          <div class="col-md-4" style="margin-top:40px;">
            <div class="form-group">
              <br>
              <label for="company">
                <h6>Select a language</h6>
              </label>
              <select class="form-control" v-model="lang1" style="width:230px;">
                <option value="" disabled selected>Select</option>
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
                <option value="Hindi">Hindi</option>

              </select>
            </div>

            <div class="form-group">
              <label for="company">
                <h6>Select a language</h6>
              </label>
              <select class="form-control" v-model="lang2" style="width:230px;">
                <option value="" disabled selected>Select</option>
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
                <option value="Hindi">Hindi</option>

              </select>
            </div>

            <div class="form-group">
              <label for="company">
                <h6>Select a language</h6>
              </label>
              <select class="form-control" v-model="lang3" style="width:230px;">
                <option value="" disabled selected>Select</option>
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
                <option value="Hindi">Hindi</option>

              </select>
            </div>




          </div>

          <!-- Second half of the form -->
          <div class="col-md-4" style="margin-top:40px;">

            <div class="form-group">
              <br>
              <label for="title">
                <h6>Fluency level</h6>
              </label>
              <select class="form-control" v-model="lang1_proficiency" style="width:230px;">
                <option value="" disabled selected>Select</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div class="form-group">
              <label for="title">
                <h6>Fluency level</h6>
              </label>
              <select class="form-control" v-model="lang2_proficiency" style="width:230px;">
                <option value="" disabled selected>Select</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div class="form-group">
              <label for="title">
                <h6>Fluency level</h6>
              </label>
              <select class="form-control" v-model="lang3_proficiency" style="width:230px;">
                <option value="" disabled selected>Select</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>


          </div>

          <!-- third half -->
          <div class="col-md-4" style="margin-top:40px;">
            <div class="form-group">
              <br>
              <label for="title">
                <h6>Proficiency</h6>
              </label>
              <br>
              <input type="checkbox"  v-model="lang1_speak" value="Speack"><label style="font-size:19px">&nbsp; Speak &nbsp;</label>
              <input type="checkbox"  v-model="lang1_read" value="Read"><label style="font-size:19px">&nbsp; Read &nbsp;</label>
              <input type="checkbox" v-model="lang1_write" value="Write"><label style="font-size:19px">&nbsp; Write</label>
            </div>
            <div class="form-group" style="margin-top: -10px;">
              <br>
              <label for="title">
                <h6>Proficiency</h6>
              </label>
              <br>
              <input type="checkbox" v-model="lang2_speak" value="Speak"><label style="font-size:19px">&nbsp; Speak &nbsp;</label>
              <input type="checkbox"  v-model="lang2_read" value="Read"><label style="font-size:19px">&nbsp; Read &nbsp;</label>
              <input type="checkbox"  v-model="lang2_write" value="Write"><label style="font-size:19px">&nbsp; Write</label>
            </div>
            <div class="form-group" style="margin-top: -10px;">
              <br>
              <label for="title">
                <h6>Proficiency</h6>
              </label>
              <br>
              <input type="checkbox"v-model="lang3_speak" value="Speak"><label style="font-size:19px">&nbsp; Speak &nbsp;</label>
              <input type="checkbox" v-model="lang3_read" value="Read"><label style="font-size:19px">&nbsp; Read &nbsp;</label>
              <input type="checkbox" v-model="lang3_write" value="Write"><label style="font-size:19px">&nbsp; Write</label>
            </div>
          </div>


        </div>
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
import EventBus from './event-bus';


export default {
  name: 'language',
  components: {
    VueMultiselect
  },
  data() {
    return {
      lang1: '',
      lang1_proficiency: '',
      lang1_speak: '',
      lang1_read: '',
      lang1_write: '',
      
      lang2: '',
      lang2_proficiency: '',
      lang2_speak: '',
      lang2_read: '',
      lang2_write: '',
      
      lang3: '',
      lang3_proficiency: '',
      lang3_speak: '',
      lang3_read: '',
      lang3_write: '',
    };
  },

  methods: {
    reset() {
      this.lang1 ='',
      this.lang1_profeciency='',
      this.lang1_speak= '',
      this.lang1_read='',
      this.lang1_write= '',


      this.lang2='',
      this.lang2_profeciency='',
      this.lang2_speak= '',
      this.lang2_read= '',
      this.lang2_write= '',

      this.lang3='',
      this.lang3_profeciency='',
      this.lang3_speak='',
      this.lang3_read='',
      this.lang3_write= ''
    },

    handleClick(){
      EventBus.$emit('language-data',this.lang1);
      console.log("language data emitted");
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