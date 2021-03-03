<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <h1
      class="px-1 font-serif mt-12 text-center text-3xl text-app-white font-semibold"
    >
      <q>Tawar faer</q><br />Die Seele des Holzes Mehr als nur Möbel
      ...
    </h1>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.masthead {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 70vh; /* if you don't want it to take up the full screen,
reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 26%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url("/home-bg-2.jpg") no-repeat center center scroll;
}
h1 {
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
}
</style>
