<template>
  <template v-if="loading">
    <div class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  </template>

  <template v-else>

    <div v-if="job" class="container-fluid">

      <div class="card p-4 shadow">
        <!-- Job details table -->
        <div>
          <div class="row">
            <div class="col-md-9">

              <router-link :to="'/pages/jobs/'">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
              </router-link>
              <button class="btn btn-sm btn-success status-button">{{ job[10] }}</button>
              <div class="align-margin">
                <p><strong>Job ID:</strong> {{ job[0] }} &emsp;&emsp; <strong>Title: </strong>{{ job[1] }}</p>
                <span><strong>Company:</strong>{{ job[4] }} &emsp;&emsp; <strong>Location:</strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path
                      d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>{{ job[3] }}
                </span>
              </div>

            </div>
          </div>
          <br>
          <router-link :to="'/pages/jobs/update/' + job[0]" class="btn btn-secondary btn-sm align-margin"
            style="margin-top: -20px;">Edit Job</router-link>
          <hr>
          <br>
          <br>
          <div class="align-margin">
            <div class="row"> 
              <div class="col-md-3">
                <strong>Posted By</strong>   
                <div> {{job[14]}} </div>
              
              </div>
              <div class="col-md-3">
                <strong>Created At</strong>
                <div>
                  {{ job[12].slice(0,10) }}
                </div>
              </div>
              <div class="col-md-3">
                <strong>Job Type</strong>
                <div>
                  {{ job[21] }}
                </div>
              </div>
              <div class="col-md-3">
                <strong>Total Submissions</strong>
                <div style="text-align: center">
                  {{ 2 }}
                </div>
              </div>
            </div>
           
          
            
          </div>
          <br>
          <br>
          <div class="align-margin">
            <br>
            <h5>Job Description</h5>
            <div v-html="job[2]" :class="{ 'collapsed': !showAllDescription }"></div>
            <button v-if="!showAllDescription" @click="toggleDescription" class="btn btn-link">More</button>
            <button v-if="showAllDescription" @click="toggleDescriptionLess" class="btn btn-link">Less</button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="container-fluid2">
      <div class="card p-4 shadow">
        <!-- Job details table -->
        <div>
          <div class="row">
            <p><strong>Submissions</strong></p>
            <div class="right-section">
              <div class="form-group search-group">

                <input type="text" class="form-control search-input" placeholder="Search..." v-model="searchQuery">
              </div>
            </div>



            <div class="row">
              <div v-if="candidates.length >= 1" class="col">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Submitted on</th>
                      <th>Mobile / Location</th>
                      <th>Email</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="candidate in candidates" :key="candidate.id">
                      <td @click="viewCandidateDetail(candidate.id)" style="cursor: pointer;">
                        {{ candidate.name }}
                        <a :href="'http://localhost:8000/view-resume/' + candidate.id" target="_blank">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-file-earmark-pdf" viewBox="0 0 16 16">
                            <path
                              d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                            <path
                              d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z" />
                          </svg>
                        </a>
                      </td>

                      <td v-if="candidate.created_at && typeof candidate.created_at === 'string'">
                          {{ candidate.created_at.slice(0,10) }}
                      </td>
                      <td>{{ candidate.mobile }} / {{ candidate.address }}</td>
                      <td>{{ candidate.email }}</td>
                      <td>{{ candidate.status }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-else>
                <span style="text-align: center">No submissions yet</span>
              </div>
              <div>

              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  </template>

</template>

<script>
import axios from 'axios';

export default {
  name: 'job-details',
  data() {
    return {
      loading: true,
      job: {},
      searchQuery: '',
      candidates: {},
      isSidebarOpen: true,
      resume: null,
      showAllDescription: false,
      descriptionToShow: '',

    };
  },
  mounted() {

    const jobId = this.$route.params.id;
    this.fetchJobDetails(jobId);
    this.fetchCandidateDetails(jobId);
    if (this.job[2]) {
      this.descriptionToShow = this.job[2].split('\n').slice(0, 2).join('\n');
    } else {
      this.descriptionToShow = '';
    }
  },
  methods: {

    toggleDescription() {
      // Toggle between showing only two lines and showing full description
      this.showAllDescription = !this.showAllDescription;
      if (this.showAllDescription) {
        this.descriptionToShow = this.job[2];
      } else {
        this.descriptionToShow = this.job[2].split('\n').slice(0, 2).join('\n');
      }
    },
    toggleDescriptionLess() {
      // Toggle between showing only two lines and showing full description
      this.showAllDescription = !this.showAllDescription;
      if (this.showAllDescription) {
        this.descriptionToShow = this.job[2];
      } else {
        this.descriptionToShow = this.job[2].split('\n').slice(0, 2).join('\n');
      }
    },
    fetchJobDetails(jobId) {
      axios.get(`http://localhost:8000/jobs/${jobId}`)
        .then(response => {
          this.loading  = false;
          this.job = response.data.data;
          console.log(this.job);
        })
        .catch(error => {
          console.error('Error fetching job details:', error);
        });
    },
    fetchCandidateDetails(jobId) {
      axios.get(`http://localhost:8000/candidatesByJobId/${jobId}`)
        .then(response => {
          this.candidates = response.data.candidates;
          console.log(this.candidates);
        })
        .catch(error => {
          console.error('Error fetching candidate details:', error);
        });
    },

    filterCandidates() {
      let filtered = this.candidates;
      if (this.searchQuery) {
        filtered = filtered.filter(candidate => {
          return candidate.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        });
      }

      const startIndex = (1 - 1) * 1;
      const endIndex = startIndex + 1;
      return filtered.slice(startIndex, endIndex);
    },
    viewCandidateDetail(canId) {
      this.$router.push({ name: 'candidate-detail', params: { id: canId } });
    },
  },

};
</script>

<style scoped>
.container-fluid {
  width: 800px;
  height: 440px;
  margin-top: 50px;
  margin-left: -10px;
  overflow: auto;
}

.container-fluid2 {
  width: 780px;
  margin-top: -10px;

}



.card {
  margin-top: 20px;
}

.align-margin {
  margin-left: 28px;
  margin-top: -45px;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;
}

.status-button {
  margin-left: 600px;
  margin-top: -40px;
}

.collapsed {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* Number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
