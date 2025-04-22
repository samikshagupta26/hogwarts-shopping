<template>
    <div>
        <h1>This is the about page</h1>
        <p>You can learn more about me here.</p>
    </div>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router';

onBeforeRouteLeave((to, from) => {
    window.alert('You are about to leave the page. Are you sure?')
    
})
</script>

<style lang="scss" scoped>

</style>