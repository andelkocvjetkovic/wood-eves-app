<template>
  <div ref="wrapper" class="flex justify-between w-full px-6">
    <p class="w-3 h-3 rounded-full bg-app-accent"></p>
    <p class="w-3 h-3 rounded-full bg-app-accent"></p>
    <p class="w-3 h-3 rounded-full bg-app-accent"></p>
    <p class="w-3 h-3 rounded-full bg-app-accent"></p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$gsap.fromTo(
        this.$refs.wrapper.children,
        {
          scale: 0.3,
        },
        {
          scale: 1.1,
          stagger: {
            amount: 0.2,
            from: "start",
            ease: "back.out(1.7)",
          },
          repeat: -1,
          yoyo: true,
        }
      );
    });
  },
};
</script>

<style></style>
