<template>
    <div style="background-color: lightblue;">
        <h2>
            This is Component B.
        </h2>
        {{ messageFromApp }}
        <button @click="updateMessage">Update Message</button>
        <h2>
            {{ count }}
        </h2>
    </div>
</template>

<script setup>
import { inject } from 'vue';

let {message: messageFromApp, updateMessage } = inject('msg', 'default message')
let count = inject('read-only-count')
</script>

<style scoped>

</style>