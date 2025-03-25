<template>
  <h1>{{ message }}</h1>
  <button @click="sortUsersByAge">Sort users by age</button>
  <br />
  <button @click="hideInactive = !hideInactive">{{ toggleButtonName }}</button>

  <h2>Number of active users (computed property): {{ numberOfActiveUsers }}</h2>
  <h2>Number of active users (computed property): {{ numberOfActiveUsers }}</h2>
  <h2>Number of active users (computed property): {{ numberOfActiveUsers }}</h2>

  <h2>
    Number of active users (method call): {{ computeNumberOfActiveUsers() }}
  </h2>
  <h2>
    Number of active users (method call): {{ computeNumberOfActiveUsers() }}
  </h2>
  <h2>
    Number of active users (method call): {{ computeNumberOfActiveUsers() }}
  </h2>
  <table>
    <thead>
      <tr>
        <th>Index</th>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Operation</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in filteredUsers" :key="user.id">
        <td>{{ index + 1 }}</td>
        <td>{{ user.id }}</td>
        <td :class="{ inactive: !user.active }">
          {{ user.name }}
        </td>
        <td>{{ user.age }}</td>
        <td>
          <button @click="user.active = !user.active">
            {{ user.active ? 'Deactivate' : 'Restore' }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script setup>
import { computed, ref } from 'vue'

let message = ref('Hello, Computed Properties!')

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

let hideInactive = ref(false)

function sortUsersByAge() {
  users.value.sort((a, b) => a.age - b.age)
}

let toggleButtonName = computed(() =>
  hideInactive.value ? 'Show all' : 'Hide inactive'
)

let numberOfActiveUsers = computed(() => {
  console.log('computed property')
  return users.value.filter((user) => user.active).length
})

let computeNumberOfActiveUsers = () => {
  console.log('method call')
  return users.value.filter((user) => user.active).length
}

let filteredUsers = computed(() =>
  hideInactive.value ? users.value.filter((user) => user.active) : users.value
)
</script>

<style scoped>
.inactive {
  color: red;
  text-decoration: line-through;
}
</style>