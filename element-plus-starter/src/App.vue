<template>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  components: {},
  setup() {
    const msg = ref(
      "Welcome to Element Plus, a Vue 3.0 based component library"
    );
    const startHacking = () => {
      msg.value = "Start coding with Element Plus with 💖";
    };
    return {
      msg,
      startHacking,
    };
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  height: 100%;
}
#app {
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100%;
}

div.body {
  height: 100%;
}
</style>
