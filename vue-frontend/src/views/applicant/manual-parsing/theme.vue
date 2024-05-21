<template>
    <div class="demo-page">
        <div class="demo-page-navigation">
            <nav>
                <ul>
                    <li>
                        <a href="#installation" @click.prevent="scrollToPersonal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-align-justify">
                                <line x1="21" y1="10" x2="3" y2="10" />
                                <line x1="21" y1="6" x2="3" y2="6" />
                                <line x1="21" y1="14" x2="3" y2="14" />
                                <line x1="21" y1="18" x2="3" y2="18" />
                            </svg>
                            Personal Details</a>
                    </li>

                    <li>
                        <a href="#icons" @click.prevent="scrollToAdditional">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather">
                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                        <line x1="16" y1="8" x2="2" y2="22" />
                        <line x1="17.5" y1="15" x2="9" y2="15" />
                        </svg>
                        Additional</a>
                    </li>

                    <li>
                        <a href="#input-types" @click.prevent="scrollToDocuments">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-tool">
                                <path
                                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                            Documents</a>
                    </li>
                    <li>
                        <a href="#fieldset" @click.prevent="scrollToCertifications">
                            <svg xmlns="http://www.w3.org/2000/svg" style="transform: rotate(90deg)" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-columns">
                                <path
                                    d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
                            </svg>
                            Certifications</a>
                    </li>

                    <li>
                        <a href="#icons" @click.prevent="scrollToLanguages">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-check-square">
                                <polyline points="9 11 12 14 22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            Languages</a>
                    </li>

                    <li>
                        <a href="#other" @click.prevent="scrollToExperience">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-server">
                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                                <line x1="6" y1="6" x2="6.01" y2="6" />
                                <line x1="6" y1="18" x2="6.01" y2="18" />
                            </svg>
                            Experience</a>
                    </li>


                </ul>
            </nav>
        </div>
        <main class="demo-page-content">
            <div v-if="updateSuccess" class="alert alert-success" role="alert">
                Added successfully!
            </div>

            <section>
                <div class="href-target" id="personal-details"></div>
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-align-justify">
                        <line x1="21" y1="10" x2="3" y2="10" />
                        <line x1="21" y1="6" x2="3" y2="6" />
                        <line x1="21" y1="14" x2="3" y2="14" />
                        <line x1="21" y1="18" x2="3" y2="18" />
                    </svg>
                    Personal Details
                </h1>

                <div style="display:flex; gap:4px">
                    <div class="nice-form-group">
                        <label>First Name</label>
                        <input style="width:248px;" type="text" placeholder="First Name" value="" required
                            v-model="firstname" />
                    </div>
                    <div class="nice-form-group">
                        <label>Last Name</label>
                        <input style="width:248px;" type="text" placeholder="Last Name" value="" required
                            v-model="lastname" />
                    </div>
                </div>

                <div style="display:flex; gap:4px">
                    <div class="nice-form-group">
                        <label>Gender</label>
                        <select style="width:248px;height:45px;" v-model="gender">
                            <option value="" disabled selected>Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not say">Prefer not say</option>
                        </select>
                    </div>
                    <div class="nice-form-group">
                        <label>Martial Status</label>
                        <select style="width:248px; height:45px;" v-model="martialStatus">
                            <option value="" disabled selected>Select status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                        </select>
                    </div>
                </div>

                <div class="nice-form-group">
                    <label>Jot Title</label>
                    <input type="text" placeholder="Job Title" value="" required v-model=" job_title" />
                </div>

                <div class="nice-form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Your email" value="" required v-model="email" />
                </div>

                <div class="nice-form-group">
                    <label>Phonenumber</label>
                    <input type="tel" placeholder="Your alternate phonenumber" value="" required v-model=" mobile" />
                </div>

                <div class="nice-form-group">
                    <label>Alternate Phonenumber</label>
                    <input type="tel" placeholder="Your phonenumber" value="" v-model="alternate_mobile" />
                </div>

                <div class="nice-form-group">
                    <label>Education Qualification</label>
                    <select v-model="selectedField" id="educationField" >
                        <option value="" disabled selected>Select field of study</option>
                        <option v-for="degree in degrees" :key="degree" :value="degree">{{ degree }}</option>
                    </select>
                </div>

                <div style="display :flex; gap:4px">
                    <div class="nice-form-group">
                        <label>DOB</label>
                        <input type="date" style="width:248px" v-model="dob" />
                    </div>
                    <div class="nice-form-group">
                        <label>Linkedin Url</label>
                        <input type="url" placeholder="www.google.com" value="" style="width:248px"
                            v-model="linkedin" />
                    </div>
                </div>

                <div class="nice-form-group">
                    <label>Address</label>
                    <input type="text" placeholder="Your address" value="" required v-model="address" />
                </div>

                <div style="display :flex; gap:4px">
                    <div class="nice-form-group">
                        <label>State</label>
                        <select style="width:248px;" v-model="state" id="stateSelect" @change="updateCity">
                            <option value="" disabled selected>Select State</option>
                        </select>
                    </div>
                    <div class="nice-form-group">
                        <label>City</label>
                        <select style="width:248px;" v-model="city" id="citySelect" >
                            <option value="" disabled selected>Select city</option>
                        </select>
                    </div>
                </div>

                <div style="display :flex; gap:4px">
                    <div class="nice-form-group">
                        <label>Pincode</label>
                        <input type="text" placeholder="Enter your area pincode" style="width:248px"
                            v-model="pincode" />
                    </div>
                    <div class="nice-form-group">
                        <label>Skills</label>
                        <VueMultiselect v-model="selectedSkills" :options="options" :multiple="true"
                            :close-on-select="true" placeholder="Pick some" style="width:248px; overflow:visible">
                        </VueMultiselect required>
                    </div>
                </div>

                <div style="display:flex; gap:4px">
                    <div class="nice-form-group">
                        <label>Current Salary</label>
                        <input style="width:248px;" type="text" placeholder="Current Salary" value="" required
                            v-model="current_salary" />
                    </div>
                    <div class="nice-form-group">
                        <label>Expected Salary</label>
                        <input style="width:248px;" type="text" placeholder="Expected Salary" value="" required
                            v-model="expected_salary" />
                    </div>
                </div>
            </section>

            <section>
                <div class="href-target" id="additional"></div>
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather">
                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                        <line x1="16" y1="8" x2="2" y2="22" />
                        <line x1="17.5" y1="15" x2="9" y2="15" />
                    </svg>
                    Additional
                </h1>

                <div class="nice-form-group">
                    <label>Profile Summary</label>
                    <textarea rows="5" placeholder="Summary" v-model="summary"></textarea>
                </div>

                <div style="display :flex; gap:4px">
                    <div class="nice-form-group">
                        <label>Preferred Job</label>
                        <VueMultiselect v-model="preferred_job" :options="roles" :multiple="true"
                            :close-on-select="true" placeholder="Pick some" style="width:248px; overflow:visible">
                        </VueMultiselect required>
                    </div>
                    <div class="nice-form-group">
                        <label>Preferred locations</label>
                        <VueMultiselect v-model="preferred_locations" :options="cities" :multiple="true"
                            :close-on-select="true" placeholder="Pick some" style="width:248px; overflow:visible">
                        </VueMultiselect required>
                    </div>
                </div>

                <div  style="display :flex; gap:4px">
                    <div class="nice-form-group">
                        <label>Relocate</label>
                        <select style="width:248px;" v-model="relocate">
                            <option value="" disabled selected>Select options</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div class="nice-form-group">
                        <label>Physically Challenged</label>
                        <select style="width:248px;" v-model="physically_challenged">
                            <option value="" disabled selected>Select options</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
                
                


                

            </section>

            <section>
                <div class="href-target" id="Documents"></div>
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-tool">
                        <path
                            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                    Document Upload
                </h1>
                <div class="nice-form-group">
                    <label>File upload</label>
                    <input type="file" v-on:change="onFileChange" />
                </div>

            </section>

            <!-- <section>
                <div class="href-target" id="Education"></div>
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-layers">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                    </svg>
                    Education
                </h1>

                <div style="display:flex; gap:4px">
                    <div class="nice-form-group">
                        <label>Secondary School</label>
                        <select style="width:180px;" v-model="education.secondary_school">
                            <option value="" disabled selected>Select Board</option>
                            <option value="State Board">State Board</option>
                            <option value="Central Board">Central Board</option>
                            <option value="International">International</option>
                        </select>
                    </div>
                    <div class="nice-form-group">
                        <label>Percentage</label>
                        <input style="width:180px;" type="text" placeholder="Percentage" value=""
                            v-model="education.secondary_percentage" />
                    </div>
                    <div class="nice-form-group">
                        <label>Passed Out Year</label>
                        <input style="width:140px;" type="text" placeholder="Passed Out Year" value=""
                            v-model="education.secondary_passed" />
                    </div>
                </div>

                <div style="display:flex; gap:4px">
                    <div class="nice-form-group">
                        <label>Higher Secondary</label>
                        <select style="width:180px;" v-model="education.higher_secondary_school">
                            <option value="" disabled selected>Select Board</option>
                            <option value="State Board">State Board</option>
                            <option value="Central Board">Central Board</option>
                            <option value="International">International</option>
                        </select>
                    </div>
                    <div class="nice-form-group">
                        <label>Percentage</label>
                        <input style="width:180px;" type="text" placeholder="Percentage" value=""
                            v-model="education.higher_secondary_percentage" />
                    </div>
                    <div class="nice-form-group">
                        <label>Passed Out Year</label>
                        <input style="width:140px;" type="text" placeholder="Passed Out Year" value=""
                            v-model="education.higher_secondary_passed" />
                    </div>
                </div>

                <div style="display:flex; gap:4px">
                    <div class="nice-form-group">
                        <label>UnderGraduate</label>
                        <select style="width:180px;" v-model="education.undergraduate">
                            <option value="" disabled selected>Select College</option>
                            <option value="Anna University">Anna University</option>
                            <option value="Madras University">Madras University</option>
                            <option value="Vels University">Vels University</option>
                        </select>
                    </div>
                    <div class="nice-form-group">
                        <label>Percentage</label>
                        <input style="width:180px;" type="text" placeholder="Percentage" value=""
                            v-model="education.undergraduate_percentage" />
                    </div>
                    <div class="nice-form-group">
                        <label>Passed Out Year</label>
                        <input style="width:140px;" type="text" placeholder="Passed Out Year" value=""
                            v-model="education.undergraduate_passed" />
                    </div>
                </div>

                <div style="display:flex; gap:4px">
                    <div class="nice-form-group">
                        <label>PostGraduate</label>
                        <select style="width:180px;" v-model="education.postgraduate">
                            <option value="" disabled selected>Select College</option>
                            <option value="Anna University">Anna University</option>
                            <option value="Madras University">Madras University</option>
                            <option value="Vels University">Vels University</option>
                        </select>
                    </div>
                    <div class="nice-form-group">
                        <label>Percentage</label>
                        <input style="width:180px;" type="text" placeholder="Percentage" value=""
                            v-model="education.postgraduate_percentage" />
                    </div>
                    <div class="nice-form-group">
                        <label>Passed Out Year</label>
                        <input style="width:140px;" type="text" placeholder="Passed Out Year" value=""
                            v-model="education.postgraduate_passed" />
                    </div>
                </div>

            </section> -->

            <section>
                <div class="href-target" id="Certificates"></div>
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" style="transform: rotate(90deg)" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="feather feather-columns">
                        <path
                            d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
                    </svg>
                    Certifications
                </h1>
                <div class="nice-form-group">
                    <label>Certificates</label>
                    <VueMultiselect v-model="selectedCertifcates" :options="certicates" :multiple="true"
                        :close-on-select="true" placeholder="Pick some" style="width: 500px;" >
                    </VueMultiselect>
                    <div v-for="(c, index) in selectedCertifcates" :key="index">
                        <p>{{ c }}</p>
                    </div>
                </div>
            </section>


            <section>
                <div class="href-target" id="Languages"></div>
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-check-square">
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    Languages
                </h1>
                <div v-for="(language, index) in languages" :key="index" class="language-container">
                    <button v-if="index >= 1" @click="removeLanguage(index)" class="close-btn">×</button>
                    <div class="nice-form-group">
                        <label>Select a language</label>
                        <select v-model="language.name"
                            style="width:160px; height: 30px; padding: 4px 0; line-height: 20px; padding-left: 2px;">
                            <option value="" disabled selected>Select a language</option>
                            <option value="English">English</option>
                            <option value="Tamil">Tamil</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </div>

                    <fieldset class="nice-form-group">
                        <label for="">Language Proficiency</label>
                        <div class="nice-form-group">
                            <input type="radio" :name="'proficiency-' + index" :id="'beginner-' + index"
                                value="Beginner" v-model="language.proficiency" />
                            <label :for="'beginner-' + index">Beginner</label>
                        </div>
                        <div class="nice-form-group">
                            <input type="radio" :name="'proficiency-' + index" :id="'intermediate-' + index"
                                value="Intermediate" v-model="language.proficiency" />
                            <label :for="'intermediate-' + index">Intermediate</label>
                        </div>
                        <div class="nice-form-group">
                            <input type="radio" :name="'proficiency-' + index" :id="'advanced-' + index"
                                value="Advanced" v-model="language.proficiency" />
                            <label :for="'advanced-' + index">Advanced</label>
                        </div>
                    </fieldset>

                    <fieldset class="nice-form-group">
                        <label for="">Language Fluency</label>
                        <div class="nice-form-group">
                            <input type="checkbox" :id="'speak-' + index" v-model="language.fluency.speak" />
                            <label :for="'speak-' + index">Speak</label>
                        </div>
                        <div class="nice-form-group">
                            <input type="checkbox" :id="'read-' + index" v-model="language.fluency.read" />
                            <label :for="'read-' + index">Read</label>
                        </div>
                        <div class="nice-form-group">
                            <input type="checkbox" :id="'write-' + index" v-model="language.fluency.write" />
                            <label :for="'write-' + index">Write</label>
                        </div>
                    </fieldset>

                    <div v-if="languages.length > 1">
                        <hr>
                    </div>
                </div>

                <button v-if="languages.length < 3" @click="addLanguage" class="btn btn-secondary btn-sm"
                    style="margin-top: 10px;">+ Add Language</button>
            </section>

            <section>
                <div class="href-target" id="Experience"></div>
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-server">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                        <line x1="6" y1="6" x2="6.01" y2="6" />
                        <line x1="6" y1="18" x2="6.01" y2="18" />
                    </svg>
                    Experience
                </h1>
                <div v-for="(company, index) in experiences" :key="index" class="companyContainer">
                    <button v-if="index >= 1" @click="removeExperience(index)" class="close-btn">×</button>
                    <div class="nice-form-group">
                        <label>Job Title</label>
                        <input type="text" placeholder="Job Title" v-model="company.jobTitle" />
                    </div>
                    <div class="nice-form-group">
                        <label>Company Name</label>
                        <input type="text" placeholder="Company name" v-model="company.companyName" />
                    </div>

                    <div class="nice-form-group">
                        <label>Experience (years)</label>
                        <input type="number" placeholder="5" v-model="company.years" />
                    </div>
                    <div v-if="experiences.length > 1">
                        <hr />
                    </div>
                </div>

                <button v-if="experiences.length < 3" @click="addExperience" class="btn btn-secondary btn-sm"
                    style="margin-top: 10px;">+ Add Company</button>
                    <br>
                <button @click="addCandidate" class="btn btn-primary " style="margin-top: 10px;">Submit</button>
            </section>


        </main>
    </div>

