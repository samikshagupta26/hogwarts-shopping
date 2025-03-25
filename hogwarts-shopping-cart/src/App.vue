<template>
  <div class="card">
    <h1 ref="title">Template Refs</h1>
    <input ref="input" type="text">
    <button @click="printDomElement">print Dom elements in the console</button>
    <button @click="changeTitle">Change title</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

let title = ref();
let input = ref();

  function printDomElement(){
    console.log(title.value)
    console.log(input.value)
  }

  function changeTitle(){
    title.value.innerText = "Hello, Friend"
  }

  onMounted(()=>{
    input.value.focus();
  })

  
</script>

<style scoped>
  .card{
    background-color: purple;
    color:white;
    padding: 20px 10px;
    margin-bottom: 10px;
  }
</style>