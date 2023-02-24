<template>

    <div class="h-[140px] w-full bg-gradient-to-b from-black/[0.6] to-black/[0] flex flex-col justify-center fixed top-0 max-w-[1600px]">

        <div class="h-2/4 absolute left-[50px]">
            <img class="w-fit h-full" alt="CARDlogo-white" src="@/assets/cardlogo_whiteout.svg"/>
        </div>

        <div class="h-2/5 absolute right-[55px] flex text-white flex-row items-center gap-7 text-xl">
            <a class="font-Poppins font-normal text-[16px] text-white hover:text-[#F8D027] transition-all ease-out duration-300">Om foreningen</a>
            <a class="font-Poppins font-normal text-[16px] text-white hover:text-[#F8D027] transition-all ease-out duration-300">Begivenheder</a>
            <a class="font-Poppins font-normal text-[16px] text-white hover:text-[#F8D027] transition-all ease-out duration-300">Patches</a>
            <a href="#_" class="font-Poppins font-normal text-[16px] relative rounded-xl px-5 py-2 overflow-hidden group bg-[#040900] outline-3 outline outline-transparent outline-offset-4 border-4 border-[#F8D027] relative hover:bg-gradient-to-r hover:from-[#040900] hover:to-[#2C2801] hover:outline-3 hover:outline-[#F8D027]/[0.25] hover:outline hover:outline-offset-4 text-white transition-all ease-out duration-300">
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-[#FCE894] opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Join the deck!</span>
            </a>
        </div>


    </div>

</template>