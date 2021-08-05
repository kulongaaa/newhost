<template>
  <div id="app">
    <index v-if="$route.name!=='login'&&$route.name!=='register'"/>
    <router-view></router-view>
  </div>
</template>

<script>
import index from './components/index/index.vue'

export default {
  name: 'App',
  components: {
  index,
  },
  methods:{
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
}
a{
text-decoration: none;
color: white;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
   background:#ece9e9;
  color: #000000;
   height:100%;
  overflow: auto;
}
</style>

