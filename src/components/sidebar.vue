<template>
<h1>Listes :</h1>

  <ul>
    <li v-for="(list, index) in getAllList" :key=list.name>
    <button v-on:click.prevent="numList=index" v-on:click="updateNumList">{{list.name}}</button>
    </li>
  </ul>

<h4>Créer Liste :</h4>

  Nom : <input v-model="newList" id="newList" type="text" placeholder="Nom"><br><br>
<button v-on:click="addList({name: newList});" class="add">Créer la liste</button><br><br>

</template>

<script>
import { mapGetters, mapMutations } from "vuex";


export default {
  name: 'sidebar',
  emits: ["nextNumList"],
  data() {
    return {
      numList: 0,
      newList: '',
    }
  },
  methods: {
    ...mapMutations("todolist", ['addList']),
    updateNumList(){
      this.$emit("nextNumList",this.numList);
   }
  },
  computed: {
    ...mapGetters("todolist", ["getAllList"]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
