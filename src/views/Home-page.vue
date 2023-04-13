<template>

  <div class="w-[100%] h-auto relative bg-[#090B07] flex flex-col items-center">

    <Hero></Hero>
    <OmForeningen></OmForeningen>
    <PraktiskInfo></PraktiskInfo>

    <Header></Header>
    <Footer></Footer>

  </div>

</template>

<script>


//Fixed components import
import Header from '../components/Header-comp.vue'
import Hero from '../components/HeroSection-comp.vue'
import PraktiskInfo from '../components/PraktiskInfo-comp.vue'
import OmForeningen from '../components/OmForeningen-comp.vue'
import Footer from '../components/Footer-comp.vue'

export default ({
    components: {
      Header,
      Hero,
      PraktiskInfo,
      OmForeningen,
      Footer
    },
    data() {
      return {}
    },
    methods: {},
  });
  </script>