<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app,html,body {
  height: 100%;
  width:100%;
  
}
*{
	margin: 0;
	padding: 0;
}
</style>
