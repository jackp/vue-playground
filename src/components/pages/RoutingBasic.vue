<template>
  <section class="section">
    <example title="Using Relative Path">
      <router-link to="/">Home</router-link>
    </example>
    <example title="Using Path Name">
      <router-link :to="{name: 'home'}">Home</router-link>
    </example>
    <example title="Using non-click events (hover over link)">
      <router-link to="/" event="mouseover">Home</router-link>
    </example>
  </section>
</template>

<script>
import Example from "../organisms/Example.vue";

export default {
  name: "RoutingBasicView",
  components: {
    Example
  }
};
</script>

<style>
</style>
