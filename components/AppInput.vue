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
        "w-full p-1 text-sm transition-colors duration-150 ease-out bg-transparent border-b-2 focus:outline-none border-app-dark-gray focus:border-app-accent md:text-base",
      domProps: {
        value: props.value,
      },
      attrs: {
        ...data.attrs,
      },
      on: {
        input: (e) => {
          var onItemChange = listeners.input;
          if (onItemChange) onItemChange(e.target.value);
        },
      },
    });
  },
};
</script>

<!--<template functional>
  <input
    v-bind="data.attrs"
    :class="[
      data.class,
      data.staticClass,
      'w-full p-1 transition-colors duration-150 ease-out bg-transparent border-b-2 focus:outline-none border-app-dark-gray focus:border-app-accent',
    ]"
    @input="(e) => listeners['input'](e.target.value)"
  />
</template>
-->
