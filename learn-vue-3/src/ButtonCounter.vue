<template>
    <button @click="count++">You clicked me {{ count }} number of times.</button>
</template>

<script setup>
import { ref } from 'vue'; 

let count = ref(0);
</script>

<style scoped>

</style>