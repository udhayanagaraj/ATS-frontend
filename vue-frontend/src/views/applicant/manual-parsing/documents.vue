
<template>
    
    <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <div v-if="updateSuccess" class="alert alert-success" role="alert">
              Added successfully!
            </div>
            
            <div class="row" style="margin-top: -255px;">
              <label style="font-size: 20px;" >Documents</label>
              <button class="button-save">Save and continue</button>
              <button class="button-reset">Reset</button>

              <div class="form-group resume-container">
                  <br>
                  <label for="title"><h6>Upload your resume</h6></label>
                  <input type="file" class="form-control" id="title" v-on="resume" style="width: 230px; margin-left:-40px">
              </div>
            </div>
              <br>
              <br>
              <br>
            
              <router-link to="/pages/jobs" class="btn btn-secondary btn-margin-right">Cancel</router-link>
          </div>
        </div>
    </div>
  </template>
  
  <script>

  import VueMultiselect from 'vue-multiselect';

  export default {
    name: 'document',
    components: {
      VueMultiselect 
    },
    data() {
      return {
        resume:null,
        
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
  
  .resume-container{
    margin-top:70px;
    margin-left:380px;
  }
  .container-fluid{
    margin-top: 90px;
    margin-left: 250px;
    width: 400px;
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


    .button-save{
        margin-left:630px;
        max-width: 190px;
    }
    .button-save:hover{
        background-color: #e0e0e0;
    }
    .button-reset{
        margin-left:840px;
        max-width: 110px;
        margin-top: -30px;
    }
    .button-reset:hover{
        background-color: #e0e0e0;
    }
  </style>
   <style src="vue-multiselect/dist/vue-multiselect.css"></style>