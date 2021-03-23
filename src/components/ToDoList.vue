<template>
  Nom : <input v-model="newTodo" id="newTodo" type="text" placeholder="Nouvelle To Do" >
  <button v-on:click="add({name: newTodo,numList: numList});" class="add">Ajouter</button><br><br>

  <button v-on:click="filterAll">Tout</button><button v-on:click="filterCheck">Check</button><button v-on:click="filterUncheck">Uncheck</button>
  <ul style="list-style-type:none;">
    <li v-for="todo in afficheTodo" :key="todo.id">
      <div v-if="(filter=='all') || ( filter=='check' && todo.completed ) || (filter=='uncheck' && todo.completed==false)">
        <input type="checkbox" v-if="todo.completed" checked v-on:click="doneSwitch({id: todo.id,numList: numList})">
        <input type="checkbox" v-else v-on:click="doneSwitch({id: todo.id,numList: numList})">
        {{ todo.name }}
        <div v-if="modifying==todo.id">
          <input  v-model="newName" id="newName" type="text" placeholder="Nouveau nom" >
          <button v-on:click="modify({id: todo.id,numList: numList, name: newName}); toModify(todo.id)" class="add">Submit</button>
        </div>
        <button v-on:click="toModify(todo.id)">Modifier</button>
        <button v-on:click="remove({id: todo.id,numList: numList})" class="remove">Supprimer</button>
        <br><br>
      </div>
    </li>
  </ul>
  
  Il reste {{ remain }} tâches à faire. <i v-if="remain==0">youpi ☺</i>
<!--
  <br><br><button v-on:click="afficher">Afficher BdD</button>
-->
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: 'ToDoList',
  data() {
    return {
      newTodo: '',
      filter: 'all',
      modifying : null,
      newName : '',
    }
  },
  props:{
    numList:{
      type: Number,
    }
  },
  methods: {
    ...mapMutations("todolist",['add','remove','modify','doneSwitch','affiche']),
    toModify(id){
      if(this.modifying!=id){
        this.modifying = id;
      }else{
        this.modifying = null;
      }
    },
    filterAll(){
      this.filter='all';
    },
    filterCheck(){
      this.filter='check';
    },
    filterUncheck(){
      this.filter='uncheck';
    },
    afficher(){
      this.affiche();
    }
  },
  computed: {
    ...mapGetters("todolist", ['getAllTodos','remaining','getAllList']),
    getList(){
      return this.getAllList();
    },
    afficheTodo(){
      return this.getAllTodos(this.numList);
    },
    remain(){
      return this.remaining(this.numList);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
