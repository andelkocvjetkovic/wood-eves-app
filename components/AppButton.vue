<template functional>
  <button
    :class="[
      data.class,
      data.staticClass,
      'p-3 text-center text-white transition-colors duration-200 ease-out rounded-sm shadow-sm bg-app-blue-gray focus:outline-none lg:hover:bg-app-dark-gray active:bg-opacity-50 lg:active:bg-opacity-50',
    ]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot />
  </button>
</template>
