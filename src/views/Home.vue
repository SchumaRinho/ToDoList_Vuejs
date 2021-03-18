<template>
<div id="App">
  <div id="sidebar">
    <sidebar/>
  </div>
  <div id="toDoList">
    <ToDoList />
  </div>
</div>
</template>

<script>
import ToDoList from '../components/ToDoList.vue'
import sidebar from '../components/sidebar.vue';
export default {
  name: 'App',
  components: {
    ToDoList,
    sidebar
  }
}
</script>
