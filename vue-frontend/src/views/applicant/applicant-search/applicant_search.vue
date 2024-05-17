<template>
    <div class="container-fluid" >
        <h4 class="search-heading">Search Candidates</h4>
        <div class="search-container">
            
            <div class="form-group">

                <select class="form-control select-style" v-model="searchCategory"
                    style="width:130px; height:41px ; cursor: pointer;">
                    <option value="" disabled selected>Search By
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    </option>

                    <option value="skills">Skills</option>
                    <option value="title">Title</option>
                    <option value="city">City</option>
                    <option value="state">State</option>

                </select>
            </div>

            <div class="form-group vue-select" >
                <VueMultiselect
                    v-model="selected"
                    :options="displayOptions"
                    :multiple="false"
                    :close-on-select="true"
                    :clear-on-select="false"
                    placeholder="Search"
                    label="name"
                    track-by="name"
                    style="width: 350px;">
                </VueMultiselect>
            </div>

            <button class="btn btn-primary" @click="fetchCandidatesBySearch">Search</button>
        </div>
        <div class="results-container" v-if="candidates.length > 0">
            <h3>Search Results</h3>
            <div v-if="candidates">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Job Title</th>
                            <th>Experience</th>
                            <th>Location</th>
                            <th>State</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="candidate in candidates" :key="candidate.id">
                            <td>{{ candidate.id }}</td>
                            <td style="cursor: pointer;">
                                {{ candidate.name }}
                            </td>
                            <td>{{ candidate.email }}</td>
                            <td>{{ candidate.mobile }}</td>
                            <td>{{ candidate.job_title }}</td>
                            <td>{{ candidate.experience }}</td>
                            <td>{{ candidate.address }}</td>
                            <td>{{ candidate.address }}</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>

        <div class="recent-search" v-if="recentSearches.length > 0" :style="{bottom:`${candidates.length > 0 ? '100px' : '20px'}`}">
            <h5 style="text-decoration: underline; text-align: center">Recent Searches</h5>

            <ul>
                <li @click="handleRecent(search.query, search.category)" v-for="search in recentSearches"
                    :key="search.id" style="cursor: pointer; list-style: none; color: blue;">{{ search.query }}
                    <br>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-date" viewBox="0 0 16 16">
                    <path d="M6.445 12.688V7.354h-.633A13 13 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    {{ search.id }}</li>
            </ul>
        </div>


    </div>
</template>


<script>
import VueMultiselect from 'vue-multiselect';
import axios from 'axios';


