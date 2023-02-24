<template>

  <Homepage></Homepage>
  
  
</template>

<script>
//import af tailwind CSS
import './assets/tailwind.css'
//import af dash_page komponent
import { defineComponent } from 'vue';

//Fixed components import
import Homepage from './page/Home-page.vue'


export default defineComponent({
  name: 'App',
  components: {
    Homepage
  },
  data() {
    return {}
  },
  methods: {}
});
</script>
