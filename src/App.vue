<template>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
import Home from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
body{
  color: #f8f8f2;
  background-color: #282a36;
}
</style>