</template>


<script>
import axios from 'axios';
import VueMultiselect from 'vue-multiselect';
import { print_state,print_city,state_arr } from './cities';
import { degrees } from './degrees';

export default {
    name: 'theme',
    components: {
        VueMultiselect
    },
    data() {
        return {
            degrees:degrees,
            updateSuccess:false,
            firstname: '',
            lastname: '',
            gender:'',
            martialStatus:'',
            job_title: '',
            email: '',
            mobile: '',
            alternate_mobile: '',
            dob: '',
            linkedin: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            current_salary:'',
            expected_salary:'',
            preferred_job : [],
            preferred_locations : [],
            summary:'',
            physically_challenged:'',
            document: null,
            selectedField : '',
            relocate:'',
            languages: [
                {
                    name: '',
                    proficiency: '',
                    fluency: {
                        speak: false,
                        read: false,
                        write: false,
                    },
                },
            ],
            experiences: [
                {
                    jobTitle: '',
                    companyName: '',
                    years: '',
                },
            ],
            selectedSkills: [],
            options: ['Java', 'Python', 'Machine learning', 'Accounting', 'Tally', 'Executive', 'Excel', 'Computer Networks', 'OpenCV', 'Electronics', 'Communication', 'Arduino'],
            selectedCertifcates: [],
            certicates: ['Associate Java Programming from oracle', 'Machine learning with python', 'Cloud computing with Aws ', 'Tally and advanced excel from microsoft', 'Python Programming', 'Ethical Hacking', 'Computer Networking', 'Automation with Devops', 'Electronics and Communications from iit', 'Embedded system and arduino programming'],
            cities : ['Chennai','Mumbai','Cochi'],
            roles : ['Lawyer','Doctor','Accountant','Mechanical Engineer','Chemical Engineer','Computer Engineer','Software Developer','Software Engineer'],
            
        }
    },
    mounted(){
        print_state('stateSelect');
    },
    methods: {
        updateCity(event){
            const stateIndex = state_arr.indexOf(event.target.value) + 1;
            print_city('citySelect',stateIndex)
        },
        
        addCandidate(){
            const languagesData = this.languages.map(language => {
                return {
                    name: language.name,
                    proficiency: language.proficiency,
                    fluency: {
                        speak: language.fluency.speak,
                        read: language.fluency.read,
                        write: language.fluency.write
                    }
                };
            });

            const experiencesData = this.experiences.map(experience => {
                return {
                    jobTitle: experience.jobTitle,
                    companyName: experience.companyName,
                    years: experience.years
                };
            });
            
            
            
            const datatosend = {
                'name':this.firstname,
                'mobile':this.mobile,
                'address':this.address,
                'status':'Active',
                'resume_file':"resume-sadham.pdf",
                'skills':this.selectedSkills.join(','),

                'job_id':6,
                'last_name' : this.lastname,
                'dob':this.dob,
                'city':this.city,
                'state':this.state,
                'pincode':this.pincode,
                'job_title':this.job_title,
                'alternate_mobile':this.alternate_mobile,
                
                'relocate':this.relocate,
                'image_path':'"C:/Users/dell/Desktop/image1.jpg',
                'gender':this.gender,
                'martialstatus':this.martialStatus,
                'email':this.email,
                'current_salary':this.current_salary,
                'expected_salary':this.expected_salary,

                
                'preferred_job':this.preferred_job,
                'certifications':this.selectedCertifcates.join(','),
                'preferred_locations':this.preferred_locations,
                
                'languages': languagesData,
                'education_details':this.selectedField,
                'experience':experiencesData,
                'summary':this.summary,
                'physically_challenged':this.physically_challenged
            }

            console.log(datatosend);
            
            axios.post('http://127.0.0.1:8000/insertcandidate', datatosend)
                .then(response => {
                    console.log('inserted candidate successfully:');
                    this.updateSuccess = true;
                    window.scrollTo(0, 0);
                })
                .catch(error => {
                    console.error('Error adding job:', error);
                });
        
            
        
           

            // const d = {
            //     'experience':   experiencesData,
            //     'languages': languagesData,
            //     'education_details':educationdata
            // }


            // axios.post('http://127.0.0.1:8000/dummy',d)
            // .then(response => {
            //     console.log('inserted candidate successfully:');
            //     this.updateSuccess = true;
            //     window.scrollTo(0,0);
            // })
            // .catch(error => {
            //     console.error('Error adding job:', error);
            // });

        },

        onFileChange(e){
            this.document = e.target.files[0].name;
            console.log(this.document);
        },
        scrollToPersonal() {
            const installationSection = document.getElementById('personal-details');
            if (installationSection) {
                installationSection.scrollIntoView({ behavior: 'smooth' });
            }
        },
        scrollToDocuments() {
            const inputSection = document.getElementById('Documents');
            if (inputSection) {
                inputSection.scrollIntoView({ behavior: 'smooth' });
            }
        },
        scrollToEducation() {
            const inputSection = document.getElementById('Education');
            if (inputSection) {
                inputSection.scrollIntoView({ behavior: 'smooth' });
            }
        },
        scrollToCertifications() {
            const inputSection = document.getElementById('Certificates');
            if (inputSection) {
                inputSection.scrollIntoView({ behavior: 'smooth' });
            }
        },
        scrollToLanguages() {
            const inputSection = document.getElementById('Languages');
            if (inputSection) {
                inputSection.scrollIntoView({ behavior: 'smooth' });
            }
        },
        scrollToExperience() {
            const inputSection = document.getElementById('Experience');
            if (inputSection) {
                inputSection.scrollIntoView({ behavior: 'smooth' });
            }
        },
        scrollToAdditional() {
            const inputSection = document.getElementById('additional');
            if (inputSection) {
                inputSection.scrollIntoView({ behavior: 'smooth' });
            }
        },

        addLanguage() {
            if (this.languages.length < 3) {
                this.languages.push({
                    name: '',
                    proficiency: '',
                    fluency: {
                        speak: false,
                        read: false,
                        write: false,
                    },
                });
            }
        },
        addExperience() {
            if (this.experiences.length < 3) {
                this.experiences.push({
                jobTitle: '',
                companyName: '',
                years: '',
                });
            }
        },
        getExperienceData() {
            console.log(this.experiences);
            // You can now process the data or send it to a server as needed
        },
        removeExperience(index) {
            this.experiences.splice(index, 1);
        },
        removeLanguage(index) {
            this.languages.splice(index, 1);
        },
    }

}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: initial;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:after,
blockquote:before,
q:after,
q:before {
    content: "";
    content: none;
}
.close-btn {
  position: absolute;
  right:0;
  margin-top: -30px;
  background: transparent;
  border: none;
  font-size: 40px;
  cursor: pointer;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

.nice-form-group {
    --nf-input-size: 1rem;
    --nf-input-font-size: calc(var(--nf-input-size) * 0.875);
    --nf-small-font-size: calc(var(--nf-input-size) * 0.875);
    --nf-input-font-family: inherit;
    --nf-label-font-family: inherit;
    --nf-input-color: #20242f;
    --nf-input-border-radius: 0.25rem;
    --nf-input-placeholder-color: #929292;
    --nf-input-border-color: #c0c4c9;
    --nf-input-border-width: 1px;
    --nf-input-border-style: solid;
    --nf-input-border-bottom-width: 2px;
    --nf-input-focus-border-color: #3b4ce2;
    --nf-input-background-color: #f9fafb;
    --nf-invalid-input-border-color: var(--nf-input-border-color);
    --nf-invalid-input-background-color: var(--nf-input-background-color);
    --nf-invalid-input-color: var(--nf-input-color);
    --nf-valid-input-border-color: var(--nf-input-border-color);
    --nf-valid-input-background-color: var(--nf-input-background-color);
    --nf-valid-input-color: inherit;
    --nf-invalid-input-border-bottom-color: red;
    --nf-valid-input-border-bottom-color: green;
    --nf-label-font-size: var(--nf-small-font-size);
    --nf-label-color: #374151;
    --nf-label-font-weight: 500;
    --nf-slider-track-background: #dfdfdf;
    --nf-slider-track-height: 0.25rem;
    --nf-slider-thumb-size: calc(var(--nf-slider-track-height) * 4);
    --nf-slider-track-border-radius: var(--nf-slider-track-height);
    --nf-slider-thumb-border-width: 2px;
    --nf-slider-thumb-border-focus-width: 1px;
    --nf-slider-thumb-border-color: #fff;
    --nf-slider-thumb-background: var(--nf-input-focus-border-color);
    display: block;
    margin-top: calc(var(--nf-input-size) * 1.5);
    line-height: 1;
    white-space: nowrap;
    --switch-orb-size: var(--nf-input-size);
    --switch-orb-offset: calc(var(--nf-input-border-width) * 2);
    --switch-width: calc(var(--nf-input-size) * 2.5);
    --switch-height: calc(var(--nf-input-size) * 1.25 + var(--switch-orb-offset));
}

.document-upload {
    display: flex;
    align-items: center;
}

.flexed-code {
    --nf-input-size: 1rem;
    --nf-input-font-size: calc(var(--nf-input-size) * 0.875);
    --nf-small-font-size: calc(var(--nf-input-size) * 0.875);
    --nf-input-font-family: inherit;
    --nf-label-font-family: inherit;
    --nf-input-color: #20242f;
    --nf-input-border-radius: 0.25rem;
    --nf-input-placeholder-color: #929292;
    --nf-input-border-color: #c0c4c9;
    --nf-input-border-width: 1px;
    --nf-input-border-style: solid;
    --nf-input-border-bottom-width: 2px;
    --nf-input-focus-border-color: #3b4ce2;
    --nf-input-background-color: #f9fafb;
    --nf-invalid-input-border-color: var(--nf-input-border-color);
    --nf-invalid-input-background-color: var(--nf-input-background-color);
    --nf-invalid-input-color: var(--nf-input-color);
    --nf-valid-input-border-color: var(--nf-input-border-color);
    --nf-valid-input-background-color: var(--nf-input-background-color);
    --nf-valid-input-color: inherit;
    --nf-invalid-input-border-bottom-color: red;
    --nf-valid-input-border-bottom-color: green;
    --nf-label-font-size: var(--nf-small-font-size);
    --nf-label-color: #374151;
    --nf-label-font-weight: 500;
    --nf-slider-track-background: #dfdfdf;
    --nf-slider-track-height: 0.25rem;
    --nf-slider-thumb-size: calc(var(--nf-slider-track-height) * 4);
    --nf-slider-track-border-radius: var(--nf-slider-track-height);
    --nf-slider-thumb-border-width: 2px;
    --nf-slider-thumb-border-focus-width: 1px;
    --nf-slider-thumb-border-color: #fff;
    --nf-slider-thumb-background: var(--nf-input-focus-border-color);
    display: block;
    margin-top: calc(var(--nf-input-size) * 1.5);
    line-height: 1;
    white-space: nowrap;
    --switch-orb-size: var(--nf-input-size);
    --switch-orb-offset: calc(var(--nf-input-border-width) * 2);
    --switch-width: calc(var(--nf-input-size) * 2.5);
    --switch-height: calc(var(--nf-input-size) * 1.25 + var(--switch-orb-offset));
}

.nice-form-group>label {
    font-weight: var(--nf-label-font-weight);
    display: block;
    color: var(--nf-label-color);
    font-size: var(--nf-label-font-size);
    font-family: var(--nf-label-font-family);
    margin-bottom: calc(var(--nf-input-size) / 2);
    white-space: normal;
}

.nice-form-group>label+small {
    font-style: normal;
}

.nice-form-group small {
    font-family: var(--nf-input-font-family);
    display: block;
    font-weight: 400;
    opacity: 0.75;
    font-size: var(--nf-small-font-size);
    margin-bottom: calc(var(--nf-input-size) * 0.75);
}

.nice-form-group small:last-child {
    margin-bottom: 0;
}

.nice-form-group>legend {
    font-weight: var(--nf-label-font-weight);
    display: block;
    color: var(--nf-label-color);
    font-size: var(--nf-label-font-size);
    font-family: var(--nf-label-font-family);
    margin-bottom: calc(var(--nf-input-size) / 5);
}

.nice-form-group>.nice-form-group {
    margin-top: calc(var(--nf-input-size) / 2);
}

.nice-form-group>input[type="checkbox"],
.nice-form-group>input[type="date"],
.nice-form-group>input[type="email"],
.nice-form-group>input[type="month"],
.nice-form-group>input[type="number"],
.nice-form-group>input[type="password"],
.nice-form-group>input[type="radio"],
.nice-form-group>input[type="search"],
.nice-form-group>input[type="tel"],
.nice-form-group>input[type="text"],
.nice-form-group>input[type="time"],
.nice-form-group>input[type="url"],
.nice-form-group>input[type="week"],
.nice-form-group>select,
.nice-form-group>textarea {
    background: var(--nf-input-background-color);
    font-family: inherit;
    font-size: var(--nf-input-font-size);
    border-bottom-width: var(--nf-input-border-width);
    font-family: var(--nf-input-font-family);
    box-shadow: none;
    border-radius: var(--nf-input-border-radius);
    border: var(--nf-input-border-width) var(--nf-input-border-style) var(--nf-input-border-color);
    border-bottom: var(--nf-input-border-bottom-width) var(--nf-input-border-style) var(--nf-input-border-color);
    color: var(--nf-input-color);
    width: 100%;
    padding: calc(var(--nf-input-size) * 0.75);
    height: calc(var(--nf-input-size) * 2.75);
    line-height: normal;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all 0.15s ease-out;
    --icon-padding: calc(var(--nf-input-size) * 2.25);
    --icon-background-offset: calc(var(--nf-input-size) * 0.75);
}

.nice-form-group>input[type="checkbox"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="date"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="email"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="month"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="number"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="password"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="radio"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="search"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="tel"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="text"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="time"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="url"]:required:not(:placeholder-shown):invalid,
.nice-form-group>input[type="week"]:required:not(:placeholder-shown):invalid,
.nice-form-group>select:required:not(:placeholder-shown):invalid,
.nice-form-group>textarea:required:not(:placeholder-shown):invalid {
    background-color: var(--nf-invalid-input-background-color);
    border-bottom-color: var(--nf-valid-input-border-color);
    border-color: var(--nf-valid-input-border-color) var(--nf-valid-input-border-color) var(--nf-invalid-input-border-bottom-color);
    color: var(--nf-invalid-input-color);
}

.nice-form-group>input[type="checkbox"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="date"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="email"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="month"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="number"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="password"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="radio"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="search"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="tel"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="text"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="time"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="url"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>input[type="week"]:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>select:required:not(:placeholder-shown):invalid:focus,
.nice-form-group>textarea:required:not(:placeholder-shown):invalid:focus {
    background-color: var(--nf-input-background-color);
    border-color: var(--nf-input-border-color);
    color: var(--nf-input-color);
}

.nice-form-group>input[type="checkbox"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="date"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="email"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="month"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="number"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="password"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="radio"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="search"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="tel"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="text"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="time"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="url"]:required:not(:placeholder-shown):valid,
.nice-form-group>input[type="week"]:required:not(:placeholder-shown):valid,
.nice-form-group>select:required:not(:placeholder-shown):valid,
.nice-form-group>textarea:required:not(:placeholder-shown):valid {
    background-color: var(--nf-valid-input-background-color);
    border-bottom-color: var(--nf-valid-input-border-color);
    border-color: var(--nf-valid-input-border-color) var(--nf-valid-input-border-color) var(--nf-valid-input-border-bottom-color);
    color: var(--nf-valid-input-color);
}

.nice-form-group>input[type="checkbox"]:disabled,
.nice-form-group>input[type="date"]:disabled,
.nice-form-group>input[type="email"]:disabled,
.nice-form-group>input[type="month"]:disabled,
.nice-form-group>input[type="number"]:disabled,
.nice-form-group>input[type="password"]:disabled,
.nice-form-group>input[type="radio"]:disabled,
.nice-form-group>input[type="search"]:disabled,
.nice-form-group>input[type="tel"]:disabled,
.nice-form-group>input[type="text"]:disabled,
.nice-form-group>input[type="time"]:disabled,
.nice-form-group>input[type="url"]:disabled,
.nice-form-group>input[type="week"]:disabled,
.nice-form-group>select:disabled,
.nice-form-group>textarea:disabled {
    cursor: not-allowed;
    opacity: 0.75;
}

.nice-form-group>input[type="checkbox"]::-webkit-input-placeholder,
.nice-form-group>input[type="date"]::-webkit-input-placeholder,
.nice-form-group>input[type="email"]::-webkit-input-placeholder,
.nice-form-group>input[type="month"]::-webkit-input-placeholder,
.nice-form-group>input[type="number"]::-webkit-input-placeholder,
.nice-form-group>input[type="password"]::-webkit-input-placeholder,
.nice-form-group>input[type="radio"]::-webkit-input-placeholder,
.nice-form-group>input[type="search"]::-webkit-input-placeholder,
.nice-form-group>input[type="tel"]::-webkit-input-placeholder,
.nice-form-group>input[type="text"]::-webkit-input-placeholder,
.nice-form-group>input[type="time"]::-webkit-input-placeholder,
.nice-form-group>input[type="url"]::-webkit-input-placeholder,
.nice-form-group>input[type="week"]::-webkit-input-placeholder,
.nice-form-group>select::-webkit-input-placeholder,
.nice-form-group>textarea::-webkit-input-placeholder {
    color: var(--nf-input-placeholder-color);
    letter-spacing: 0;
}

.nice-form-group>input[type="checkbox"]:-ms-input-placeholder,
.nice-form-group>input[type="date"]:-ms-input-placeholder,
.nice-form-group>input[type="email"]:-ms-input-placeholder,
.nice-form-group>input[type="month"]:-ms-input-placeholder,
.nice-form-group>input[type="number"]:-ms-input-placeholder,
.nice-form-group>input[type="password"]:-ms-input-placeholder,
.nice-form-group>input[type="radio"]:-ms-input-placeholder,
.nice-form-group>input[type="search"]:-ms-input-placeholder,
.nice-form-group>input[type="tel"]:-ms-input-placeholder,
.nice-form-group>input[type="text"]:-ms-input-placeholder,
.nice-form-group>input[type="time"]:-ms-input-placeholder,
.nice-form-group>input[type="url"]:-ms-input-placeholder,
.nice-form-group>input[type="week"]:-ms-input-placeholder,
.nice-form-group>select:-ms-input-placeholder,
.nice-form-group>textarea:-ms-input-placeholder {
    color: var(--nf-input-placeholder-color);
    letter-spacing: 0;
}

.nice-form-group>input[type="checkbox"]:-moz-placeholder,
.nice-form-group>input[type="checkbox"]::-moz-placeholder,
.nice-form-group>input[type="date"]:-moz-placeholder,
.nice-form-group>input[type="date"]::-moz-placeholder,
.nice-form-group>input[type="email"]:-moz-placeholder,
.nice-form-group>input[type="email"]::-moz-placeholder,
.nice-form-group>input[type="month"]:-moz-placeholder,
.nice-form-group>input[type="month"]::-moz-placeholder,
.nice-form-group>input[type="number"]:-moz-placeholder,
.nice-form-group>input[type="number"]::-moz-placeholder,
.nice-form-group>input[type="password"]:-moz-placeholder,
.nice-form-group>input[type="password"]::-moz-placeholder,
.nice-form-group>input[type="radio"]:-moz-placeholder,
.nice-form-group>input[type="radio"]::-moz-placeholder,
.nice-form-group>input[type="search"]:-moz-placeholder,
.nice-form-group>input[type="search"]::-moz-placeholder,
.nice-form-group>input[type="tel"]:-moz-placeholder,
.nice-form-group>input[type="tel"]::-moz-placeholder,
.nice-form-group>input[type="text"]:-moz-placeholder,
.nice-form-group>input[type="text"]::-moz-placeholder,
.nice-form-group>input[type="time"]:-moz-placeholder,
.nice-form-group>input[type="time"]::-moz-placeholder,
.nice-form-group>input[type="url"]:-moz-placeholder,
.nice-form-group>input[type="url"]::-moz-placeholder,
.nice-form-group>input[type="week"]:-moz-placeholder,
.nice-form-group>input[type="week"]::-moz-placeholder,
.nice-form-group>select:-moz-placeholder,
.nice-form-group>select::-moz-placeholder,
.nice-form-group>textarea:-moz-placeholder,
.nice-form-group>textarea::-moz-placeholder {
    color: var(--nf-input-placeholder-color);
    letter-spacing: 0;
}

.nice-form-group>input[type="checkbox"]:focus,
.nice-form-group>input[type="date"]:focus,
.nice-form-group>input[type="email"]:focus,
.nice-form-group>input[type="month"]:focus,
.nice-form-group>input[type="number"]:focus,
.nice-form-group>input[type="password"]:focus,
.nice-form-group>input[type="radio"]:focus,
.nice-form-group>input[type="search"]:focus,
.nice-form-group>input[type="tel"]:focus,
.nice-form-group>input[type="text"]:focus,
.nice-form-group>input[type="time"]:focus,
.nice-form-group>input[type="url"]:focus,
.nice-form-group>input[type="week"]:focus,
.nice-form-group>select:focus,
.nice-form-group>textarea:focus {
    outline: none;
    border-color: var(--nf-input-focus-border-color);
}

.nice-form-group>input[type="checkbox"]+small,
.nice-form-group>input[type="date"]+small,
.nice-form-group>input[type="email"]+small,
.nice-form-group>input[type="month"]+small,
.nice-form-group>input[type="number"]+small,
.nice-form-group>input[type="password"]+small,
.nice-form-group>input[type="radio"]+small,
.nice-form-group>input[type="search"]+small,
.nice-form-group>input[type="tel"]+small,
.nice-form-group>input[type="text"]+small,
.nice-form-group>input[type="time"]+small,
.nice-form-group>input[type="url"]+small,
.nice-form-group>input[type="week"]+small,
.nice-form-group>select+small,
.nice-form-group>textarea+small {
    margin-top: 0.5rem;
}

.nice-form-group>input[type="checkbox"].icon-left,
.nice-form-group>input[type="date"].icon-left,
.nice-form-group>input[type="email"].icon-left,
.nice-form-group>input[type="month"].icon-left,
.nice-form-group>input[type="number"].icon-left,
.nice-form-group>input[type="password"].icon-left,
.nice-form-group>input[type="radio"].icon-left,
.nice-form-group>input[type="search"].icon-left,
.nice-form-group>input[type="tel"].icon-left,
.nice-form-group>input[type="text"].icon-left,
.nice-form-group>input[type="time"].icon-left,
.nice-form-group>input[type="url"].icon-left,
.nice-form-group>input[type="week"].icon-left,
.nice-form-group>select.icon-left,
.nice-form-group>textarea.icon-left {
    background-position: left var(--icon-background-offset) bottom 50%;
    padding-left: var(--icon-padding);
    background-size: var(--nf-input-size);
}

.nice-form-group>input[type="checkbox"].icon-right,
.nice-form-group>input[type="date"].icon-right,
.nice-form-group>input[type="email"].icon-right,
.nice-form-group>input[type="month"].icon-right,
.nice-form-group>input[type="number"].icon-right,
.nice-form-group>input[type="password"].icon-right,
.nice-form-group>input[type="radio"].icon-right,
.nice-form-group>input[type="search"].icon-right,
.nice-form-group>input[type="tel"].icon-right,
.nice-form-group>input[type="text"].icon-right,
.nice-form-group>input[type="time"].icon-right,
.nice-form-group>input[type="url"].icon-right,
.nice-form-group>input[type="week"].icon-right,
.nice-form-group>select.icon-right,
.nice-form-group>textarea.icon-right {
    background-position: right var(--icon-background-offset) bottom 50%;
    padding-right: var(--icon-padding);
    background-size: var(--nf-input-size);
}

.nice-form-group>input[type="checkbox"]:-webkit-autofill,
.nice-form-group>input[type="date"]:-webkit-autofill,
.nice-form-group>input[type="email"]:-webkit-autofill,
.nice-form-group>input[type="month"]:-webkit-autofill,
.nice-form-group>input[type="number"]:-webkit-autofill,
.nice-form-group>input[type="password"]:-webkit-autofill,
.nice-form-group>input[type="radio"]:-webkit-autofill,
.nice-form-group>input[type="search"]:-webkit-autofill,
.nice-form-group>input[type="tel"]:-webkit-autofill,
.nice-form-group>input[type="text"]:-webkit-autofill,
.nice-form-group>input[type="time"]:-webkit-autofill,
.nice-form-group>input[type="url"]:-webkit-autofill,
.nice-form-group>input[type="week"]:-webkit-autofill,
.nice-form-group>select:-webkit-autofill,
.nice-form-group>textarea:-webkit-autofill {
    padding: calc(var(--nf-input-size) * 0.75) !important;
}

.nice-form-group>input[type="search"]:placeholder-shown {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='M21 21l-4.35-4.35'/%3E%3C/svg%3E");
    background-position: left calc(var(--nf-input-size) * 0.75) bottom 50%;
    padding-left: calc(var(--nf-input-size) * 2.25);
    background-size: var(--nf-input-size);
    background-repeat: no-repeat;
}

.nice-form-group>input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: var(--nf-input-size);
    height: var(--nf-input-size);
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x'%3E%3Cpath d='M18 6L6 18M6 6l12 12'/%3E%3C/svg%3E");
}

.nice-form-group>input[type="search"]:focus {
    padding-left: calc(var(--nf-input-size) * 0.75);
    background-position: left calc(var(--nf-input-size) * -1) bottom 50%;
}

.nice-form-group>input[type="email"][class^="icon"] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-at-sign'%3E%3Ccircle cx='12' cy='12' r='4'/%3E%3Cpath d='M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
}

