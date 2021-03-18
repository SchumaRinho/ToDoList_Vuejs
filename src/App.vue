<template>
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/login">Connexion</router-link>
  </div>
  <router-view/>
</template>

<style>


#nav {
  font-size: 30px;
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

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
