<template>
  <h3>Création d'un compte</h3>
  <div class="newAccount">
    <h5>Pseudonyme : </h5>
      <input placeholder="Pseudonyme" required >
    <h5>Adresse e-mail : </h5>
      <input placeholder="E-mail" required >
    <h5>Mots de passe : </h5>
      <input type="password" placeholder="Mots de passe" minlength="6" required><br><br>
      <button>Créer compte</button>
  </div>
</template>

<style scoped>

div{
  margin: 5% 0 0;
}

h3{
  margin: 10% 0 0;
  text-align: center;
}

h5{
  width: 20%;
  margin: 1% 0 0 40%;
}

input {
  width: 20%;
  padding: 12px 20px;
  margin:  0 40% 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  width: 20%;
  padding: 12px 20px;
  margin:  0 40% 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button:hover {
  background-color: #45a049;
}

</style>