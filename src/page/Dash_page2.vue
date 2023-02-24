<template>
    <div class="bg-[#282B30] w-100 h-screen flex flex-col justify-center items-center flex-col p-10">

<div class="w-full h-full grid grid-rows-4 gap-2 grid-cols-5">
  <reusableCard state="above" KPI_value="🚀" KPI_name="name" KPI_percentage="percent"></reusableCard>
  <reusableCard state="above" KPI_value="🚀" KPI_name="name" KPI_percentage="percent"></reusableCard>
  <reusableCard state="above" KPI_value="🚀" KPI_name="name" KPI_percentage="percent"></reusableCard>
  <reusableCard state="above" KPI_value="🚀" KPI_name="name" KPI_percentage="percent"></reusableCard>
  <reusableCard state="above" KPI_value="🚀" KPI_name="name" KPI_percentage="percent"></reusableCard>
  <reusableCard state="above" KPI_value="🚀" KPI_name="name" KPI_percentage="percent"></reusableCard>
  <reusableCard state="above" KPI_value="🚀" KPI_name="name" KPI_percentage="percent"></reusableCard>
  <reusableCard state="above" KPI_value="🚀" KPI_name="name" KPI_percentage="percent"></reusableCard>
  <reusableCard state="above" KPI_value="🚀" KPI_name="name" KPI_percentage="percent"></reusableCard>
  <reusableCard state="above" KPI_value="🚀" KPI_name="name" KPI_percentage="percent"></reusableCard>

</div>

</div>
</template>

<script>
import reusableCard from "@/components/reusableCard.vue"; 

export default {
  name: 'App',
  components: {
    reusableCard
  },
  data() {},
  methods: {}
}
</script>