<template>
  <div class="bg-cinzaYT1 h-full w-full text-white  ">
    <header class="flex pt-4 h-10 w-full items-center  justify-between">
      <div class="flex"> 
        <MenuIcon class="ml-6 mt-1"/>
       <img src="./images/logo-youtube.png" class="ml-5 mb-1">  
      </div> 
      <div> 
        <InputSearch class=""/>  
      </div>
      <div class="flex"> 
        <DotsIcon class="w-5 mr-4"/>
        <FazerLogin />
      </div>
      

    </header>
   
    
    <body class="mt-4 bg-cinzaYT2 ">
       <hr class="w-full mw-6  border-0.1 opacity-10">
      body
    </body>
  </div>

</template>

<script lang="ts" setup>
import DotsIcon from './inputs/DotsIcon.vue';
import MenuIcon from './inputs/MenuIcon.vue';
import InputSearch from './inputs/InputSearch.vue';
import DotsIcon1 from './inputs/DotsIcon.vue';
import FazerLogin from './FazerLogin.vue';



</script>
