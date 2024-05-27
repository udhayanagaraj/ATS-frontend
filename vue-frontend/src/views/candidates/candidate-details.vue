<template>
  <div class="container-fluid ">
    <div class="card p-4 shadow">
      <div class="card-header ">
        <span>Add to &emsp;</span>
        <span>Send email &emsp;</span>
        <span>Set remainder &emsp;</span>
        <span>Forward &emsp;</span>
        <span>Schedule video call &emsp;</span>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-4">
          <div class="container-1">
            <br>
            <br>
            <img src="./Logo.jpeg" alt="Profile Photo" class="logo mb-3">
            <button class="btn btn-secondary btn-sm" style="margin-left: 550px; margin-top: -120px;" @click="editButton">Edit</button>
            <h3 class="mb-2" style="margin-left:100px; margin-top: -120px;">{{candidate.name}} {{ candidate.last_name }}</h3>
            
            <div class="first-row">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase"
                viewBox="0 0 16 16">
                <path
                  d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
              </svg> 1 yr

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2"
                viewBox="0 0 16 16">
                <path
                  d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
              </svg> ₹ 2.15 Lacks
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt"
                viewBox="0 0 16 16">
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>{{ candidate.address }}
            </div>

            <div class="first-row" style="margin-top:6px">
              <strong>Education: </strong>{{candidate.education}}
            </div>

            <div class="first-row" style="margin-top:6px">
              <strong>Preferred locations:</strong> {{candidate.preferred_locations}}
            </div>
            <div class="first-row" style="margin-top:8px">
              <strong>mobile: </strong><span>{{candidate.mobile}}</span>
              <button class="btn btn-outline-secondary btn-sm" style="margin-left:20px">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
                Call candidate</button>
            </div>

            <div class="first-row" style="margin-top:8px">
              <strong>Email: </strong> {{ candidate.email }}
            </div>

            <br>
            <h5>Profile detail</h5>

            <h6>Summary</h6>
            <div class="mb-3" >
              <p>
                {{candidate.summary}}
              </p>
            </div>
            


            <h6>Skills</h6>
            <div class="mb-3" v-for="skill in getSkill(candidate.skills)" style="display:inline; margin-left: 4px;">
              <span class="badge bg-primary">{{ skill }}</span>
            </div>

            <h6>Language Known</h6>
            <div class="mb-3" v-for="lang in splitLanguages(candidate.languages)"
              style="display:inline; margin-left: 4px;">
              <span class="badge bg-secondary">{{ lang }}</span>
            </div>

            <h6>Personal details</h6>

            <div class="mb-3">
              <div class="row">
                <div class="col-sm-3">
                  <strong>Date of Birth:</strong>
                  <br>
                  <span>{{ candidate.dob }}</span>
                </div>
                <div class="col-sm-3">
                  <strong>Gender:</strong>
                  <br>
                  <span>{{candidate.gender}}</span>
                </div>
                <div class="col-sm-3">
                  <strong>Marital Status:</strong>
                  <br>
                  <span>{{ candidate.martialstatus }}</span>
                </div>
                <div class="col-sm-3" style=" white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  <strong>Physically Challenged:</strong>
                  <br>
                  <span >{{candidate.physically_challenged}}</span>
                  
                </div>
              </div>
            </div>

            <h6>Desired job detail</h6>
            <div class="mb-3">
              <div class="row">
                <div class="col-sm-6">
                  <strong>Job title:</strong>
                  <br>
                  <span>{{ candidate.job_title }}</span>
                </div>
                <div class="col-sm-6">
                  <strong>Employment status:</strong>
                  <br>
                  <span>fulltime</span>
                </div>
              </div>
            </div>

            <h6>Attached cv</h6>
            <iframe :src="'http://127.0.0.1:8000/view-resume/'+candidate.id" width="100%" height="600"
              style="border: none;">
            </iframe>

          </div>
        </div>

        <!-- second half -->
        <div class="col-md-4 shadow p-4">
          <div class="container-2">
            <br>
            <h3 class="text-center">Similar profiles</h3>
          </div>
          <div class="profile-container">

            <div v-for="candidate in dummy_candidates" :key="candidate.id" class="row mb-4">
              <div class="col-sm-3 ">
                <div class="img-container">
                    <img src="./4.jpg" alt="" class="rounded-circle img-similar">
                </div>
              </div>
              <div class="col-sm-9">
                <h5>{{ candidate.name }}</h5>
                <h6>{{candidate.title}}</h6>
                <p>{{ candidate.email }}</p>
                <div class="d-flex justify-content-between">
                  <button @click="viewMobileNumber(candidate)" class="btn btn-sm btn-outline-secondary">
                    <i class="fas fa-phone"></i> View Mobile
                  </button>
                  <button @click="mailCandidate(candidate)" class="btn btn-sm btn-outline-secondary">
                    <i class="fas fa-envelope"></i>
                  </button>
                  <button @click="forwardCandidate(candidate)" class="btn btn-sm btn-outline-secondary">
                    <i class="fas fa-share"></i>
                  </button>
                  <button @click="saveToFavorites(candidate)" class="btn btn-sm btn-outline-secondary">
                    <i class="fas fa-star"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
  
  
  <script>
  import axios from 'axios';

  export default {
    name:'candidate-detail',
    data() {
      return {
        candidate:{},
        skills:{},
        resumeUrl : 'udhayaResume.pdf',
        dummy_candidates: [
        {
          id: 1,
          name: 'John Doe',
          title:'Developer',
          email: 'john.doe@example.com',
          photo: './1.jpg'
        },
        {
          id: 2,
          name: 'Jane Smith',
          title:'Developer',
          email: 'jane.smith@example.com',
          photo: './1.jpg'
        },
        {
          id: 3,
          name: 'Kaviya Nagaraj',
          title:'Developer',
          email: 'kavi@example.com',
          photo: './1.jpg'
        },
        {
          id: 4,
          name: 'Arun Kumar',
          title:'Developer',
          email: 'arun@example.com',
          photo: './1.jpg'
        },
        {
          id: 5,
          name: 'Asha',
          title:'Developer',
          email: 'asha@example.com',
          photo: './1.jpg'
        },
        {
          id: 6,
          name: 'Subha',
          title:'Developer',
          email: 'subha@example.com',
          photo: './1.jpg'
        },
        {
          id: 7,
          name: 'Herish',
          title:'Developer',
          email: 'herish@example.com',
          photo: './1.jpg'
        },
      ],

      };
    },
    mounted() {
      const candidateId = this.$route.params.id;
      this.fetchCandidateDetails(candidateId);
    },

    methods: {
      splitLanguages(lang){
        if(lang){
          const l = lang.split(',');
          return l;
        }else{
          return [];
        }
        
      },
      fetchCandidateDetails(candidateId){
        axios.get(`http://127.0.0.1:8000/candidateById/${candidateId}`)
          .then(response => {
            this.candidate = response.data.candidates;
            console.log(this.candidate);
          })
          .catch(error => {
            console.error('Error fetching candidate details:', error);
        });
      },

      getSkill(skill){
        if (skill) {
            const s = skill.split(",");
            return s;
        } else {
            return [];
        }
      },

      editButton(){
        console.log(this.candidate.id);
        this.$router.push({ name: 'updateCandidate', params: { id: this.candidate.id } })
      
      },

      viewMobileNumber(candidate) {
        alert(`Mobile number of ${candidate.name}`);
      },
      mailCandidate(candidate) {
        window.location.href = `mailto:${candidate.email}`;
      },
      forwardCandidate(candidate) {
        // Implement forwarding logic
        alert(`Forwarding ${candidate.name}'s profile`);
      },
      saveToFavorites(candidate) {
        // Implement saving to favorites logic
        alert(`Saving ${candidate.name} to favorites`);
      }


    }
  };
  </script>
  
  <style scoped>
  .img-container {
    width: 60px; /* Adjust width and height as needed */
    height: 60px; /* Adjust width and height as needed */
    border-radius: 50%; /* Make it a circle */
  }
  .img-similar {
      width: 100%; /* Ensure the image fills the container */
      height: 100%; /* Ensure the image fills the container */
  }


    .second-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .row-item {
        margin-right: 20px;
        margin-bottom: 10px;
    }
    .card-header{
      border:none;
    }
  .container-fluid{
    width:1250px;
    margin-top: 50px;
    border: none;
  }

  

  .profile-container {
    max-height: 400px;
    width: 350px;
  }

 

 
  
  .container-1{
    margin-top: 10px;
    margin-left: -370px;

  }
  .card {
    margin-top: 20px;
  }
  

  .wrap-content{
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
  }

  
  .btn-group {
    display: inline-block; /* Ensure the container only takes up as much space as needed */
    max-width: 100px; /* Adjust the maximum width as needed */
    align-items: flex-end;
  }
  
  .row {
    display: flex;
    justify-content: flex-end;
  }
  
  .full-width {
    width: 100%;
  }

  .first-row{
    margin-left: 100px;
  }
  .resume-container {
        height: 600px; /* Set height according to your preference */
        overflow: auto;
    }
    .resume-iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    .logo {
    width: 65px; /* Adjust the width as needed */
    height: auto; /* Maintain aspect ratio */ 
   
    cursor: pointer;
}
  </style>
  