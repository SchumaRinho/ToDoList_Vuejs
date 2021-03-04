<template>
  Nom : <input v-model="newTodo" placeholder="Nouvelle To Do">
  <button v-on:click="add">Ajouter</button><br><br>

  <button v-on:click="filterAll">Tout</button><button v-on:click="filterCheck">Check</button><button v-on:click="filterUncheck">Uncheck</button>
  <ul style="list-style-type:none;">
    <li v-for="todo in todos" :key="todo.id">
      <div v-if="(filter=='all') || ( filter=='check' && todo.completed ) || (filter=='uncheck' && todo.completed==false)">
        <input type="checkbox" v-if="todo.completed" checked v-on:click="doneSwitch(todo.id)">
        <input type="checkbox" v-else v-on:click="doneSwitch(todo.id)">
        {{ todo.name }}
        <button v-on:click="remove( todo.id )">Supprimer</button>
        <br><br>
      </div>
    </li>
  </ul>
  
  Il reste {{ aFaire }} tâches à faire. <i v-if="aFaire==0">youpi ☺</i>

  <br><br><button v-on:click="affiche">Afficher BdD</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  name: 'ToDoList',
  props: {
    msg: String
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          name : 'tache 1',
          completed : false
        },{
          id: 2,
          name : 'tache 2',
          completed: true
        },{
          id: 3,
          name : 'tache 3',
          completed: true
        },{
          id: 4,
          name : 'tache 4',
          completed: false
        },{
          id: 5,
          name : 'tache 5',
          completed: false
        }
      ],
      newTodo: '',
      filter: 'all',
    }
  },
  methods: {
    ...mapActions("todolist", ['load']),
    remove(id){
      let i = 0;
      while(id!=this.todos[i].id){
        i++;
      }
      this.todos.splice(i,1)
    },
    add(){
      this.todos.push({id : this.newId() + 1, name : this.newTodo, completed : false});
    },
    newId(){
      let maxId = 1;
      for(let todo in this.todos){
        if(maxId < this.todos[todo].id){
          maxId = this.todos[todo].id;
        }
      }
      return maxId;
    },
    doneSwitch(id){
      let i = 0;
      while(id!=this.todos[i].id){
        i++;
      }
      this.todos[i].completed = !this.todos[i].completed;
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
    affiche(){
      console.log(this.todos);
      for(let todo in this.todos){
        console.log(this.todos[todo]);
      }
      console.log(this.filter);
    },
    mounted() {
			this.load();
		},
  },
  computed: {
    ...mapGetters("todolist", ["myGetter"]),
    aFaire(){
      let nbr = 0;
      for(let todo in this.todos){
        if(!this.todos[todo].completed){
          nbr += 1;
        }
      }
      return nbr;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
