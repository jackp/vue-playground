<template>
  <article class="card">
    <header class="card-header">
      <p class="card-header-title">{{title}}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <slot />
      </div>
    </div>
  </article>

</template>

<script>
export default {
  name: "Example",
  props: {
    title: String
  }
};
</script>

<style>
</style>
