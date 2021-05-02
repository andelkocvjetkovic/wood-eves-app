<script>
export default {
  functional: true,
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  render: (h, { data, props, listeners }) => {
    return h("input", {
      class:
        "w-full p-1 border-b focus:outline-none border-app-dark-gray focus:border-app-accent",
      domProps: {
        value: props.value,
      },
      attrs: {
        ...data.attrs,
      },
      on: {
        input: (e) => {
          var onItemChange = listeners["item-change"];
          if (onItemChange) onItemChange(e.target.value);
        },
      },
    });
  },
};
</script>

<!-- <template functional>
  <input
    v-bind="data.attrs"
    :class="[
      data.class,
      data.staticClass,
      'p-1 border-b focus:outline-none border-app-dark-gray focus:border-app-accent',
    ]"
    @input="(e) => listeners['item-change'](e.target.value)"
  />
</template> -->
