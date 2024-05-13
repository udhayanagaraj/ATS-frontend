<template>
  <div v-if="job" class="container" :class="{ 'container': !isSidebarOpen, 'full-width': isSidebarOpen }">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-0 text-center mx-auto " >Job Detail</h5>
      </div>
    
      <div class="row justify-content-end">
        <div class="btn-group">
          <router-link :to="'/pages/jobs/update/' + job[0]" class="btn btn-primary btn-sm">Edit</router-link>
        </div>
      </div>

        <!-- Job details table -->
      <div class="table-responsive">
        <table class="table table-striped" >
          <thead>
            <tr>
              <th class="table-content" >Job ID</th>
              <th class="table-content" >Company</th>
              <th class="table-content"  >Title</th>
              <th class="table-content" >Experience</th>
              <th class="table-content" >Job Type</th>
              <th class="table-content">Primary skills</th>
              <th class="table-content">Location</th>
              <th class="table-content">Created At</th>
              <th class="table-content">Refreshed At</th>
              <th class="table-content">Job Owner</th>
              <th class="table-content">Primary Recruiter</th>
              <th class="table-content">Status</th>
              <th class="table-content">Profiles Submitted</th>
              <th class="table-content">Interviews</th>
              <th class="table-content">Selected</th>
              <th class="table-content">Joined</th>
              <th class="table-content">Backouts</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td class="wrap-content">{{ job[0] }}</td>
              <td class="wrap-content">{{ job[4] }}</td>
              <td class="wrap-content">{{ job[1] }}</td>
              <td class="wrap-content">{{ job[6] }}</td>
              <td class="wrap-content">{{ job[21] }}</td>
              <td class="wrap-content">{{ job[11] }}</td>
              <td class="wrap-content">{{ job[3] }}</td>
              <td class="wrap-content">{{ calculateDateTime(job[12]) }}</td>
              <td class="wrap-content">{{ calculateRefreshedAt(job[13]) }}</td>
              <td class="wrap-content">{{ job[14] }}</td>
              <td class="wrap-content">{{ job[15] }}</td>
              <td class="wrap-content">{{ job[10] }}</td>
              <td class="wrap-content">{{ job[16] }}</td>
              <td class="wrap-content">{{ job[17] }}</td>
              <td class="wrap-content">{{ job[18] }}</td>
              <td class="wrap-content">{{ job[19] }}</td>
              <td class="wrap-content">{{ job[20] }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      
    
      <div class="container-candidate">
        <br>
        <br>
        <h3 class="text-center">Candidate Information</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="table-content">Candidate ID</th>
              <th class="table-content">Candidate Name</th>
              <th class="table-content">Mobile No</th>
              <th class="table-content">Address</th>
              <th class="table-content">Education</th>
              <th class="table-content">Status</th>
              <th class="table-content">Resume</th>

             
            </tr>
          </thead>
          <tbody>
           
            <tr v-for="candidate in candidates" :key="candidate.id">
              <td>{{ candidate.id }}</td>
              <td>{{ candidate.name }}</td>
              <td>{{ candidate.mobile }}</td>
              <td>{{ candidate.address }}</td>
              <td>{{ candidate.education }}</td>
              <td>{{ candidate.status }}</td>
              <td>
               <a :href="'http://localhost:8000/view-resume/' + candidate.id">
                  <i class="bi bi-file-earmark-pdf" style="width: 60px ;margin-left:20px"></i>
                </a>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div v-else class="alert alert-danger text-center" role="alert" style="width: 50%; margin: 0 auto;">Job not found</div>
  <router-link to="/pages/jobs" class="btn btn-secondary mt-3" style="margin-left: 45px;">Back to Job List</router-link>
</template>


<script>
import axios from 'axios';

export default {
  name:'job-details',
  data() {
    return {
      job: {},
      candidates:{},
      isSidebarOpen: true,
    };
  },
  mounted() {
    const jobId = this.$route.params.id;
   
    this.fetchJobDetails(jobId);
    this.fetchCandidateDetails(jobId);

    const asideToggle = document.getElementById("kt_aside_toggle");
    if (asideToggle) {
      asideToggle.addEventListener("click", this.toggleSidebar);
    } 
  },

  beforeUnmount() {
    // Remove event listener to avoid memory leaks
    const asideToggle = document.getElementById("kt_aside_toggle");
    if (asideToggle) {
      asideToggle.removeEventListener("click", this.toggleSidebar);
    }
  },
  
  methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
      calculateRefreshedAt(timeStamp){
        const currentTime = Date.now();
        const responseTimeStamp = new Date(timeStamp).getTime(); 
        const differenceTimeStamp = currentTime - responseTimeStamp;
        const days = Math.floor(differenceTimeStamp / (1000 * 60 * 60 * 24));
        if (days == 0){
          return 'Now';
        }
        const RefreshedAt = days + ' days ago';
        console.log("refreshed at",RefreshedAt);
        return RefreshedAt;
      },

      calculateDateTime(timeStamp){
        const currentTime = Date.now();
        const responseTimeStamp = new Date(timeStamp).getTime(); 
        const differenceTimeStamp = currentTime - responseTimeStamp;
        const days = Math.floor(differenceTimeStamp / (1000 * 60 * 60 * 24));
        if (days == 0){
          return 'Today';
        }
        const createdAt = days + ' days ago';
        return createdAt;
      },

    fetchJobDetails(jobId) {
      axios.get(`http://localhost:8000/jobs/${jobId}`)
        .then(response => {
          this.job = response.data.data;
        })
        .catch(error => {
          console.error('Error fetching job details:', error);
        });
    },

    fetchCandidateDetails(jobId){
      axios.get(`http://localhost:8000/candidatesByJobId/${jobId}`)
        .then(response => {
          this.candidates = response.data.candidates;
          console.log(this.candidates);
        })
        .catch(error => {
          console.error('Error fetching candidate details:', error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: -50px;
}
.card {
  margin-top: 20px;
}

.margin-align{
  margin-right: 40px;
}

.wrap-content{
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
}

.table-content{
  font-size: 15px; 
  font-weight: 800;
  padding: 0px; 
  padding-right: 1px;
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
</style>
