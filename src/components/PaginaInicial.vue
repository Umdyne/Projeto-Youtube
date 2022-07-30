<template>
  <div class="bg-cinzaYT1 h-screen w-screen text-white  ">
    <header class="flex pt-4 h-10 w-full items-center"> 
      <div> 
        <MenuIcon class="h-9 w-9 ml-6" />
      </div>

      <div> 
        <img src="./images/logo-youtube.png" class="w-56 ml-5 ">
      </div>

      <div class="ml-44 w-full mr-80 pr-1 "> 
        <InputSearch />
      </div>
      
      
      <div class="mr-5 mt-1 absolute right-0 flex ">
        <DotsIcon class="w-6 h-10 p-1"/>
        <div class="h-9 w-38 p-3 border border-azulYT font-semibold text-azulYT  ml-3 flex items-center ">
        <img src="./icones/avataryoutube.png">
        <h3>FAZER LOGIN</h3>
      </div>
    </div>  
    </header>
    <hr class="w-full m-4 border-0.1 opacity-10">
    
    <body class="flex w-full h-full ">
      <div class="flex-0 w-2/12 -mt-2">
        <ItemMenu class="" />
      </div>

      <div class="flex-1 bg-cinzaYT2">
        conteudo
      </div>
    </body>
  </div>

</template>

<script lang="ts" setup>

import MenuIcon from "./icones/MenuIcon.vue";
import InputSearch from "./inputs/InputSearch.vue";
import DotsIcon from "./inputs/DotsIcon.vue";
import ItemMenu from "./ItemMenu.vue";

</script>
