<template>
<div id="App">
  <div id="sidebar">
    <sidebar  @nextNumList="updateNumList"/>
  </div>
  <div id="toDoList">
    <ToDoList :numList="this.newNumList"/>
  </div>
</div>
</template>

<script>
import ToDoList from '../components/ToDoList.vue'
import sidebar from '../components/sidebar.vue';
export default {
  name: 'App',
  data() {
    return {
      newNumList: 0,
    }
  },
  components: {
    ToDoList,
    sidebar
  },
  methods:{
    updateNumList(newNumList){
      this.newNumList = newNumList;
    }
  }
}
</script>

<style>

#App {
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

input {
  width: 95%;
  padding: 12px 20px;
  margin: 8px 0 ;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=checkbox] {
  height: 20px;
  width: 20px;
  cursor: pointer;
}

button {
  background-color: #2c3e50;
  color: white;
  padding: 14px 20px;
  margin: 8px 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add{
  background-color: #4CAF50;
}

.remove{
  background-color: #751106;
}

button:hover {
  background-color: #202d3b;
}

.add:hover{
  background-color: #45a049;
}

.remove:hover{
  background-color: #b81706;
}

</style>
