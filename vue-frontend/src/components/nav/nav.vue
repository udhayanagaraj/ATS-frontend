<template>
    <nav class="navbar navbar-expand-sm  navbar-dark ">
      <div class="container-fluid"> <!-- Use container-fluid for full-width -->
        <a class="navbar-brand" href="#">
          <img src="./Logo.jpeg" alt="Logo" class="navbar-logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto"> 
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/pages/jobs">Job Posting</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/applicants">Applicants</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/applicants">Clients</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/applicants">Vendors</a>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto"> 
              <li class="nav-item">
              <a class="nav-link" href="/#/pages/jobs">Logout</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </template>
  
  <style>
  
  .navbar {
    position: fixed; 
    top: 0; 
    width: 100%; 
    left: 0;
    margin-left: 0;
    z-index: 1000;
    background-color: rgb(109, 170, 240);
  }
  .navbar-logo {
  width: 35px; /* Adjust the width as needed */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Add margin if needed */
}
  </style>

<script>
  import './Logo.jpeg';
    export default {
        name: 'Navbar',
    }
</script>