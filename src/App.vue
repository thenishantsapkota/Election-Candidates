<template>
  <div id="app">
    <Candidates />
  </div>
</template>

<script>
import Candidates from "./components/Candidates.vue";

export default {
  name: "app",
  components: {
    Candidates,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