.nice-form-group>input[type="tel"][class^="icon"] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-phone'%3E%3Cpath d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
}

.nice-form-group>input[type="url"][class^="icon"] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-link'%3E%3Cpath d='M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
}

.nice-form-group>input[type="password"] {
    letter-spacing: 2px;
}

.nice-form-group>input[type="password"][class^="icon"] {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-lock'%3E%3Crect x='3' y='11' width='18' height='11' rx='2' ry='2'/%3E%3Cpath d='M7 11V7a5 5 0 0110 0v4'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
}

.nice-form-group>input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    cursor: pointer;
}

.nice-form-group>input[type="range"]:focus {
    outline: none;
}

.nice-form-group>input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--nf-slider-track-height);
    background: var(--nf-slider-track-background);
    border-radius: var(--nf-slider-track-border-radius);
}

.nice-form-group>input[type="range"]::-moz-range-track {
    width: 100%;
    height: var(--nf-slider-track-height);
    background: var(--nf-slider-track-background);
    border-radius: var(--nf-slider-track-border-radius);
}

.nice-form-group>input[type="range"]::-webkit-slider-thumb {
    height: var(--nf-slider-thumb-size);
    width: var(--nf-slider-thumb-size);
    border-radius: var(--nf-slider-thumb-size);
    background: var(--nf-slider-thumb-background);
    border: 0;
    border: var(--nf-slider-thumb-border-width) solid var(--nf-slider-thumb-border-color);
    -webkit-appearance: none;
    appearance: none;
    margin-top: calc(var(--nf-slider-track-height) * 0.5 - var(--nf-slider-thumb-size) * 0.5);
}

