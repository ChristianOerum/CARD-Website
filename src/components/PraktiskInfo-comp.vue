<template>

    <div class="h-auto w-[100%] pt-10 pb-10 bg-[#202316] relative max-w-[1600px]">

        <h1 class="text-white text-3xl font-semibold pl-[5%] pb-[7px]">FAQ</h1>

        <div class="flex flex-col justify-center items-center">

            <div v-auto-animate v-on:click="expandBox1()" class="bg-[#040900] w-[90%] h-auto min-h-[60px] relative m-1 rounded-lg border-2 border-[#F8D027] overflow-hidden group hover:bg-gradient-to-r hover:from-[#040900] hover:to-[#2C2801] shadow-[0_0px_40px_0px_rgba(0,0,0,0.7)]">
                <h1 class="text-white absolute top-[17px] left-[18px] text-poppins font-semibold">Something somehting title</h1>
                <p v-if="box1 == true" class="p-5 pt-[45px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard</p>
            </div>

            <div v-auto-animate v-on:click="expandBox2()" class="bg-[#040900] w-[90%] h-auto min-h-[60px] relative m-1 rounded-lg border-2 border-[#F8D027] overflow-hidden group hover:bg-gradient-to-r hover:from-[#040900] hover:to-[#2C2801] shadow-[0_0px_40px_0px_rgba(0,0,0,0.7)]">
                <h1 class="text-white absolute top-[17px] left-[18px] text-poppins font-semibold">Something somehting title</h1>
                <p v-if="box2 == true" class="p-5 pt-[45px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard</p>
            </div>

            <div v-auto-animate v-on:click="expandBox3()" class="bg-[#040900] w-[90%] h-auto min-h-[60px] relative m-1 rounded-lg border-2 border-[#F8D027] overflow-hidden group hover:bg-gradient-to-r hover:from-[#040900] hover:to-[#2C2801] shadow-[0_0px_40px_0px_rgba(0,0,0,0.7)]">
                <h1 class="text-white absolute top-[17px] left-[18px] text-poppins font-semibold">Something somehting title</h1>
                <p v-if="box3 == true" class="p-5 pt-[45px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard, >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard</p>
            </div>

            <div v-auto-animate v-on:click="expandBox4()" class="bg-[#040900] w-[90%] h-auto min-h-[60px] relative m-1 rounded-lg border-2 border-[#F8D027] overflow-hidden group hover:bg-gradient-to-r hover:from-[#040900] hover:to-[#2C2801] shadow-[0_0px_40px_0px_rgba(0,0,0,0.7)]">
                <h1 class="text-white absolute top-[17px] left-[18px] text-poppins font-semibold">Something somehting title</h1>
                <p v-if="box4 == true" class="p-5 pt-[45px] text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard</p>
            </div>

        </div>

    </div>

</template>

<script>

export default ({
    components: {
    },
    data() {
      return {
        box1: false,
        box2: false,
        box3: false,
        box4: false
      }
    },
    methods: {
        expandBox1() {
            this.box1 = !this.box1
        },
        expandBox2() {
            this.box2 = !this.box2
        },
        expandBox3() {
            this.box3 = !this.box3
        },
        expandBox4() {
            this.box4 = !this.box4
        }
    }

  });
  </script>