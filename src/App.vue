<template>
  <div id="app">
    <router-view/>
    <router-link to="/myMessage/mesHost"></router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