.nice-form-group>input[type="range"]::-moz-range-thumb {
    height: var(--nf-slider-thumb-size);
    width: var(--nf-slider-thumb-size);
    border-radius: var(--nf-slider-thumb-size);
    background: var(--nf-slider-thumb-background);
    border: 0;
    border: var(--nf-slider-thumb-border-width) solid var(--nf-slider-thumb-border-color);
    -moz-appearance: none;
    appearance: none;
    box-sizing: border-box;
}

.nice-form-group>input[type="range"]:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 var(--nf-slider-thumb-border-focus-width) var(--nf-slider-thumb-background);
}

.nice-form-group>input[type="range"]:focus::-moz-range-thumb {
    box-shadow: 0 0 0 var(--nf-slider-thumb-border-focus-width) var(--nf-slider-thumb-background);
}

.nice-form-group>input[type="color"] {
    border: var(--nf-input-border-width) solid var(--nf-input-border-color);
    border-bottom-width: var(--nf-input-border-bottom-width);
    height: calc(var(--nf-input-size) * 2);
    border-radius: var(--nf-input-border-radius);
    padding: calc(var(--nf-input-border-width) * 2);
}

.nice-form-group>input[type="color"]:focus {
    outline: none;
    border-color: var(--nf-input-focus-border-color);
}

