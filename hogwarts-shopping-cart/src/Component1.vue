<template>
    <h1>{{ message }}</h1>
    <div class="card">
      <h2 ref="title">This is the app componetnt.</h2>
      <h2 >Number: {{ number }}</h2>
      <button @click="number++">Increase the number</button>
    </div>
  </template>
  
  <script setup>
  import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';
  
  let message = "Hello, again!"
  let number = ref(1)
  let title = ref()
  
  console.log("App Component is setup");
  
  onBeforeMount(()=>{
    console.log("Before App amount")
    console.log(number.value)
    console.log(title.value)
  })
  
  onMounted(()=>{
    console.log("It's mounted");
    console.log(number.value);
    console.log(title.value)
  })
  
  onBeforeUpdate(()=>{
    console.log("It's mounted");
    console.log(number.value);
    console.log(title.value)
  })
  
  
  onUpdated(()=>{
    console.log("It's updating");
    console.log(number.value);
    console.log(title.value)
  })
  
  onBeforeUnmount(()=>{
    console.log("It's before unmount");
    console.log(number.value);
    console.log(title.value)
  })
  
  onUnmounted(()=>{
    console.log("It's unmounted");
    console.log(number.value);
    console.log(title.value)
  })
  
  
  </script>
  
  <style scoped>
    .card{
      background-color: aqua;
      color: white;
      padding: 20px 10px;
      margin-bottom: 10px;
    }
  </style>