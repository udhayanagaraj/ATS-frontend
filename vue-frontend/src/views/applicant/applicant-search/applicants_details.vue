<template>
  <div class="container">
    <div class="row  filter-col">
      <div class="col-md-3 filter-col2">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter"
            viewBox="0 0 16 16">
            <path
              d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg> Filters
        </span>

        <div class="keyword">
          <div class="d-flex justify-content-between align-items-center pb-3 pt-3" @click="toggleKeywordInput">
            <span>Keywords</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <div class="keyword-dropdown" v-show="showKeywordInput">
            <input type="text" class="form-control" placeholder="Java" style="margin-bottom:8px;" v-model = "filter.keywords">
          </div>
        </div>

        <div class="locations">
          <div class="d-flex justify-content-between align-items-center pb-3 pt-3" @click="toggleLocationInput">
            <span>Locations</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <div class="keyword-dropdown" v-show="showLocationsInput">
            <input type="text" class="form-control" placeholder="Chennai" style="margin-bottom:8px;"  v-model = "filter.location">
          </div>
        </div>

        <div class="experience">
          <div class="d-flex justify-content-between align-items-center pb-3 pt-3" @click="toggleExperienceInput">
            <span>Experience</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <div class="keyword-dropdown" v-show="showExperienceInput">
            <div class="form-group">
              <div class="row" style="margin-bottom: 8px;">
                <div class="col">
                  <div class="form-group">
                    <h5>Min</h5>
                    <input type="text" class="form-control" v-model="filter.minExperience" placeholder="1">
                  </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <h5>Max</h5>
                    <input type="text" class="form-control" v-model="filter.maxExperience"  placeholder="5">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="salary">
          <div class="d-flex justify-content-between align-items-center pb-3 pt-3" @click="toggleSalaryInput">
            <span>Salary (INR-Lacs)</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <div class="keyword-dropdown" v-show="showSalaryInput">
            <input type="text" class="form-control" placeholder="₹350000" style="margin-bottom:8px;"  v-model = "filter.salary">
          </div>
         
        </div>

        <div class="current_company">
          <div class="d-flex justify-content-between align-items-center pb-3 pt-3" @click="toggleCurrentCompany">
            <span>Company</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <div class="keyword-dropdown" v-show="showCurrentCompany">
            <input type="text" class="form-control" placeholder="Filter by current company" style="margin-bottom:8px;"  v-model = "filter.current_company">
          </div>
        </div>

        <div class="current_designation">
          <div class="d-flex justify-content-between align-items-center pb-3 pt-3" @click="toggleCurrentDesignation">
            <span>Designation</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <div class="keyword-dropdown" v-show="showCurrentDesignation">
            <input type="text" class="form-control" placeholder="Filter by designation" style="margin-bottom:8px;"  v-model = "filter.current_designation">
          </div>
        </div>

        <div class="department_and_role">
          <div class="d-flex justify-content-between align-items-center pb-3 pt-3" @click="toggleDepartmentAndRole">
            <span>Department And Role</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <div class="keyword-dropdown" v-show="showDepartmentAndRole">
            <input type="text" class="form-control" placeholder="Filter by designation" style="margin-bottom:8px;"  v-model = "filter.department_and_role">
          </div>
        </div>

        <div class="industry">
          <div class="d-flex justify-content-between align-items-center pb-3 pt-3" @click="toggleIndustry">
            <span>Industry</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <div class="keyword-dropdown" v-show="showIndustry">
            <input type="text" class="form-control" placeholder="Filter by industry" style="margin-bottom:8px;"  v-model = "filter.industry">
          </div>
        </div>
      </div>

      

      <div class="col-md-9 ">
        <div class="row mb-3">
          <div class="d-flex align-items-center gap-2">
            <span>Active</span>
            <select class="form-select" aria-label="Default select example" style="width:110px;">
              <option selected>15 Days</option>
              <option value="15">15 Days</option>
              <option value="30">30 Days</option>
              <option value="60">60 Days</option>
              <option value="90">90 Days</option>
            </select>

            <div class="d-flex align-items-center ml-auto gap-2"> <!-- ml-auto for margin-left auto -->
              <span>Show</span>
              <select class="form-select" aria-label="Default select example" style="width:80px;">
                <option value="5">40</option>
                <option value="10">80</option>
                <option value="15">120</option>
                <option value="25">150 </option>
              </select>

              <span>&emsp;Page</span>
            </div>
          </div>
        </div>

        <div class="row mb-4 ">
          <div class="card-header  pb-2 pt-2">
            <span>Add to &emsp;</span>
            <span>Send email &emsp;</span>
            <span>Set remainder &emsp;</span>
            <span>Forward &emsp;</span>
            <span>Schedule video call &emsp;</span>
          </div>
        </div>


        <div class="row candidates-container" v-if="filteredCandidates" v-for="candidate in filteredCandidates">
          <div class="row" >
            <div class="col-md-7 column-1" >
              <div class="cd  d-flex align-items-center">
                <input type="checkbox" name="" id="" style="margin-left: -30px;">
                <h6 class="mb-0 ms-2">{{candidate.name}}</h6>
              </div>
              <div class="first-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
                </svg> {{ candidate.experience.years }} yr

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"/>
                  <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"/>
                </svg> {{ candidate.expected_salary }}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg> {{candidate.city}}
              </div>

              <div class="row mb-2">
                <div class="col-md-4 ">
                  <span>Current</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">Apple Technologies and private limited</span>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-4">
                  <span>Previous</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">Previous company</span>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-4">
                  <span>Education</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">{{candidate.education}}</span>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-4">
                  <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Pref Locations</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">{{candidate.preferred_locations}}</span>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-4">
                  <span>Key skills</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">{{candidate.skills}}</span>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-4">
                  <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Job type</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">Full time</span>
                </div>
            </div>
  
            </div>

            <!-- second column -->
            <div class="col-md-4 ml-auto text-center "  >
              <div class="row">
                <div class="col-md-10">
                <div class="img-container mb-3">
                  <img src="./bc.jpg" alt="profile" class="rounded-circle img-similar">
                </div>
                <div>
                  <p>{{candidate.summary}}</p>
                  <span>+91 {{candidate.mobile}}</span>
                  <!-- <button class="btn btn-sm btn-outline-primary mb-2">
                     View Mobile
                  </button> -->

                  <button class="btn btn-sm btn-outline-secondary mb-2">
                    <i class="fas fa-phone"></i> Call candidate
                  </button>
                  <br>
                  <div class="d-flex align-items-center gap-4 " style="margin-left: 45px">
                    <span style="cursor: pointer; color: blue; ">Comment</span> 
                    <div>
                      <svg
                        @click="toggleSave"
                        style="cursor: pointer;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-bookmark"
                        viewBox="0 0 16 16"
                        :class="{ 'saved': isSaved, 'clicked': isClicked }"
                      >
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                      </svg>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="col-md-1">
                <div class="d-flex flex-column align-items-center">
                  <button class="btn btn-sm btn-outline-secondary mb-2"  @click="showEmailModal = true" style="border: none;">
                    <i class="fas fa-envelope"></i>
                  </button>
                  <Email v-if="showEmailModal" :show="showEmailModal" @close="showEmailModal = false" :data="candidate"/>

                  <button class="btn btn-sm btn-outline-secondary mb-2" style="border: none;">
                    <i class="fas fa-share"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-secondary" :class="{ 'favorite': isFavorite }" style="border: none;" @click="toggleFavorite">
                    <i class="fas fa-star"></i>
                  </button>
                </div>
              </div>
              </div>
            </div>        
        </div>
        </div>

        <div class="row candidates-container" v-else  v-for="candidate in candidates">
          <div class="row" >
            <div class="col-md-7 column-1" >
              <div class="cd  d-flex align-items-center">
                <input type="checkbox" name="" id="" style="margin-left: -30px;">
                <h6 class="mb-0 ms-2">{{candidate.name}}</h6>
              </div>
              <div class="first-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
                  <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
                </svg> 1 yr

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
                  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"/>
                  <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"/>
                </svg> {{ candidate.expected_salary }}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg> {{candidate.city}}
              </div>

              <div class="row mb-2">
                <div class="col-md-4 ">
                  <span>Current</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">Apple Technologies and private limited</span>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-4">
                  <span>Previous</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">Previous company</span>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-4">
                  <span>Education</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">{{candidate.education}}</span>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-4">
                  <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Pref Locations</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">{{candidate.preferred_locations}}</span>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-4">
                  <span>Key skills</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">{{candidate.skills}}</span>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-4">
                  <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Job type</span>
                </div>
                <div class="col-md-8 custom_spacing">
                  <span class="candidate-text-color">Full time</span>
                </div>
            </div>
  
            </div>

            <!-- second column -->
            <div class="col-md-4 ml-auto text-center "  >
              <div class="row">
                <div class="col-md-10">
                <div class="img-container mb-3">
                  <img src="./bc.jpg" alt="profile" class="rounded-circle img-similar">
                </div>
                <div>
                  <p>{{candidate.summary}}</p>
                  <span>+91 {{candidate.mobile}}</span>
                  <!-- <button class="btn btn-sm btn-outline-primary mb-2">
                     View Mobile
                  </button> -->

                  <button class="btn btn-sm btn-outline-secondary mb-2">
                    <i class="fas fa-phone"></i> Call candidate
                  </button>
                  <br>
                  <div class="d-flex align-items-center gap-4 " style="margin-left: 45px">
                    <span style="cursor: pointer; color: blue; ">Comment</span> 
                    <div>
                      <svg
                        @click="toggleSave"
                        style="cursor: pointer;"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-bookmark"
                        viewBox="0 0 16 16"
                        :class="{ 'saved': isSaved, 'clicked': isClicked }"
                      >
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                      </svg>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="col-md-1">
                <div class="d-flex flex-column align-items-center">
                  <button class="btn btn-sm btn-outline-secondary mb-2"  @click="showEmailModal = true" style="border: none;">
                    <i class="fas fa-envelope"></i>
                  </button>
                  <Email v-if="showEmailModal" :show="showEmailModal" @close="showEmailModal = false" :data="candidate"/>

                  <button class="btn btn-sm btn-outline-secondary mb-2" style="border: none;">
                    <i class="fas fa-share"></i>
                  </button>
                  <button class="btn btn-sm btn-outline-secondary" :class="{ 'favorite': isFavorite }" style="border: none;" @click="toggleFavorite">
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
  </div>