.nice-form-group>input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 5%;
}

.nice-form-group>input[type="color"]::-moz-color-swatch {
    border-radius: calc(var(--nf-input-border-radius) / 2);
    border: none;
}

.nice-form-group>input[type="color"]::-webkit-color-swatch {
    border-radius: calc(var(--nf-input-border-radius) / 2);
    border: none;
}

.nice-form-group>input[type="number"] {
    width: auto;
}

.nice-form-group>input[type="date"],
.nice-form-group>input[type="month"],
.nice-form-group>input[type="week"] {
    min-width: 14em;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-calendar'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'/%3E%3Cpath d='M16 2v4M8 2v4M3 10h18'/%3E%3C/svg%3E");
}

.nice-form-group>input[type="time"] {
    min-width: 6em;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-clock'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 6v6l4 2'/%3E%3C/svg%3E");
}

.nice-form-group>input[type="date"],
.nice-form-group>input[type="month"],
.nice-form-group>input[type="time"],
.nice-form-group>input[type="week"] {
    background-position: right calc(var(--nf-input-size) * 0.75) bottom 50%;
    background-repeat: no-repeat;
    background-size: var(--nf-input-size);
    width: auto;
}

.nice-form-group>input[type="date"]::-webkit-calendar-picker-indicator,
.nice-form-group>input[type="date"]::-webkit-inner-spin-button,
.nice-form-group>input[type="month"]::-webkit-calendar-picker-indicator,
.nice-form-group>input[type="month"]::-webkit-inner-spin-button,
.nice-form-group>input[type="time"]::-webkit-calendar-picker-indicator,
.nice-form-group>input[type="time"]::-webkit-inner-spin-button,
.nice-form-group>input[type="week"]::-webkit-calendar-picker-indicator,
.nice-form-group>input[type="week"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    cursor: pointer;
    opacity: 0;
}

