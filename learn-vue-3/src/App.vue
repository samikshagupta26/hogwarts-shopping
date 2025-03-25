<template>
  <h1>Message: {{ message }}</h1>
  <div style="background-color: orange; padding-left: 10px;">
    <ComponentA />
  </div>
  <button @click="count = count + 2">Add to count</button>
  
</template>

<script setup>
import { provide, readonly, ref } from 'vue';
import ComponentA from './ComponentA.vue';

let message = ref('Hello, Provide/inject!')

let count = ref(0)

function updateMessage() {
  message.value = 'Hello, Provide/inject! Updated.'
}

provide('msg', {message, updateMessage})
provide('read-only-count', readonly(count))

</script>

<style scoped>

</style>