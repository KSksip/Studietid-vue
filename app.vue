<script setup>
import { ref } from 'vue'

var loggedIn = ref(false)
</script>

<template>
  <button class="letoggel" @click="loggedIn = !loggedIn">logIn toggle</button>
  <nav v-if="loggedIn" class="navbar">
    <div class="left">
      <h1>Studietid ASVG</h1>
    </div>

    <div class="middle">
      <div><a href="#">Home</a></div>
      <div><a href="#">Activity</a></div>
      <div><a href="#">Stats</a></div>
    </div>

    <div class="right">
      <div onclick="logout()"><a href="#">Log Out</a></div>
    </div>
  </nav>

  <NuxtPage/>
</template>

<style scoped>
.letoggel{
  position: fixed;
  bottom: 5px;
}

.navbar{
  background-color: #0070c5;
  height: 6vh;
  position: fixed;
  padding: 0 5vh;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  gap: 20%;

  box-shadow: #00000038 0 1vh 3vh;

  z-index: 10;

  text-shadow: 0vh 0.2vh 1vh #0000005b;
}

.navbar > div{
  /*outline: white 1px solid;*/
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20%;
}

.navbar > div > div{
  height: 100%;
}

.navbar > div > div > a {
  text-decoration: none;
  color: white;
  font-size: 3vh;
  white-space: nowrap;
  text-align: center;
  position: relative;
  top: 1vh;
}

.navbar > div > div::before {
  z-index: 1;
  content: "";
  display: block;
  width: 100%;
  height: 0.5vh;

  background-color: white;

  transform: scaleY(0);
  transition: transform 0.2s ease;
}

.navbar > div > div:hover::before {
  transform: scaleY(-1);

}

.left > h1 {
  color: white;
  font-size: 4vh;
  margin-top: 0.75    vh;
}
</style>

<style>
  body {
    background-color: whitesmoke;
    font-family:Arial, Helvetica, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>