@-moz-document url-prefix() {

    .nice-form-group>input[type="date"],
    .nice-form-group>input[type="month"],
    .nice-form-group>input[type="time"],
    .nice-form-group>input[type="week"] {
        min-width: auto;
        width: auto;
        background-image: none;
    }
}

.nice-form-group>textarea {
    height: auto;
}

.nice-form-group>input[type="checkbox"],
.nice-form-group>input[type="radio"] {
    width: var(--nf-input-size);
    height: var(--nf-input-size);
    padding: inherit;
    margin: 0;
    display: inline-block;
    vertical-align: top;
    border-radius: calc(var(--nf-input-border-radius) / 2);
    border-width: var(--nf-input-border-width);
    cursor: pointer;
    background-position: 50%;
}

.nice-form-group>input[type="checkbox"]:focus:not(:checked),
.nice-form-group>input[type="radio"]:focus:not(:checked) {
    border: var(--nf-input-border-width) solid var(--nf-input-focus-border-color);
    outline: none;
}

.nice-form-group>input[type="checkbox"]:hover,
.nice-form-group>input[type="radio"]:hover {
    border: var(--nf-input-border-width) solid var(--nf-input-focus-border-color);
}

.nice-form-group>input[type="checkbox"]+label,
.nice-form-group>input[type="radio"]+label {
    display: inline-block;
    margin-bottom: 0;
    padding-left: calc(var(--nf-input-size) / 2.5);
    font-weight: 400;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    max-width: calc(100% - var(--nf-input-size) * 2);
    line-height: normal;
}

