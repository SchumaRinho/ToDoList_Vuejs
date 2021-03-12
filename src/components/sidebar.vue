<template>
<h1>Listes :</h1>

  <ul>
    <li v-for="list in todolists" :key=list.nom>
      <button>{{list.nom}}</button>
    </li>
  </ul>

<h4>Créer Liste :</h4>

  Nom : <input v-model="newList" placeholder="Nom"><br><br>
<button v-on:click="add">Créer la liste</button><br><br>

</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  name: 'sidebar',
  props: {
    msg: String
  },
  data() {
    return {
      newList: "",
      todolists: [
        {
          nom: "listeBanale",
          todos:[
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
        },
        {
          nom: "autreListeBanale",
          todos:[
            {
              id: 1,
              name : 'tache A',
              completed : false
            },{
              id: 2,
              name : 'tache B',
              completed: false
            }
          ],
        }
      ]
    }
  },
  methods: {
    ...mapActions("todolist", ['load']),
    add(){
      this.todolists.push({nom:this.newList, todos:[]});
    },
  },
  computed: {
    ...mapGetters("todolist", ["myGetter"]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
