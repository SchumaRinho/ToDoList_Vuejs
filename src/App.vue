<template>
<div id="sidebar">
  <sidebar/>
</div>
<div id="toDoList">
  <ToDoList />
</div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import sidebar from './components/sidebar.vue';

export default {
  name: 'App',
  components: {
    ToDoList,
    sidebar
  }
}
</script>

<style>
#app {
  display:grid;
  grid-template-columns: 25% 75%;
  padding-left: 15px;
  border: 1px solid black;
}
#sidebar{
  border-right: 1px solid black;
}
#toDoList {
  margin: 50px;
}
button{
  background-color: gray;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 5px 5px;
}
</style>
