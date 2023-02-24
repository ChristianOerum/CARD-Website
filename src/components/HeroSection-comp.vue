<template>

    <div class="h-max w-full bg-[#30342D] relative max-w-[1600px]">
        
        <video class="aboslute w-full opacity-80" autoplay="true" loop muted>
            <source src="../assets/HeroVideo.mp4" type="video/mp4" preload>
            Your browser does not support the video tag.
            </video>

        <div class="absolute top-[40%] left-[200px]">
            <h1 class="text-white/[0.5] text-md font-Poppins font-medium">Est. 2022</h1>
            <h1 class="text-white text-7xl font-Poppins font-semibold">C.A.R.D. Airsoft</h1>
            <h2 class="text-[#F8D027] text-3xl font-Poppins font-medium">Combat and Reconnaissance Division</h2>
            <h3 class="text-white/[0.7] text-xl pt-5 w-[600px] font-Poppins font-normal">En casual airsoft og hardcore milsim foreningen med med stort fokus på trivsel, og kammarat skab, hvor der er plads til alle... Kom frisk soldat!</h3>

            <div class="absolute bottom-[-60px] left-[100px]">
                <img class="w-fit h-[400px] opacity-10" alt="CARDlogo-white" src="@/assets/cardlogo_whiteout.svg"/>
            </div>
            
        </div>

    </div>

</template>

<script>

export default ({
    components: {
    },
    data() {
      return {}
    },
    methods: {},

    beforeMount(){
        console.log("beforeMount")
    }

  });
  </script>