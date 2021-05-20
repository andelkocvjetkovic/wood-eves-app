<template functional>
  <button
    :class="[
      data.class,
      data.staticClass,
      'px-8 py-2 text-lg font-semibold rounded shadow text-app-white bg-app-accent',
    ]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot>Send</slot>
  </button>
</template>
