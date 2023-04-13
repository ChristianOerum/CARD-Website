<template>

  <RouterView v-slot="{ Component }">
    <Transition enter-from-class="opacity-0" enter-active-class="transition duration-500">
      <component :is="Component"/>
    </Transition>

  </RouterView>
  
  
</template>

<script>
//import af tailwind CSS
import './assets/tailwind.css'
//import af dash_page komponent
import { defineComponent } from 'vue';

//Fixed components import


export default defineComponent({
  name: 'App',
  components: {
  },
  data() {
    return {}
  },
  methods: {
  }

});
</script>
