<template>
    <div class="container-fluid">
      <h1 class="text-center">Update Job</h1>
      <div v-if="updateSuccess" class="alert alert-success" role="alert">
            Updated successfully!
      </div>
      <router-link :to="'/pages/jobs/' + job[0]" class="btn btn-secondary btn-margin-top" >Back</router-link>
      <div class="row">
        <!-- First half of the form -->
        <div class="col-md-6">
          <div class="card border-0">
            <div class="card-body">
              <div class="form-group">
                <label for="title"><h3>Title:</h3></label>
                <input type="text" class="form-control" id="title" v-model="job[1]">
              </div>
              <div class="form-group">
                <label for="company"><h3>Company:</h3></label>
                <input type="text" class="form-control" id="company" v-model="job[4]">
              </div>
              
              <div class="form-group">
                <label for="title"><h3>Experience:</h3></label>
                <div class="row">
                        <div class="col">
                          <div class="form-group">
                              <h3>Min</h3>
                              <select class="form-control " v-model="minExperience">
                                  <option value="0">0</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                              </select>
                          </div>
                        </div>
                        <div class="col">
                          <div class="form-group">
                              <h3>Max</h3>
                              <select class="form-control " v-model="maxExperience">
                                  <option value="5">5</option>
                                  <option value="10">10</option>
                                  <option value="15">15</option>
                                  <option value="20">20</option>
                                
                              </select>
                          </div>
                        </div>
                  </div>
              </div>

              <div class="form-group">
                <label for="company"><h3>Education:</h3></label>
                <!-- <input type="text" class="form-control" id="company" v-model="job[7]"> -->
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <select class="form-control l" v-model="job[7]">
                        <option value="">Select Degree</option>
                        <option value="0">None</option>
                        <option value="UG-Any degree">UG-Any degree</option>
                        <option value="PG-Any degree">PG-Any degree</option>
                        <option value="UG-Any degree,PG-Any degree">UG-Any degree,PG-Any degree</option>
                        <option value="BSc">Bachelor of Science (BSc)</option>
                        <option value="MSc">Master of Science (MSc)</option>
                        <option value="PhD">Doctor of Philosophy (PhD)</option>
                        <option value="MD">Doctor of Medicine (MD)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="job-owner"><h3>Posted By:</h3></label>
                <input type="text" class="form-control" id="job-owner" v-model="job[14]">
              </div>
              
              <div class="form-group">
                <label for="recruiter"><h3>Primary Recruiter:</h3></label>
                <input type="text" class="form-control" id="recruiter" v-model="job[15]">
              </div>
              
              <div class="form-group">
                <label for="title"><h3>Status:</h3></label>
                <!-- <input type="text" class="form-control" id="title" v-model="job[10]"> -->
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <select class="form-control l" v-model="job[10]">
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="On-Hold">On-Hold</option>
                        <option value="Pending">Pending</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <h1>Description</h1>
                <ckeditor :editor="editor" v-model="job[2]"></ckeditor>
              </div>

              <div class="form-group">
                <label for="description"><h3>Benefits:</h3></label>
                <ckeditor :editor="editor" v-model="job[8]"></ckeditor>
              </div>

            </div>
          </div>
        </div>
        <!-- Second half of the form -->
        <div class="col-md-6">
          <div class="card border-0">
            <div class="card-body">
              
            <div class="form-group">
              <label for="title"><h3>Job Type:</h3></label>
              
              <select class="form-control " v-model="job[21]">
                <option value="">Select Type</option>
                <option value="Fulltime / Permanent">Fulltime / Permanent</option>
                <option value="Fulltime/ Internship / Permanent">Fulltime/ Internship / Permanent</option>
                <option value="Fulltime / Partime / Internship">Fulltime / Partime / Internship</option>
                <option value="Internship">Internship</option>
                <option value="Internship / Partime">Internship / Partime</option>
                
              </select>

              </div>
              
              <div class="form-group">
                  <label for="title"><h3>Skills:</h3></label>
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


              <div class="form-group">
                <label for="title"><h3>Locations:</h3></label>
                <!-- <input type="text" class="form-control" id="title" v-model="job[3]"> -->
                <select class="form-control " v-model="job[3]">
                  <option value="">Select Location</option>
                  <option value="Chennai, Tamil Nadu">Chennai, Tamil Nadu</option>
                  <option value="Coimbatore, Tamil Nadu">Coimbatore, Tamil Nadu</option>
                  <option value="Bangalore, Tamil Nadu">Bangalore, Tamil Nadu</option>
                  <option value="Mumbai, Maharastra">Mumbai, Maharastra</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Cochi, Kerala">Cochi, Kerala</option>
                  <option value="Madurai, Tamil Nad">Madurai, Tamil Nadu</option>
                </select>

              </div>

              <div class="form-group">
                <label for="company"><h3>Industry:</h3></label>
                <!-- <input type="text" class="form-control" id="company" v-model="job[5]"> -->
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <select class="form-control " v-model="job[5]">
                        <option value="">Select Industry</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Financial Sector">Financial Sector</option>
                        <option value="Banking">Banking</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Medical And Insurance">Medical And Insurance</option>
                        <option value="Management Service">Management Service</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Automobile Industry">Automobile Industry</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="profile-submitted"><h3>Profile Submitted:</h3></label>
                <input type="text" class="form-control" id="profile-submittedr" v-model="job[16]">
              </div>
              
              <div class="form-group">
                <label for="interviews"><h3>Interviews:</h3></label>
                <input type="text" class="form-control" id="interviews" v-model="job[17]">
              </div>

              <div class="form-group">
                <label for="Selected"><h3>Selected:</h3></label>
                <input type="text" class="form-control" id="Selected" v-model="job[18]">
              </div>

              <div class="form-group">
                <label for="joined"><h3>Joined:</h3></label>
                <input type="text" class="form-control" id="joined" v-model="job[19]">
              </div>
              
              <div class="form-group">
                <label for="backouts"><h3>Backouts:</h3></label>
                <input type="text" class="form-control" id="backouts" v-model="job[20]">
              </div>

              <div class="form-group">
                <label for="description"><h3>About:</h3></label>
                <ckeditor :editor="editor" v-model="job[9]"></ckeditor>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      
          <button class="btn btn-primary btn-margin-right" @click="updateJob">Update</button>
          <button class="btn btn-danger btn-margin-right" @click="deleteJob">Delete</button>
          <router-link :to="'/pages/jobs/' + job[0]" class="btn btn-secondary btn-margin-right">Cancel</router-link>
      </div>
      <!-- </div>
    </div> -->
  </template>
  
  <script>

  import axios from 'axios';
  import VueMultiselect from 'vue-multiselect'
  
  
  export default {
    name: 'updateJob',
    data() {
      return {
        job: {},
        updateSuccess:false,
        minExperience :'',
        maxExperience:'',
        education:'',
        status:'',
        skills:'',
        editor : ClassicEditor,
        selectedSkills: [],
        options:['Java','Python','Machine learning','Accounting','Tally','Executive','Excel','Computer Networks','OpenCV','Electronics','Communication','Arduino'],
       
      };
    },
    mounted() {
      const jobId = this.$route.params.id;
      this.fetchJobDetails(jobId);
    },
    components: { 
      VueMultiselect 
    },

    methods: {
      getMinimumExperience(exp){
        const data = exp.split(' ');
        this.minExperience = data[0];
        this.maxExperience = data[2];
      },

      fetchJobDetails(jobId) {
       
        axios.get(`http://127.0.0.1:8000/jobs/${jobId}`)
          .then(response => {
            this.job = response.data.data;
            console.log(response.data.data);
            console.log("exp",this.job[6]);
            this.getMinimumExperience(this.job[6]);
          })
          .catch(error => {
            console.error('Error fetching job details:', error);
          });
      },
      deleteJob(){
        axios.delete(`http://127.0.0.1:8000/deleteJob/${this.job[0]}`)
        .then(response => {
          console.log('Deleted successfully',response.data);
          this.$router.push('/pages/jobs');
        })
        .catch(error => {
          console.error('Error deleting job:', error);
        });
      },

      calculateTimeStamp(){
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const formattedTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return formattedTimestamp;
      },

      updateJob() {

        const experience =  `${this.minExperience} - ${this.maxExperience} years`;
        
        const jobData = {
        "title": this.job[1],
        "description": this.job[2],
        "locations": this.job[3],
        "company": this.job[4],
        "industry": this.job[5],
        "experience": experience,
        "education": this.job[7],
        "benefits": this.job[8],
        "about": this.job[9],
        "status": this.job[10],
        "skills": this.selectedSkills.join(', '),
        "refreshed_at":this.calculateTimeStamp(),
        "job_owner" : this.job[14],
        "recruiter":this.job[15],
        "num_profiles":this.job[16],
        "interviews":this.job[17],
        "selections":this.job[18],
        "joined":this.job[19],
        "backouts":this.job[20],
        "job_type":this.job[21],
      };

        
        axios.put(`http://127.0.0.1:8000/updatejob/${this.job[0]}`, jobData)
          .then(response => {
            console.log('Job updated successfully:', response.data);
            this.updateSuccess = true
            window.scrollTo(0,0);
            // this.$router.push(`/pages/jobs/${this.job[0]}`);
          })
          .catch(error => {
            console.error('Error updating job:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .container-fluid {
    margin-top: 70px;
    width: 1080px;
    margin-left: 7%;
  }
  .card {
    margin-top: 20px;
  }
  .form-group {
  margin-bottom: 20px;
}
.btn-margin-right {
  margin-right: 10px;
}
.btn-margin-top {
  margin-right: 10px;
  margin-top: -10px;
  margin-bottom: 15px;
}
  </style>

  <style src="vue-multiselect/dist/vue-multiselect.css"></style>
  













  <!-- <div class="card">
        <div class="card-body">
          
          <div class="form-group">
            <label for="title"><h3>Title:</h3></label>
            <input type="text" class="form-control" id="title" v-model="job[1]">
          </div>
          <div class="form-group">
            <label for="company"><h3>Company:</h3></label>
            <input type="text" class="form-control" id="company" v-model="job[4]">
          </div>
          <div class="form-group">
            <label for="description"><h3>Description:</h3></label>
            <textarea class="form-control" id="description" rows="3" v-model="job[2]"></textarea>
          </div>
          <div class="form-group">
            <label for="title"><h3>Experience:</h3></label>
            <input type="text" class="form-control" id="title" v-model="job[6]">
          </div>
          <div class="form-group">
            <label for="company"><h3>Education:</h3></label>
            <input type="text" class="form-control" id="company" v-model="job[7]">
          </div>
          <div class="form-group">
            <label for="description"><h3>Benefits:</h3></label>
            <textarea class="form-control" id="description" rows="3" v-model="job[8]"></textarea>
          </div>
          <div class="form-group">
            <label for="title"><h3>Status:</h3></label>
            <input type="text" class="form-control" id="title" v-model="job[10]">
          </div>
          <div class="form-group">
            <label for="title"><h3>Skills:</h3></label>
            <input type="text" class="form-control" id="title" v-model="job[11]">
          </div>
          <div class="form-group">
            <label for="title"><h3>Locations:</h3></label>
            <input type="text" class="form-control" id="title" v-model="job[3]">
          </div>
          <div class="form-group">
            <label for="company"><h3>Industry:</h3></label>
            <input type="text" class="form-control" id="company" v-model="job[5]">
          </div>
          <div class="form-group">
            <label for="description"><h3>About:</h3></label>
            <textarea class="form-control" id="description" rows="3" v-model="job[9]"></textarea>
          </div>
          
           -->