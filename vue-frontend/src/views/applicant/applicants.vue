<template>
  <h2 class="heading">Add Applicant</h2>
  <div class="container-fluid container">

    <div class="button-boxes">

      <button class="button-1" @click="uploadResume">
        <input id="fileInput" type="file" @change="handleFileUpload" style="display:none" />
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-cloud-plus"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5" />
          <path
            d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
        </svg>
        <div>
          Parse Resume
        </div>
      </button>

      <button class="button-2" @click="navigateToManual">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person-plus"
          viewBox="0 0 16 16">
          <path
            d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          <path fill-rule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
        </svg>
        <div>
          Manual Creation
        </div>
      </button>

    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'applicants',
  data() {
    return {
      resumeFile: null,
      data: null
    }
  },
  methods: {
    navigateToManual() {
      this.$router.push('/manual');
    },

    uploadResume() {
      document.getElementById('fileInput').click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.resumeFile = file;

      axios.post("http://localhost:8000/resume", file)
        .then(response => {
          this.data = response.data.data;
          this.$router.push('/manual');
        })
        .catch(error => {
          console.error('Error parsing the resume:', error);
        });
    }
  }
};

</script>



<style scoped>
.heading {
  position: absolute;
  margin-top: -170px;
  margin-left: -105px;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.button-boxes {
  display: flex;
  gap: 20px;
  /* Space between button boxes */

}

.button-boxes button {
  border: none;
  /* Remove button borders */
  padding: 15px 30px;
  /* Adjust padding as needed */
  /* Button background color */
  border-radius: 5px;
  /* Button border radius */
  cursor: pointer;
  /* Show pointer cursor on hover */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Add a subtle shadow */
  font-size: 16px;
  white-space: nowrap;
}

.button-1 {
  background-color: #5db0f3;
}

.button-2 {
  background-color: #88f35d;
}

.button-boxes button:hover {
  background-color: #e0e0e0;
  /* Darken button background on hover */
}
</style>