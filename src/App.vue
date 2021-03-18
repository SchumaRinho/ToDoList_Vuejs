<template>
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/login">Connexion</router-link>
  </div>
  <router-view/>
</template>

<style>

* {
  color: #2c3e50;
  font-family: Arial, Helvetica, sans-serif;
}

#nav {
  font-size: 30px;
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #45a049;
}

</style>
