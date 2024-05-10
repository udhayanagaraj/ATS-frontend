<template>
  <Navbar/>
  <router-view/>
  
</template>



<script>

import Navbar from './components/nav/nav.vue';

export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>
