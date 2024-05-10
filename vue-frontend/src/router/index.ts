import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import jobs from "@/views/jobs.vue";
import applicants from "@/views/applicants.vue";
import addJob from "@/views/add-job.vue";
import job_details from "@/views/job_details.vue";
import updateJob from "@/views/update-job.vue";

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
      {
        path: "/pages/jobs/update/:id",
        name: "updateJob",
        component: updateJob,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/pages/jobs",
  },
  {
    path:"/applicants",
    component : applicants,
  },
  {
    path:"/add",
    component : addJob
  }
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
