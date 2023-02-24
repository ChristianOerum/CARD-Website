<template>

  <div class="w-100 h-[100vh] relative bg-[#090B07] flex flex-col items-center">

    <Hero class=""></Hero>
    <PraktiskInfo class=""></PraktiskInfo>
    <PraktiskInfo class=""></PraktiskInfo>
    <PraktiskInfo class=""></PraktiskInfo>
    <PraktiskInfo class=""></PraktiskInfo>

    <Header class=""></Header>
    

  </div>

</template>

<script>


//Fixed components import
import Header from '../components/Header-comp.vue'
import Hero from '../components/HeroSection-comp.vue' 
import PraktiskInfo from '../components/PraktiskInfo-comp.vue' 

export default ({
    components: {
      Header,
      Hero,
      PraktiskInfo
    },
    data() {
      return {}
    },
    methods: {}
  });
  </script>