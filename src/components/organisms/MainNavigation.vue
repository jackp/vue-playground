<template>
  <nav class="menu">
    <ul class="menu-list">
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
    <p class="menu-label">Examples</p>
    <ul class="menu-list">
      <li>
        <router-link to="/routing">Routing</router-link>
        <ul>
          <li>
            <router-link to="/routing">Basic Linking</router-link>
          </li>
          <li>
            <a>Authentication Flow</a>
          </li>
          <li>
            <a>Dynamic Links</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNavigation"
};
</script>

<style scoped>
nav {
  width: 15rem;
  padding: 1rem;
}
</style>
