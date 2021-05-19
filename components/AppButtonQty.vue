<template functional>
  <button
    :class="[
      data.class,
      data.staticClass,
      'flex items-center justify-center rounded-md focus:outline-none active:bg-white transition-colors duration-150 ease-out focus-visible:bg-app-dark-gray focus-visible:text-app-light-gray lg:hover:text-app-accent',
    ]"
    type="button"
  >
    <slot />
  </button>
</template>
