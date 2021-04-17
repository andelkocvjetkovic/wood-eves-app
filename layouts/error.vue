<template>
  <main>
    <h1>{{ error.statusCode }}</h1>
    <h2>{{ error.message }}</h2>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
