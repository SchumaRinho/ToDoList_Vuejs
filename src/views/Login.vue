<template>
  <div class="login">
      <input placeholder="Pseudonyme" required >
      <input type="password" placeholder="Mots de passe" minlength="6" required>
      <button>Connexion</button>
  </div>
</template>

<style scoped>

div{
  margin: 15% 0;
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