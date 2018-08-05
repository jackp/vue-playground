<template>
  <div id="home">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Vue Playground</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p>Use the examples provided to learn some common patterns used when building Vue applications.</p>

        <p>Technologies used include:</p>
        <ul>
          <li>
            <a href="https://vuejs.org/v2/api/" target="__blank">VueJS (Framework)</a>
          </li>
          <li>
            <a href="https://vuex.vuejs.org/api/" target="__blank">Vuex (State Management)</a>
          </li>
          <li>
            <a href="https://router.vuejs.org/api/" target="__blank">Vue-router (Routing)</a>
          </li>
          <li>
            <a href="https://buefy.github.io/#/documentation/start" target="__blank">Buefy/Bulma (UI Framework)</a>
          </li>
        </ul>

        <p>Component structure follows
          <a href="http://atomicdesign.bradfrost.com/chapter-2/" target="__blank">Atomic Design Principles</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView"
};
</script>

<style scoped>
* + * {
  margin-top: 1em;
}

ul {
  list-style-type: disc;
  margin-left: 2em;
}
</style>

