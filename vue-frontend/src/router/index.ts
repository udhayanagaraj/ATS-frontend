import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import jobs from "@/views/jobs.vue";
import applicants from "@/views/applicant/applicants.vue";
import addJob from "@/views/add-job.vue";
import job_details from "@/views/job_details.vue";
import updateJob from "@/views/update-job.vue";
import Manual from "@/views/applicant/manual-parsing/manual.vue";
import Parser from "@/views/applicant/automation/parser.vue";
import Candidate from '@/views/candidates/candidate-details.vue';
<<<<<<< HEAD
import Search from '@/views/applicant/search/search.vue';


=======
import ApplicantSearch from '@/views/applicant/applicant-search/applicant_search.vue';
>>>>>>> a899d71eaf6461c3878156b2968ba7aa7be24d5e

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/pages/jobs",
    component: jobs,
    children: [
      {
        path: "/pages/jobs",
        name: "Jobs",
        component: jobs,
      },
      {
        path: "/pages/jobs/:id",
        name: "job-details",
        component: job_details,
      },
      
    ],
  },
  {
    path: "/pages/jobs/:id",
    name: "job-details",
    component: job_details,
  },
  {
    path: "/pages/jobs/update/:id",
    name: "updateJob",
    component: updateJob,
  },
  {
    path:"/manual",
    component : Manual,
  },
  
  {
    path:"/applicants",
    component : applicants,
  },
  {
    path:"/add",
    component : addJob
  },
  {
    path:"/parser",
    component : Parser
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/pages/jobs",
  },
  {
    path:"/candidate/:id",
    name:"candidate-detail",
    component : Candidate
  },
  {
    path:"/parser",
    name:"parsed-detail",
    component : Parser
  },
  {
<<<<<<< HEAD
    path:"/applicant-search",
    name:"applicant-search",
    component : Search
=======
    path:"/search-applicant",
    name:"search-applicant",
    component : ApplicantSearch
>>>>>>> a899d71eaf6461c3878156b2968ba7aa7be24d5e
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
