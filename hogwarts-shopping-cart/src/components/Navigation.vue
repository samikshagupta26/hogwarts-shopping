<template>
    <nav>
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'About'}">About</router-link>
        <router-link :to="{name: 'BlogPosts'}">Blog Posts</router-link>
    </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 1.5rem;
    background: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.router-link-active {
    color: #fff;
    border-color: #0056b3;
    background-color: #007bff;
    border-radius: 6px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transform: translate(-2px);
}

a{
    padding: 0.5rem;
}
</style>