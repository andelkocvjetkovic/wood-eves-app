<template>
  <div>
    <header>
      <h1 class="py-2 text-base text-center">{{ item.title }}</h1>
    </header>
    <div
      class="grid grid-cols-2 grid-rows-2 mt-2 gap-x-2 h-80 xs:h-96 xs:gap-x-4 sm:gap-x-1"
    >
      <div class="col-span-1 col-start-1 row-span-2 row-start-1 px-2">
        <nuxt-img
          :src="item.coverImg"
          class="object-cover object-center w-full h-full rounded"
          sizes="xs:320px lg:640px"
        />
      </div>
      <div
        class="flex flex-col justify-around col-start-2 row-span-2 row-start-1 px-4"
      >
        <nuxt-link
          v-for="it in item.items"
          :key="it.slug"
          :to="it.slug"
          class="block p-1 xs:p-4 sm:p-0 lg:p-5"
        >
          <nuxt-img
            :src="it.img"
            class="object-cover object-center w-full h-full mt-px rounded"
            sizes="xs:320px lg:640px"
            :alt="it.name"
          />
          <p class="font-serif text-xs text-center">{{ it.name }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
