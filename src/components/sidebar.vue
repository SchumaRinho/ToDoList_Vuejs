<template>
<h1>Listes :</h1>

  <ul>
    <li v-for="list in afficheList" :key=list.name>
      <button>{{list.name}}</button>
    </li>
  </ul>

<h4>Créer Liste :</h4>

  Nom : <input v-model="newList" id="newList" type="text" placeholder="Nom"><br><br>
<button v-on:click="addList({name: newList});">Créer la liste</button><br><br>

</template>

<script>
import { mapGetters, mapMutations } from "vuex";


export default {
  name: 'sidebar',
  props: {
    msg: String
  },
  data() {
    return {
      newList: '',
    }
  },
  methods: {
    ...mapMutations("todolist", ['addList']),

  },
  computed: {
    ...mapGetters("todolist", ["getAllList"]),
    afficheList(){
      return this.getAllList();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
