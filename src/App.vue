<template>
  <div id="app">
     <img src="./assets/logo.png">
     <ul>
       <li><router-link to="/" exact>Home</router-link></li>
       <li><router-link to="/topics">Topics</router-link></li>
       <li><router-link to="/counter" target="_blank">Counter</router-link></li>
       <li><router-link to="/about">About</router-link></li>
     </ul>
     <router-view class="view"></router-view>
  </div>
</template>


<style lang="scss">
  body {
    font-family: Helvetica, sans-serif;
  }
  .router-link-active{
    color: $black;
  }
</style>
