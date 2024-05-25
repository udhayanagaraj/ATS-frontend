<template>
    <div class="container-fluid">
        <h4 class="search-heading">Candidate Search</h4>
        <div class="search-container">
            <div class="custom-container">
                <label for="custom-input" >Keywords</label>
                <input type="text" id="custom-input" placeholder="Python" v-model="keywords">
            </div>

            <div class="custom-container">
                <label for="custom-input" >Title</label>
                <input type="text" id="custom-input" placeholder="Software Developer" v-model="title">
            </div>

            
        </div>
        <div style="margin-top: 10px;">
            <span class="string-builder">+ string builder</span>
        </div>
     
        <div class="search-container">
            <div class="custom-container2">
                <label for="custom-input" >State</label>
                <select v-model="state" id="stateSelect" @change="updateCity">
                    <option value="" disabled selected>Select State</option>
                </select>
            </div>

            <div class="custom-container2">
                <label for="custom-input" >City</label>
                <select  v-model="city" id="citySelect" >
                    <option value="" disabled selected>Select city</option>
                </select>
            </div>

            <button class="btn btn-primary" @click="fetchCandidatesBySearch">Search</button>
        </div>

        <div v-if="notFound" class="not-found">
            <h5 style="text-align: center;">Candidate not found</h5>
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
                            <td @click="routeToCandidateDetails(candidate.id)" style="cursor: pointer;">
                                {{ candidate.name }}
                            </td>
                            <td>{{ candidate.email }}</td>
                            <td>{{ candidate.mobile }}</td>
                            <td>{{ candidate.job_title }}</td>

                            <td >
                                {{ calculateYears(JSON.parse(candidate.experience)) }} years
                            </td>
                            <td>{{ candidate.city }}</td>
                            <td>{{ candidate.state }}</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>



        <div class="recent-search" v-if="recentSearches.length > 0"
            :style="{ bottom: `${candidates.length > 0 ? '100px' : '20px'}` }">
            <h5 style="text-decoration: underline; text-align: center; margin-left: -25px;">Recent Searches</h5>

            <ul>
                <li @click="handleRecent(search.query)" v-for="search in recentSearches" :key="search.id"
                    style="cursor: pointer; list-style: none; color: blue;">{{ search.query }}
                    <br>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-calendar2-date" viewBox="0 0 16 16">
                        <path
                            d="M6.445 12.688V7.354h-.633A13 13 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23" />
                        <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    {{ search.id }}
                </li>
            </ul>
        </div>


    </div>
</template>


<script>
import VueMultiselect from 'vue-multiselect';
import axios from 'axios';
import { print_state,print_city,state_arr } from '../manual-parsing/cities';

export default {
    name: 'search-applicant',
    components: {
        VueMultiselect
    },
    mounted(){
        print_state('stateSelect');
    },
    data() {
        return {
            searchCategory: "",
            state:'',
            city:'',
            keywords:'',
            title:'',
            candidates: [],
            recentSearches: JSON.parse(localStorage.getItem('recentSearches')) || [],
            selected: [],
            notFound: false
        }
    },

    watch: {
        searchCategory() {
            this.selected = null;
        }
    },
    
    methods: {
        updateCity(event){
            const stateIndex = state_arr.indexOf(event.target.value) + 1;
            print_city('citySelect',stateIndex)
        },
        calculateYears(years){
            let dummy = 0;
            for (let i=0;i<years.length;i++){
                dummy += years[i].years;
            }
            return dummy; 
        },

        fetchCandidatesBySearch() {
            const query = {
                keywords: this.keywords,
                title: this.title,
                state: this.state,
                city: this.city
            };

            axios.post('http://localhost:8000/candidate/search', query)
                .then(response => {
                    this.notFound = false;
                    this.candidates = [];
                    this.candidates = response.data.candidates;

                    let d = Date(Date.now());

                    const newSearch = {
                        id: d.slice(4, 25),
                        query: JSON.stringify(query),
                        data: response.data.candidates
                    };
                    this.recentSearches.unshift(newSearch);

                    if (this.recentSearches.length > 5) {
                        this.recentSearches.pop();
                    }
                    localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches));
                })
                .catch(error => {
                    if (error.response.status === 404) {
                        this.candidates = [];
                        this.notFound = true;
                    } else {
                        console.error("Error fetching the candidates:", error);
                    }
                });
          
        },
        routeToCandidateDetails(canId) {
            this.$router.push({ name: 'candidate-detail', params: { id: canId } });
        },
       

        handleRecent(q) {
            const recent_search = this.recentSearches.find(search => search.query === q);
            if (recent_search){
                this.notFound = false;
                this.candidates = recent_search.data;
            }
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
    overflow-y: auto;
}

.search-heading {
    margin-top: 80px;
    margin-left: 170px;
    text-decoration: underline;

}

.string-builder{
    margin-top: 10px;
    margin-left: 120px;
    cursor: pointer;
    color: #0934f3;
}

.input-label{
    color: #0934f3;
}

.search-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 5px;
    
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



.results-container {
    margin-top: 20px;
    text-align: center;
    max-height: 500px; /* Adjust the max height as needed */
    overflow-y: auto;
}

.results-container ul {
    list-style-type: none;
    padding: 0;
}

.results-container li {
    background-color: #f9f9f9;
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #ddd;
}

.recent-search {
    width: 250px;
    margin-top: 30px;
    margin-left: 80px;
}


.custom-container {
    width: 550px; /* Adjust as needed for larger width */
    height: 60px; /* Adjust as needed for smaller height */
    padding: 6px;
    background-color: #fff; /* Optional: background color for the container */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: adding some shadow */
    border-radius: 8px; /* Optional: rounded corners */
}

.custom-container label {
    font-size: 14px;
    color: #333; /* Adjust label color */
}

.custom-container input {
    width: 100%;
    margin-top: 2px; /* Space between label and input */
    padding: 1px;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: transparent;
}

.custom-container input::placeholder {
    color: #aaa; /* Placeholder color */
    opacity: 1; /* Ensure placeholder is fully opaque */
}



.custom-container2 {
    width: 513px; /* Adjust as needed for larger width */
    height: 60px; /* Adjust as needed for smaller height */
    padding: 6px;
    background-color: #fff; /* Optional: background color for the container */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: adding some shadow */
    border-radius: 8px; /* Optional: rounded corners */
}

.custom-container2 label {
    font-size: 14px;
    color: #333; /* Adjust label color */
}

.custom-container2 input {
    width: 100%;
    margin-top: 2px; /* Space between label and input */
    padding: 1px;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: transparent;
}


.custom-container2 select {
    width: 500px; 
    padding: 4px;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: transparent;
}

.custom-container2 input::placeholder {
    color: #aaa; /* Placeholder color */
    opacity: 1; /* Ensure placeholder is fully opaque */
}


</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