.nice-form-group>input[type="checkbox"]+label>small,
.nice-form-group>input[type="radio"]+label>small {
    margin-top: calc(var(--nf-input-size) / 4);
}

.nice-form-group>input[type="checkbox"]:checked {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23FFF' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E") no-repeat 50%/85%;
    background-color: var(--nf-input-focus-border-color);
    border-color: var(--nf-input-focus-border-color);
}

.nice-form-group>input[type="radio"] {
    border-radius: 100%;
}

.nice-form-group>input[type="radio"]:checked {
    background-color: var(--nf-input-focus-border-color);
    border-color: var(--nf-input-focus-border-color);
    box-shadow: inset 0 0 0 3px #fff;
}

.nice-form-group>input[type="checkbox"].switch {
    width: var(--switch-width);
    height: var(--switch-height);
    border-radius: var(--switch-height);
    position: relative;
}

.nice-form-group>input[type="checkbox"].switch:after {
    background: var(--nf-input-border-color);
    border-radius: var(--switch-orb-size);
    height: var(--switch-orb-size);
    left: var(--switch-orb-offset);
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: var(--switch-orb-size);
    content: "";
    transition: all 0.2s ease-out;
}

.nice-form-group>input[type="checkbox"].switch+label {
    margin-top: calc(var(--switch-height) / 8);
}