</template>

<script>
import { Range, initMDB } from "mdb-ui-kit";
import { mapGetters } from "vuex";
import Email from "./Email.vue";

export default {
  name: 'applicants_details',
  computed:{
    ...mapGetters(['getCandidates']),
    filteredCandidates() {
      return this.getCandidates.filter(candidate => {
        return (
          (!this.filter.keywords || candidate.skills.includes(this.filter.keywords)) &&
          (!this.filter.location || candidate.city.toLowerCase() === this.filter.location.toLowerCase()) &&
          (!this.filter.minExperience || candidate.experience >= this.filter.minExperience) &&
          (!this.filter.maxExperience || candidate.experience <= this.filter.maxExperience) &&
          (!this.filter.salary || parseFloat(candidate.expected_salary) >=parseFloat( this.filter.salary)) &&
          (!this.filter.current_company || candidate.currentCompany.includes(this.filter.current_company)) &&
          (!this.filter.previousCompany || candidate.previousCompany.includes(this.filter.previousCompany)) &&
          (!this.filter.current_designation || candidate.currentDesignation.includes(this.filter.current_designation)) &&
          (!this.filter.department || candidate.department.includes(this.filter.department)) &&
          (!this.filter.industry || candidate.industry.includes(this.filter.industry))
        );
      });
    }
  },
  data() {
    return {
      candidates : [],
      showKeywordInput: false,
      showLocationsInput:false,
      showExperienceInput:false,
      showSalaryInput:false,
      showCurrentCompany:false,
      showCurrentDesignation:false,
      showDepartmentAndRole:false,
      showIndustry:false,
      items: [ 
        { id: 1, name: 'Item 1', description: 'Description 1' },
        { id: 2, name: 'Item 2', description: 'Description 2' },
        { id: 3, name: 'Item 3', description: 'Description 3' }
      ],
      showEmailModal : false,
      isFavorite: false, 
      isSaved: false,
      isClicked: false,
      filter:{
        keywords:'',
        location:'',
        minExperience: '',
        maxExperience: '',
        salary:null,
        current_company:'',
        current_designation:'',
        department_and_role:'',
        industry:''
      }
    };
  },
  components:{
    Email
    
  },
  mounted(){
    initMDB({ Range });
    this.candidates =  this.getCandidates;
    console.log(this.getCandidates);
   },
  methods: {
    toggleKeywordInput() {
      this.showKeywordInput = !this.showKeywordInput;
    },
    toggleLocationInput() {
      this.showLocationsInput = !this.showLocationsInput;
    },
    toggleExperienceInput() {
      this.showExperienceInput = !this.showExperienceInput;
    },
    toggleSalaryInput(){
      this.showSalaryInput = !this.showSalaryInput; 
    },
    toggleCurrentCompany(){
      this.showCurrentCompany = !this.showCurrentCompany;
    },
    toggleCurrentDesignation(){
      this.showCurrentDesignation = !this.showCurrentDesignation;
    },
    toggleDepartmentAndRole(){
      this.showDepartmentAndRole = !this.showDepartmentAndRole;
    },
    toggleIndustry(){
      this.showIndustry = !this.showIndustry;
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      this.saveToFavorites(this.isFavorite);
    },
    saveToFavorites(isFavorite) {
      console.log(isFavorite ? 'Added to favorites' : 'Removed from favorites');
    },
    toggleSave() {
      this.isSaved = !this.isSaved;
      this.isClicked = true;
      this.saveOrRemoveFromBookmarks(this.isSaved);
    },
    saveOrRemoveFromBookmarks(isSaved) {
      console.log(isSaved ? 'Saved' : 'Removed from bookmarks');
    }
  }
};
</script>

