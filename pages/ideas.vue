<template>
  <main class="pb-12">
    <article
      v-for="item in items"
      :key="item.uuid"
      class="max-w-xs mx-auto mt-12"
    >
      <section>
        <h1 class="font-serif text-xl text-center">{{ item.title }}</h1>
        <figure>
          <img :src="item.image" :alt="item.title" class="w-full h-32" />
          <figcaption>
            <p>{{ item.description }}</p>
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
