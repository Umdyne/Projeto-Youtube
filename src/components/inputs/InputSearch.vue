<template>
    <div class="relative text-white">
        <input
            type="text"
            class="w-full bg-gray-700 h-10  px-4 py-2 rounded-lg placeholder-white opacity-30 focus:opacity-60 outline-none focus:outline-none pr-10"
            placeholder="Search"
        />    
        <SearchIcon class="w-4 h-4 absolute top-2.5 right-2" />
    </div>
</template>

<script setup>

    import SearchIcon from './SearchIcon.vue'
    

</script>