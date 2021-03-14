<template>
  <section class="sm:flex sm:flex-wrap">
    <div
      v-for="(item, i) in $options.itemsIdeas"
      :key="i"
      class="mt-6 sm:flex-basis-50 sm:px-2 md:px-3"
    >
      <header>
        <h1 class="py-2 text-base text-center">{{ item.title }}</h1>
      </header>
      <div class="grid grid-cols-2 grid-rows-2 py-3 mt-2 gap-x-2 bg-app-white">
        <div class="col-span-1 col-start-1 row-span-2 row-start-1 md:px-1">
          <nuxt-img
            :src="item.coverImg"
            class="object-cover object-center w-full h-full rounded"
            sizes="xs:320px lg:640px"
          />
        </div>
        <div class="col-start-2 row-span-2 row-start-1">
          <nuxt-link
            v-for="it in item.items"
            :key="it.slug"
            :to="it.slug"
            class="block p-4"
          >
            <nuxt-img
              :src="it.img"
              class="object-cover object-center w-full h-full mt-px rounded shadow"
              sizes="xs:320px lg:640px"
              :alt="it.name"
            />
            <p class="mt-px font-serif text-xs text-center">{{ it.name }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  itemsIdeas: [
    {
      title: "Living Room",
      coverImg: "/ideas/ideas-3.jpg",
      items: [
        {
          name: "Bernard Stuhle",
          img: "/articles/tango-stol-1.jpg",
          slug: "/shop/tango",
        },
      ],
    },
    {
      title: "Dining Room",
      coverImg: "/ideas/ides-first-1.jpg",
      items: [
        {
          name: "Bernard Stuhle",
          img: "/articles/bernard-stolica-smeda-1.jpg",
          slug: "/shop/stuhle/bernard-burn",
        },
      ],
    },
    {
      title: "Living Room",
      coverImg: "/ideas/ideas-4.jpg",
      items: [
        {
          name: "The Soul",
          img: "/articles/the-soul-stol-1.jpg",
          slug: "/shop/the-soul",
        },
      ],
    },
    {
      title: "Kitchen",
      coverImg: "/ideas/ideas-2.jpg",
      items: [
        {
          name: "The Couple",
          img: "/articles/couple-daska-1.jpg",
          slug: "/shop/the-couple",
        },
        {
          name: "The Don",
          img: "/articles/don-daska-1.jpg",
          slug: "/shop/the-don",
        },
      ],
    },
  ],
};
</script>

<style></style>
