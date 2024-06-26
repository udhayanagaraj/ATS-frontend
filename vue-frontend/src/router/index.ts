import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import jobs from "@/views/jobs.vue";
import applicants from "@/views/applicant/applicants.vue";
import addJob from "@/views/add-job.vue";
import job_details from "@/views/job_details.vue";
import updateJob from "@/views/update-job.vue";
import Manual from "@/views/applicant/manual-parsing/manual.vue";
import Parser from "@/views/applicant/automation/parser.vue";
import Candidate from '@/views/candidates/candidate-details.vue';
import Applicant_search from "@/views/applicant/applicant-search/applicant_search.vue";
import Theme from "@/views/applicant/manual-parsing/theme.vue";
import EditCandidate from "@/views/applicant/manual-parsing/edit_candidate.vue";
import Applicant_details from "@/views/applicant/applicant-search/applicants_details.vue"

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
    path:"/applicant-search",
    name:"applicant-search",
    component : Applicant_search
  },
  {
    path:"/theme",
    name:"theme",
    component:Theme
  },
  {
    path:"/updateCandidate/:id",
    name:"updateCandidate",
    component:EditCandidate
  },
  {
    path:"/applicants-details",
    name:"applicants-details",
    component:Applicant_details
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
