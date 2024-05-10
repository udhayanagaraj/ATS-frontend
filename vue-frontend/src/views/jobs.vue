<template>
    <div class="container-fluid job-c">
      <router-link to="/add" class="btn btn-primary mb-3 add-button">Add Job</router-link>
      
      <div class="right-section">
        <div class="form-group search-group">
          
          <input type="text" class="form-control search-input" placeholder="Search..." v-model="searchQuery">
        </div>
      </div>

      <div class="table-responsive" >
        
        <table class="table table-striped"  style="border-collapse: separate; border-spacing: 0 10px;">
          <thead>
            <tr>
              <th style=" font-size: 15px; font-weight: 800;padding: 10px; padding-right: 40px; position:relative;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                Company
                <div class="filter-icon" @click="toggleCompanyFilter">
                  <i class="bi bi-funnel"></i>
                </div>
                <div class="search-box-wrapper" style="position: relative;">
                  <div class="search-box show-search-box" v-show="show_company_filter " style="width:300px">
                    <label for="searchInput" class="form-label">Enter Company</label>
                    <i class="bi bi-x" 
                      style="width: 40px; margin-left: 170px; cursor: pointer; transition: transform 0.3s;"
                      @click="show_company_filter = false"
                      @mouseenter="$event.target.style.transform = 'scale(1.2)'"
                      @mouseleave="$event.target.style.transform = 'scale(1)'">
                    </i>
                    <div class="input-group">
                        <input type="text" class="form-control" id="searchInput" placeholder="Search..." v-model="searchQuery" @click.stop>
                        <button class="btn btn-outline-secondary" type="button" >Search</button>
                    </div>
                  </div>
                </div>
              </th>
              
              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px; position: relative;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                Title
                <div class="filter-icon" @click="toggletitleFilter">
                  <i class="bi bi-funnel"></i>
                </div>
                <div class="search-box-wrapper" style="position: relative;">
                  <div class="search-box show-search-box" v-show="show_title_filter " style="width:300px">
                    <label for="searchInput" class="form-label">Enter Title</label>
                    <i class="bi bi-x" 
                      style="width: 40px; margin-left: 170px; cursor: pointer; transition: transform 0.3s;"
                      @click="show_title_filter = false"
                      @mouseenter="$event.target.style.transform = 'scale(1.2)'"
                      @mouseleave="$event.target.style.transform = 'scale(1)'">
                    </i>
                    <div class="input-group">
                        <input type="text" class="form-control" id="searchInput" placeholder="Search..." v-model="searchQuery" @click.stop>
                        <button class="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                  </div>
                </div>
              </th>

              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                Experience
                <div class="filter-icon" @click="toggleExperienceFilter">
                  <i class="bi bi-funnel"></i>
                </div>
                <div class="search-box-wrapper" >
                  <div class="search-box show-search-box" v-show="show_experience_filter" style="width:300px">
                    <label for="searchInput" class="form-label">Enter Experience</label>
                    <i class="bi bi-x" 
                      style="width: 40px; margin-left: 170px; cursor: pointer; transition: transform 0.3s;"
                      @click="show_experience_filter = false"
                      @mouseenter="$event.target.style.transform = 'scale(1.2)'"
                      @mouseleave="$event.target.style.transform = 'scale(1)'">
                    </i>
                    <div class="input-group">
                        <input type="text" class="form-control" id="searchInput" placeholder="Search..." v-model="searchQuery" @click.stop>
                        <button class="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                  </div>
                </div>               
              </th>

              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                Job Type
                <div class="filter-icon" @click="toggleJobTypeFilter">
                  <i class="bi bi-funnel"></i>
                </div>
                <div class="search-box-wrapper" >
                  <div class="search-box show-search-box" v-show="show_job_filter " style="width:300px">
                    <label for="searchInput" class="form-label">Enter Job Type</label>
                    <i class="bi bi-x" 
                      style="width: 40px; margin-left: 170px; cursor: pointer; transition: transform 0.3s;"
                      @click="show_job_filter = false"
                      @mouseenter="$event.target.style.transform = 'scale(1.2)'"
                      @mouseleave="$event.target.style.transform = 'scale(1)'">
                    </i>
                    <div class="input-group">
                        <input type="text" class="form-control" id="searchInput" placeholder="Search..." v-model="searchQuery" @click.stop>
                        <button class="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                  </div>
                </div>              
              </th>

              <th style="font-size: 15px; font-weight: 800; padding: 10px; padding-right: 40px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  Primary skills
                  <div class="filter-icon" @click="toggleSkillsFilter">
                      <i class="bi bi-funnel"></i>
                  </div>
                  <div class="search-box-wrapper">
                      <div class="search-box show-search-box" v-show="show_skills_filter" style="width:300px">
                          <label for="searchInput" class="form-label">Enter Primary Skills</label>
                          <i class="bi bi-x" 
                              style="width: 40px; margin-left: 170px; cursor: pointer; transition: transform 0.3s;"
                              @click="show_skills_filter = false"
                              @mouseenter="$event.target.style.transform = 'scale(1.2)'"
                              @mouseleave="$event.target.style.transform = 'scale(1)'">
                          </i>
                          <div class="input-group">
                              <input type="text" class="form-control" id="searchInput" placeholder="Search..." v-model="searchQuery" @click.stop>
                              <button class="btn btn-outline-secondary" type="button">Search</button>
                          </div>
                      </div>
                  </div>
              </th>

              <th style="font-size: 15px; font-weight: 800; padding: 10px; padding-right: 40px; position: relative;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  Location
                  <div class="filter-icon" @click="toggleLocationFilter">
                      <i class="bi bi-funnel"></i>
                  </div>
                  <div class="search-box-wrapper" style="position: relative;">
                      <div class="search-box show-search-box" v-show="show_location_filter" style="width:300px">
                          <label for="searchInput" class="form-label">Enter Location</label>
                          <i class="bi bi-x" 
                              style="width: 40px; cursor: pointer;margin-left:170px; transition: transform 0.3s;"
                              @click="show_location_filter = false"
                              @mouseenter="$event.target.style.transform = 'scale(1.2)'"
                              @mouseleave="$event.target.style.transform = 'scale(1)'">
                          </i>
                          <div class="input-group">
                              <input type="text" class="form-control" id="searchInput" placeholder="Search..." v-model="searchQuery" @click.stop>
                              <button class="btn btn-outline-secondary" type="button">Search</button>
                          </div>
                      </div>
                  </div>
              </th>

              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                Created At
                <div class="filter-icon" @click="toggleSearchBox">
                  <i class="bi bi-funnel"></i>
                </div>
              </th>

              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                Refreshed At
                <div class="filter-icon" @click="toggleSearchBox">
                  <i class="bi bi-funnel"></i>
                </div>
              </th>

              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                Job Owner
                <div class="filter-icon" @click="toggleJobOwnerFilter">
                  <i class="bi bi-funnel"></i>
                </div>
                <div class="search-box-wrapper">
                  <div class="search-box show-search-box" v-show="show_job_owner_filter"  style="width:300px">
                    <label for="searchInput" class="form-label">Enter Location</label>
                    <i class="bi bi-x" 
                      style="width: 40px; margin-left: 170px; cursor: pointer; transition: transform 0.3s;"
                      @click="show_job_owner_filter = false"
                      @mouseenter="$event.target.style.transform = 'scale(1.2)'"
                      @mouseleave="$event.target.style.transform = 'scale(1)'">
                    </i>
                    <div class="input-group">
                        <input type="text" class="form-control" id="searchInput" placeholder="Search..." v-model="searchQuery" @click.stop>
                        <button class="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                  </div>
                </div>
              </th>

              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                Primary Recruiter
                <div class="filter-icon" @click="toggleSearchBox">
                  <i class="bi bi-funnel"></i>
                </div>
              </th>

              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Profiles Submitted</th>
              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ">Interviews</th>
              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Selected</th>
              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Joined</th>
              <th style="font-size: 15px;font-weight: 800;padding: 10px;padding-right: 40px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Backouts</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="searchQuery">
              <tr v-for="job in filteredJobs" :key="job[0]"  @click="viewJobDetails(job[0])">
                
                <td class="wrap-content" style="cursor: pointer;padding: 10px; padding-right: 40px;  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ job[4] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ job[1] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ">{{ job[6] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[21] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[11] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ job[3] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ createdAt }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[13] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[14] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[15] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[16] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[17] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[18] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[19] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[20] }}</td>
              </tr>
            </template>
            <template v-else>
              <tr v-for="job in jobs" :key="job[0]"  @click="viewJobDetails(job[0])">
                
                <td class="wrap-content" style="cursor: pointer; padding: 10px; padding-right: 40px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" >{{ job[4] }}</td>
                <td style="cursor: pointer; padding: 10px; padding-right: 40px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ job[1] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ">{{ job[6] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[21] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[11] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ job[3] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ calculateDateTime(job[12]) }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ calculateRefreshedAt(job[13]) }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[14] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[15] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[16] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[17] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[18] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[19] }}</td>
                <td style="cursor: pointer;padding: 10px; padding-right: 40px;">{{ job[20] }}</td>
              </tr>
            </template>
          </tbody>
        </table>

      
      </div>

     

      <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="prevPage">Previous</button>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <button class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="nextPage">Next</button>
        </li>
      </ul>
    </nav>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  
  
  export default {
    name : 'Jobs',
    data() {
      return {
        jobs: [],
        searchQuery: '',
        filterQuery:'',
        showRowCount: false,
        currentPage: 1,
        pageSize: 10,
        showSearchBox : false,
        show_company_filter : false,
        show_title_filter:false,
        show_experience_filter:false,
        show_job_filter:false,
        show_location_filter:false,
        show_skills_filter:false,
        show_job_owner_filter:false,
      };
    },
    computed: {
      // filterCompany(){
      //   let filtered = this.jobs;
      //   if(this.company_filter){
      //     filtered = filtered.filter(job => {
      //       return job[4].toLowerCase().includes(this.company_filter.toLowerCase());
      //     });
      //   }
      //   const startIndex = (this.currentPage - 1) * this.pageSize;
      //   const endIndex = startIndex + this.pageSize;
      //   return filtered.slice(startIndex, endIndex);
      // },

      // filterTitle(){
      //   let filtered = this.jobs;
      //   if(this.title_filter){
      //     filtered = filtered.filter(job => {
      //       return job[1].toLowerCase().includes(this.title_filter.toLowerCase());
      //     });
      //   }
      //   const startIndex = (this.currentPage - 1) * this.pageSize;
      //   const endIndex = startIndex + this.pageSize;
      //   return filtered.slice(startIndex, endIndex);
      // },

      // filterExperience(){
      //   let filtered = this.jobs;
      //   if(this.experience_filter){
      //     filtered = filtered.filter(job => {
      //       return job[6].toLowerCase().includes(this.experience_filter.toLowerCase());
      //     });
      //   }
      //   const startIndex = (this.currentPage - 1) * this.pageSize;
      //   const endIndex = startIndex + this.pageSize;
      //   return filtered.slice(startIndex, endIndex);
      // },

      // filterJobType(){
      //   let filtered = this.jobs;
      //   if(this.job_filter){
      //     filtered = filtered.filter(job => {
      //       return job[21].toLowerCase().includes(this.job_filter.toLowerCase());
      //     });
      //   }
      //   const startIndex = (this.currentPage - 1) * this.pageSize;
      //   const endIndex = startIndex + this.pageSize;
      //   return filtered.slice(startIndex, endIndex);
      // },



      filteredJobs() {
        let filtered = this.jobs;
        if (this.searchQuery ) {
          filtered = filtered.filter(job => {
            return job[4].toLowerCase().includes(this.searchQuery.toLowerCase() ) ||
                  job[1].toLowerCase().includes(this.searchQuery.toLowerCase() ) ||
                  job[6].toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                  job[10].toLowerCase().includes(this.searchQuery.toLowerCase());
          });
        }
        
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return filtered.slice(startIndex, endIndex);
      },

      totalPages() {
        return Math.ceil(this.filteredJobs.length / this.pageSize);
      }
    },
    mounted() {
      this.fetchJobs();
      
    },


    methods: {

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
      toggleCompanyFilter() {
        this.show_company_filter = !this.show_company_filter;
      },
      toggletitleFilter() {
        this.show_title_filter = !this.show_title_filter;
      },
      toggleExperienceFilter() {
        this.show_experience_filter = !this.show_experience_filter;
      },
      toggleLocationFilter() {
        this.show_location_filter = !this.show_location_filter;
      },
      toggleSkillsFilter() {
        this.show_skills_filter = !this.show_skills_filter;
      },
      toggleJobTypeFilter() {
        this.show_job_filter = !this.show_job_filter;
      },
      toggleJobOwnerFilter() {
        this.show_job_owner_filter = !this.show_job_owner_filter;
      },


      fetchJobs() {
        axios.get('http://192.168.1.3:8000/jobs')
          .then(response => {
            console.log('Response:', response.data);
            this.jobs = response.data.data;
          })
          .catch(error => {
            console.error('Error fetching jobs:', error);
          });
      },
      
      viewJobDetails(jobId) {
        this.$router.push({ name: 'job-details', params: { id: jobId } });
      },
      toggleRowCount() {
        this.showRowCount = !this.showRowCount;
      },
      changePage(page) {
        this.currentPage = page;
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      }
    }

  };
  </script>
  
  <style >
  .job-c{
    position: fixed;
    left: 0;
    width: 100%; 
    margin: 0; 
    padding: 0;
    margin-top: -263px;
  }

  .add-button{
    margin-left: 5px;
  }
  .search-group {
    display: flex;
    justify-content: flex-end; 
    margin-top: -55px;
    margin-right: 7px;
  }

  .search-input {
    width: 180px; 
    
  }

  .column-header {
    font-size: 15px;
    font-weight: 800;
    padding: 10px;
    padding-right: 40px;
}

.wrap-content {
    white-space: normal;
    word-wrap: break-word;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0,0,0,.05);
}

.table-striped tbody tr:hover {
    background-color: rgba(0,0,0,.075);
}


.filter-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

.search-box {
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.show-search-box {
    display: block; /* Show the search box */
}



  </style>
  




