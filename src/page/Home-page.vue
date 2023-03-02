<template>

  <div class="w-100 h-[100%] relative bg-[#090B07] flex flex-col items-center">

    <Hero class=""></Hero>
    <Omforeningen class=""></Omforeningen>
    <PraktiskInfo class=""></PraktiskInfo>

    <Header class=""></Header>
    <Footer class=""></Footer>

  </div>

</template>

<script>


//Fixed components import
import Header from '../components/Header-comp.vue'
import Hero from '../components/HeroSection-comp.vue'
import Omforeningen from '../components/OmForeningen-comp.vue'  
import PraktiskInfo from '../components/PraktiskInfo-comp.vue'
import Footer from '../components/Footer-comp.vue'  

export default ({
    components: {
      Header,
      Hero,
      PraktiskInfo,
      Omforeningen,
      Footer
    },
    data() {
      return {}
    },
    methods: {},
  });
  </script>