<style>
.container{
  width: 1200px;
  height: auto;
  
}

.filter-col {
  position: relative;
  margin-top: 30px;
  background-color: #fff;
}


.favorite .fa-star {
  color: #0275d8;
}

.saved {
  color: #0275d8;
}

.clicked {
  color: #0275d8; 
}

.keyword {
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  cursor: pointer
}

.keyword-dropdown {
  position: inherit;
  width: 260px;
  background-color: #fff;
  padding: 2px; 
}

.locations{
  border-bottom: 1px solid #ced4da;
  cursor: pointer
}

.experience{
  border-bottom: 1px solid #ced4da;
  cursor: pointer
}

.salary{
  border-bottom: 1px solid #ced4da;
  cursor: pointer
}
.current_company{
  border-bottom: 1px solid #ced4da;
  cursor: pointer
}
.current_designation{
  border-bottom: 1px solid #ced4da;
  cursor: pointer
}

.department_and_role{
  border-bottom: 1px solid #ced4da;
  cursor: pointer
}

.industry{
  border-bottom: 1px solid #ced4da;
  cursor: pointer
}

.card-header{
  border:none;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;

}

.candidates-container{
  border: 1px solid #e7e4e4; /* Border color */
  border-radius: 5px; /* Rounded corners */
  padding: 10px; /* Add padding inside the container */
  margin-bottom: 20px; /* Add some space at the bottom */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #646363;
}



.column-1{
  padding: 2px;
  margin-left: 35px;
}

.img-container {
  width: 60px; /* Adjust width and height as needed */
  height: 60px; /* Adjust width and height as needed */
  border-radius: 50%; /* Make it a circle */
  align-items: center;
  margin-left: 70px;
}

.img-similar {
      width: 100%; /* Ensure the image fills the container */
      height: 100%; /* Ensure the image fills the container */
  }

.candidate-text-color{
  color: rgb(48, 46, 46);
}

.custom_spacing{
  margin-left: -40px;
}
</style>