.nice-form-group>input[type="checkbox"].switch:checked {
    background: none;
    background-position: 0 0;
    background-color: var(--nf-input-focus-border-color);
}

.nice-form-group>input[type="checkbox"].switch:checked:after {
    -webkit-transform: translateY(-50%) translateX(calc(var(--switch-width) / 2 - var(--switch-orb-offset)));
    transform: translateY(-50%) translateX(calc(var(--switch-width) / 2 - var(--switch-orb-offset)));
    background: #fff;
}

.nice-form-group>input[type="file"] {
    background: rgba(0, 0, 0, 0.025);
    padding: var(--nf-input-size);
    display: block;
    width: 100%;
    border-radius: var(--nf-input-border-radius);
    border: 1px dashed var(--nf-input-border-color);
    outline: none;
    cursor: pointer;
}

.nice-form-group>input[type="file"]:focus,
.nice-form-group>input[type="file"]:hover {
    border-color: var(--nf-input-focus-border-color);
}

.nice-form-group>input[type="file"]::file-selector-button {
    background: var(--nf-input-focus-border-color);
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0.5rem;
    border-radius: var(--nf-input-border-radius);
    color: #fff;
    margin-right: 1rem;
    outline: none;
    font-family: var(--nf-input-font-family);
    cursor: pointer;
}

.nice-form-group>input[type="file"]::-webkit-file-upload-button {
    background: var(--nf-input-focus-border-color);
    border: 0;
    -webkit-appearance: none;
    appearance: none;
    padding: 0.5rem;
    border-radius: var(--nf-input-border-radius);
    color: #fff;
    margin-right: 1rem;
    outline: none;
    font-family: var(--nf-input-font-family);
    cursor: pointer;
}

.nice-form-group>select {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-position: right calc(var(--nf-input-size) * 0.75) bottom 50%;
    background-repeat: no-repeat;
    background-size: var(--nf-input-size);
}

*,
:after,
:before {
    box-sizing: inherit;
}

html {
    font-size: 16px;
    box-sizing: border-box;
}

body {
    background: #ccbe93;
    font-family: Roboto, sans-serif;
    color: #4b5563;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.demo-page {
    background-color: rgb(250, 248, 248);
    margin: 0 auto;
    display: -webkit-flex;
    display: flex;
    max-width: 65em;
    margin-top: 40px;
    margin-left: 20%;
}


.demo-page .demo-page-navigation {
    width: 18em;
    padding: 2em 1em;
}

@media only screen and (max-width: 750px) {
    .demo-page .demo-page-navigation {
        display: none;
    }
}

.demo-page .demo-page-navigation nav {
    position: -webkit-sticky;
    position: sticky;
    top: 2em;
    background: #ffffff;
    padding: 0.5em;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.demo-page .demo-page-navigation a {
    display: -webkit-flex;
    display: flex;
    padding: 0.75em 1em;
    text-decoration: none;
    border-radius: 0.25em;
    color: #374151;
    -webkit-align-items: center;
    align-items: center;
}

.demo-page .demo-page-navigation a:hover {
    background: #f3f4f6;
}

.demo-page .demo-page-navigation a svg {
    width: 1.25em;
    height: 1.25em;
    margin-right: 1em;
    color: #1f2937;
}

.demo-page .demo-page-content {
    padding: 2em 1em;
    max-width: 100%;
}

@media only screen and (min-width: 750px) {
    .demo-page .demo-page-content {
        width: calc(100% - 18em);
    }
}

footer {
    text-align: center;
    margin: 2.5em 0;
}

.href-target {
    position: absolute;
    top: -2em;
}

.to-repo,
.to-reset {
    display: -webkit-inline-flex;
    display: inline-flex;
    background: #24292e;
    color: #fff;
    border-radius: 5px;
    padding: 0.5em 1em;
    text-decoration: none;
    -webkit-align-items: center;
    align-items: center;
    transition: background 0.2s ease-out;
}

.to-repo:hover,
.to-reset:hover {
    background: #000;
}

.to-repo svg,
.to-reset svg {
    width: 1.125rem;
    height: 1.125rem;
    margin-right: 0.75em;
}

.to-reset {
    background: #3b4ce2;
}

.to-reset:hover {
    background: #2538df;
}

section {
    background: #fff;
    padding: 2em;
    border-radius: 0.75rem;
    line-height: 1.6;
    overflow: hidden;
    margin-bottom: 2rem;
    position: relative;
    font-size: 0.875rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

section h1 {
    font-weight: 500;
    font-size: 1.25rem;
    color: #000;
    margin-bottom: 0.75rem;
}

section h1 svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: -10%;
    margin-right: 0.25em;
}

section h1.package-name {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    margin-top: -0.5rem;
}

section strong {
    font-weight: 500;
    color: #000;
}

section p {
    margin: 0.5rem 0 1.5rem;
}

section p a {
    text-decoration: none;
    font-weight: 500;
    color: #3b4ce2;
}

section p:last-child {
    margin-bottom: 0;
}

section code {
    font-weight: 500;
    font-family: Consolas, monaco, monospace;
    position: relative;
    z-index: 1;
    margin: 0 2px;
    background: #f3f4f4;
    content: "";
    border-radius: 3px;
    padding: 2px 5px;
    white-space: nowrap;
}

section ul {
    margin-top: 0.5em;
    padding-left: 1em;
    list-style-type: disc;
}

details {
    background: #f1f1f1;
    margin: 2em -2em -2em;
    padding: 1.5em 2em;
}

details .gist {
    margin-top: 1.5em;
}

details .toggle-code {
    display: inline-block;
    padding: 0.5em 1em;
    border-radius: 5px;
    font-size: 0.875rem;
    background: #10b981;
    top: 1em;
    right: 1em;
    color: #fff;
    font-weight: 500;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
}

details .toggle-code:hover {
    background: #0ea271;
}

details .toggle-code svg {
    display: inline-block;
    vertical-align: -15%;
    margin-right: 0.25em;
}

details summary {
    outline: none;
    list-style-type: none;
}

details summary::marker {
    display: none;
}

details summary::-webkit-details-marker {
    display: none;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>