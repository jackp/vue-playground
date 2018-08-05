<template>
  <div id="app">
    <main-navigation />
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import MainNavigation from "@/components/organisms/MainNavigation.vue";

export default {
  name: "App",
  components: {
    MainNavigation
  }
};
</script>


<style global>
@import "./styles/global.css";
</style>

<style scoped>
#app {
  height: 100%;
  display: flex;
}

main {
  flex: 1;
}
</style>
