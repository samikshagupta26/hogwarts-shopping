<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="sortuserByAge">Sort users by Age</button>
    <button @click="hideInActiveUser">Hide in Active Users</button>
    <button @click="firstTwoUsers">First Two Users</button>
    <ul>
      <li v-for="(user, index) in users" :key="user.id">
        {{ index }} - {{ user.id }} - {{ user.name }} - {{ user.age }} - {{ user.active }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
  let message = "Hello, Array change!";

  function hideInActiveUser(){
    users.value = users.value.filter((user)=> user.active)
  }

  function firstTwoUsers(){
    users.value = users.value.slice(0,2)
  }

  const users = ref([
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "active": true
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25,
    "active": false
  },
  {
    "id": 3,
    "name": "Emily Johnson",
    "age": 28,
    "active": true
  },
  {
    "id": 4,
    "name": "Michael Brown",
    "age": 35,
    "active": false
  },
  {
    "id": 5,
    "name": "Linda Davis",
    "age": 40,
    "active": true
  }
]
)

  function sortuserByAge(){
    users.value.sort((a,b)=> a.age - b.age)
  }
</script>

<style scoped>
.inactive{
  color:red; 
  text-decoration:line-through; 
}
</style>