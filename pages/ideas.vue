<template>
  <main class="pb-16">
    <article
      v-for="item in items"
      :key="item.uuid"
      class="max-w-xs mx-auto mt-16"
    >
      <section class="flex flex-col items-stretch justify-start space-y-6">
        <h1 class="font-serif text-3xl text-center">{{ item.title }}</h1>
        <figure>
          <div
            class="relative overflow-hidden rounded shadow pb-full"
            role="presentation"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="absolute inset-0 flex object-cover object-center w-full h-full"
            />
          </div>
          <figcaption class="mt-6">
            <p class="prose-sm prose">{{ item.description }}</p>
          </figcaption>
        </figure>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const items = await $content("ideas").fetch();

    return {
      items,
    };
  },
};
</script>

<style></style>
