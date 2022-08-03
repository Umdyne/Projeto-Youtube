<template>
    <div class="flex items-center "> 
        <div class=" flex items-center  w-full p-0.5 bg-cinzaYT3">
            <div class="relative flex items-center  w-full">
                <input
                    type="text"
                    class="w-full h-9 px-2 py-0.5 bg-cinzaYTP pr-10 font-semibold "
                    placeholder="Pesquisar"/>    
                    <img src="./tecladoYT2.png" class="absolute top-2 mt-0.5 right-2 w-6">
                
            </div>    
            <SearchIcon class="w-7 h-7 ml-6 mr-5 " />
        </div>
        <div>
            <MicrophoneIcon class="bg-cinzaYT2 rounded-full h-11 p-3 ml-2"/>
        </div>
    </div>
    
</template>

<script setup>

    import SearchIcon from './SearchIcon.vue'
    import MicrophoneIcon from './MicrophoneIcon.vue'

</script>