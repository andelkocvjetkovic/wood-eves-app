<script>
export default {
  functional: true,
  render: (h, { slots }) => {
    return h(
      "p",
      {
        staticClass: "flex flex-col mt-6",
      },
      slots().default
    );
  },
};
</script>
<!-- <template functional>
  <p class="flex flex-col mt-6">
    <slot />
  </p>
</template> -->