export default {
    name: 'search-applicant',
    components:{
        VueMultiselect
    },
    // mounted(){
    //     this.fetchCandidates();
    // },
    
    data() {
        return {
            searchCategory: "",
            candidates: [],
            recentSearches: JSON.parse(localStorage.getItem('recentSearches')) || [],
            selected : [],
            skillOption:[
                { name: "JavaScript" },
                { name: "Python" },
                { name: "Java" },
                { name: "C++" },
                { name: "Ruby" },
                { name: "PHP" },
                { name: "Swift" },
                { name: "Kotlin" }
            ],
            titleOption: [
                { name: "Software Developer" },
                { name: "Software Engineer" },
                { name: "Technical Writer" },
                { name: "Business Associate" },
                { name: "Lawyer" },
                { name: "Customer Support" },
                { name: "UI/UX" },
                { name: "Designer" },
                { name: "Data Scientist" }
            ],
        }
    },

    watch: {
        searchCategory() {
            this.selected = null;
        }
    },
    computed:{
        displayOptions() {
            if (this.searchCategory === 'skills') {
                return this.skillOption;
            } else if (this.searchCategory === 'title') {
                return this.titleOption;
            } else {
                return [{ name: 'Please select a category' }];
            }
        }
    },

    methods: {
        fetchCandidates(){
            axios.get("http://localhost:8000/candidates")
            .then(response => {
                this.candidates = response.data.candidates;
            })
            .catch(error => {
                console.error("Error fethcing the candidates");
            })
        },
        fetchCandidatesBySearch(){
            if (this.searchCategory ==='skills'){
                // axios.post("http://localhost:8000/candidate/searchBySkill",this.selected)
                // .then(response => {
                //     console.log(response);
                // })

                // .catch(error => {
                //     console.error("Error fethcing the candidates");
                // });
                console.log(this.selected.name);
                let d = Date(Date.now())
                // Add to recent searches
                const newSearch = {
                    id: d.slice(4,25),
                    query: this.selected.name,
                    category: this.searchCategory
                };
                this.recentSearches.unshift(newSearch);

                // Limit recent searches to the last 5 entries
                if (this.recentSearches.length > 5) {
                    this.recentSearches.pop();
                }

                // Save recent searches to local storage
                localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches));
            }
            else if(this.searchCategory === 'title'){
                // axios.post("http://localhost:8000/candidate/searchByTitle",this.selected)
                // .then(response => {
                //     console.log(response);
                // })

                // .catch(error => {
                //     console.error("Error fethcing the candidates");
                // });

                console.log(this.selected.name);
                let d = Date(Date.now())
                // Add to recent searches
                const newSearch = {
                    id: d.slice(4,25),
                    query: this.selected.name,
                    category: this.searchCategory
                };
                this.recentSearches.unshift(newSearch);

                // Limit recent searches to the last 5 entries
                if (this.recentSearches.length > 5) {
                    this.recentSearches.pop();
                }

                // Save recent searches to local storage
                localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches));
            }
        },
        searchCandidates() {
            // Simulate an API call to fetch candidates based on searchQuery and searchCategory
            const apiResults = [
                { id: 1, name: 'John Doe', title: 'Software Engineer', created_at: '2024-05-16', mobile: '123-456-7890', address: '123 Main St', email: 'john@example.com', status: 'Active' },
                { id: 2, name: 'Jane Smith', title: 'Data Scientist', created_at: '2024-05-15', mobile: '987-654-3210', address: '456 Elm St', email: 'jane@example.com', status: 'Inactive' }
            ];

            const selected = this.selected.name;
            console.log("selected",selected)

            this.candidates = apiResults.filter(candidate => {
                if (this.searchCategory && selected) {
                    return candidate[this.searchCategory.toLowerCase()].toLowerCase().includes(selected.toLowerCase());
                }
                return false;
            });
            let d = Date(Date.now())
            // Add to recent searches
            const newSearch = {
                id: d.slice(4,25),
                query: selected,
                category: this.searchCategory
            };
            this.recentSearches.unshift(newSearch);

            // Limit recent searches to the last 5 entries
            if (this.recentSearches.length > 5) {
                this.recentSearches.pop();
            }

            // Save recent searches to local storage
            localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches));
        },


        viewCandidateDetail(candidateId) {
            // Implement the logic to view candidate details
            console.log('view candidate id', candidateId)
        },


        handleRecent(q, c) {
            // Simulate an API call to fetch candidates based on searchQuery and searchCategory
            const apiResults = [
                { id: 1, name: 'John Doe', title: 'Software Engineer', created_at: '2024-05-16', mobile: '123-456-7890', address: '123 Main St', email: 'john@example.com', status: 'Active' },
                { id: 2, name: 'Jane Smith', title: 'Data Scientist', created_at: '2024-05-15', mobile: '987-654-3210', address: '456 Elm St', email: 'jane@example.com', status: 'Inactive' }
            ];

            this.candidates = apiResults.filter(candidate => {
                if (c && q) {
                    return candidate[c.toLowerCase()].toLowerCase().includes(q.toLowerCase());
                }
                return false;
            });
        },
    }
}

</script>


<style scoped>
.container-fluid {
    position: fixed;
    overflow: auto;
    top: 0;
    left: 0;
    overflow-y: hidden;
    height: 100vh;
}

.search-heading{
    margin-top: 80px;
    margin-left: 40px;
    text-decoration: underline;

}

.search-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    gap: 1px;
}

.select-style {
    appearance: none;
    /* Remove default select styling */
    background: white url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-arrow-down' viewBox='0 0 16 16'> <path fill-rule='evenodd' d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1'/> </svg>") no-repeat right 10px center;
    padding-right: 30px;
    /* Add space for arrow */
    border-radius: 4px;
    border: 1px solid #ccc;

}



.results-container{
    margin-top: 20px;
    text-align: center;
}

.results-container ul{
    list-style-type: none;
    padding: 0;
}

.results-container li {
    background-color: #f9f9f9;
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #ddd;
}

.recent-search{
    width:250px;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
