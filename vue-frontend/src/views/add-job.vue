
<template>
    

    <div class="container-fluid">
      <div class="card">
        <div class="card-body">
          <div v-if="updateSuccess" class="alert alert-success" role="alert">
            Added successfully!
          </div>
          <h4 style="text-align: center">Add Job</h4>
          <router-link :to="'/pages/jobs'" class="btn btn-secondary btn-margin-top" >Back</router-link>
          <div>
            <textarea class="form-control" rows="5" v-model="pastedText" placeholder="Paste text here"></textarea>
            <button class="btn btn-primary mt-3" @click="parsing">Parse Text</button>    
          </div>
        
          <div class="row">
            <!-- First half of the form -->
            <div class="col-md-6">
              <div class="form-group">
                <br>
                <label for="title"><h3>Title:</h3></label>
                <input type="text" class="form-control" id="title" v-model="job.title">
              </div>

              <div class="form-group">
                <label for="company"><h3>Company:</h3></label>
                <input type="text" class="form-control" id="company" v-model="job.company">
              </div>
          
              <div class="form-group">
                <label for="experience"><h3>Experience:</h3></label>
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
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <select class="form-control  " v-model="job.education">
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
                <label for="recruiter"><h3>Primary Recruiter:</h3></label>
                <input type="text" class="form-control" id="recruiter" v-model="job.recruiter">
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

             

            </div>
            <!-- Second half of the form -->
            <div class="col-md-6">
              


              <div class="form-group">
                <br/>
                <label for="title"><h3>Job Type:</h3></label>
                <select class="form-control  " v-model="job.job_type">
                  <option value="">Select Type</option>
                  <option value="Fulltime / Permanent">Fulltime / Permanent</option>
                  <option value="Fulltime/ Internship / Permanent">Fulltime/ Internship / Permanent</option>
                  <option value="Fulltime / Partime / Internship">Fulltime / Partime / Internship</option>
                  <option value="Internship">Internship</option>
                  <option value="Internship / Partime">Internship / Partime</option>
                </select>
              </div>


              

              <div class="form-group">
                <label for="title"><h3>Locations:</h3></label>
                <select class="form-control  " v-model="job.locations">
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
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <select class="form-control  " v-model="job.industry">
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
                <label for="benifits"><h3>Benefits:</h3></label>
                <ckeditor :editor="editor" v-model="job.benefits"></ckeditor>
              </div>


              <div class="form-group">
                <label for="about"><h3>About:</h3></label>
                <ckeditor :editor="editor" v-model="job.about"></ckeditor>
               </div>
              
            </div>
            <div class="form-group" style="width: 700px;">
              <h1>Description</h1>
              <ckeditor :editor="editor" v-model="job.description"></ckeditor>
            </div>
          </div>
          <button class="btn btn-primary btn-margin-right" @click="addJob">Add Job</button>
          <router-link to="/pages/jobs" class="btn btn-secondary btn-margin-right">Cancel</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import VueMultiselect from 'vue-multiselect';
  

  export default(await import("vue")).defineComponent({
    name: 'AddJob',
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
       
        editor: ClassicEditor,
        maxExperience:'0',
        minExperience : '0',
        updateSuccess : false,
        pastedText : '',
        selectedSkills: [],
        options:['Java','Python','Machine learning','Accounting','Tally','Executive','Excel','Computer Networks','OpenCV','Electronics','Communication','Arduino'],
       
        
      };
    },
   
    methods: {
      parsing(){
        const titleRegex = /(?:Job\s)?Title\s*:\s*([^\n]+)/i;
        const salaryRegex = /Salary\s*:\s*([^\n]+)/i;
        const skillRegex = /Skills\s*:\s*([^\n]+)/i;
        const companyRegex = /Company\s*:\s*([^\n]+)/i;
        const locationRegex = /Location\s*:\s*([^\n]+)/i;
        const educationRegex = /Education\s*:\s*UG:\s*([^\n,]+)(?:,\s*PG:\s*([^\n,]+))?/i;
        const industryRegex = /Industry\s*Type\s*:\s*([^\n,]+)/i;
        const descriptionRegex = /Description\s*:\s*([^\n]+)/i;


        const titleMatch = this.pastedText.match(titleRegex);
        const salaryMatch = this.pastedText.match(salaryRegex);
        const skillMatch = this.pastedText.match(skillRegex);
        const companyMatch = this.pastedText.match(companyRegex);
        const locationMatch = this.pastedText.match(locationRegex);
        const educationMatch = this.pastedText.match(educationRegex);
        const industryMatch = this.pastedText.match(industryRegex);
        const descriptionMatch = this.pastedText.match(descriptionRegex);

        if (titleMatch) {
          this.job.title = titleMatch[1].trim();
        }
        if (salaryMatch) {
          this.job.salary = salaryMatch[1].trim();
        }
        if (skillMatch) {
          this.job.skills = skillMatch[1].trim();
        }
        if (companyMatch) {
          this.job.company = companyMatch[1].trim();
        }
        if (locationMatch) {
          this.job.locations = locationMatch[1].trim();
        }
        if (descriptionMatch) {
          this.job.description = descriptionMatch[1].trim();
        }
        if (educationMatch) {
          this.job.education =  {
            UG: educationMatch[1].trim(),
            PG: educationMatch[2] ? educationMatch[2].trim() : ''
          };
        }
        if (industryMatch) {
          this.job.industry = industryMatch[1].trim();
        }
      },

      addJob() {
        const experience = `${this.minExperience} - ${this.maxExperience} years`;
        const status = 'Active';
        const Posted_by  = 'Asha';

        const dataToSend = {
            "title": this.job.title,
            "description": this.job.description,
            "locations": this.job.locations,
            "company": this.job.company,
            "industry": this.job.industry,
            "experience": experience,
            "education": this.job.education,
            "benefits": this.job.benefits,
            "about": this.job.about,
            "status": status,
            "skills": this.selectedSkills.join(', '),
            "job_owner":Posted_by,
            "recruiter":this.job.recruiter,
            "num_profile":this.num_profile,
            "interviews":this.job.interviews,
            "selections" :this.job.selections,
            "joined": this.job.joined,
            "backouts" : this.job.backouts,
            "job_type" : this.job.job_type,
        }
        axios.post('http://127.0.0.1:8000/addJobs/', dataToSend)
          .then(response => {
            console.log('Job added successfully:', response.data);
            this.updateSuccess = true;
            window.scrollTo(0,0);

            // this.$router.push('pages/jobs');
          })
          .catch(error => {
            console.error('Error adding job:', error);
          });
      }
    }
  });
  </script>
  
  <style scoped>
 
  

  .container-fluid{
    margin-top: 45px;
    margin-left: 70px;
    width: 1100px;
    align-items: center;
   
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



  </style>
   <style src="vue-multiselect/dist/vue-multiselect.css"></style>