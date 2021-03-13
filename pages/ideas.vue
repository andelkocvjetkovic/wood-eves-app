<template>
  <main class="pb-16">
    <header class="max-w-xs mx-auto mt-4 text-center">
      <h1 class="font-serif text-2xl">Ideas</h1>
      <p class="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
        repellat.
      </p>
    </header>
    <div class="h-64 max-w-xs mx-auto mt-6 grid-container xs:max-w-md">
      <div class="shadow-xl item-one">
        <nuxt-img
          src="/ideas/ideas-one.jpg"
          class="object-cover object-center w-full h-full rounded-sm"
          sizes="xs:320px"
          fit="cover"
        />
      </div>
      <div class="shadow-xl item-two">
        <nuxt-img
          src="/ideas/ideas-two.jpg"
          class="object-cover object-center w-full h-full rounded-sm"
          sizes="xs:320px"
          fit="cover"
        />
      </div>
      <div class="shadow-xl item-three">
        <nuxt-img
          src="/ideas/ideas-three.jpg"
          class="object-cover object-center w-full h-full rounded-sm"
          sizes="xs:320px"
          fit="cover"
        />
      </div>
    </div>
    <article class="mt-8">
      <header>
        <h1 class="font-serif text-xl text-center">
          Lorem ipsum dolor sit amet.
        </h1>
      </header>
      <section
        class="max-w-xs mx-auto mt-6 xs:max-w-md sm:max-w-none sm:w-full sm:mx-0 sm:flex sm:flex-wrap sm:px-4 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:px-0"
      >
        <app-ideas-list
          v-for="(item, i) in $options.itemsIdeas"
          :key="i"
          :item="item"
          class="flex-grow py-3 bg-app-white sm:flex-basis-33 sm:px-2 sm:ml-5 lg:ml-8"
          :class="[i != 0 ? (i > 1 ? 'mt-5 lg:mt-8' : 'mt-4 sm:mt-0') : '']"
        />
      </section>
    </article>
  </main>
</template>

<script>
export default {
  itemsIdeas: [
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
  ],
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 8px 8px;
}
.item-one {
  grid-area: 2 / 1 / 4 / 3;
}
.item-two {
  grid-area: 2 / 3 / 4 / 5;
}
.item-three {
  grid-area: 1 / 2 / 3 / 4;
}
</style>
