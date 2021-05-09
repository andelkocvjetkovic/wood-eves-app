<template>
  <section
    class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8"
  >
    <div
      v-for="(item, i) in $options.ideasList"
      :key="i"
      class="flex flex-col min-h-full rounded shadow-sm"
    >
      <header>
        <h1 class="py-2 text-lg font-semibold text-center md:text-xl">
          {{ item.title }}
        </h1>
      </header>
      <div
        class="grid flex-grow grid-cols-2 grid-rows-2 p-1 mt-2 gap-x-1 sm:p-2 bg-app-white"
      >
        <div class="col-span-1 col-start-1 row-span-2 row-start-1 md:px-1">
          <NuxtImg
            :src="item.coverImg"
            class="object-cover object-center w-full h-full rounded"
            sizes="xs:50vw sm:40vw lg:30vw"
          />
        </div>
        <div class="col-start-2 row-span-2 row-start-1">
          <NuxtLink
            v-for="it in item.items"
            :key="it.name"
            :to="it.slug"
            class="block p-4"
          >
            <NuxtImg
              :src="it.img"
              class="object-cover object-center w-full h-full mt-px rounded shadow"
              sizes="xs:40vw sm:40vw lg:30vw"
              :alt="it.name"
            />
            <p class="mt-2 font-serif text-xs text-center">
              {{ it.name }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  ideasList: [
    {
      title: "Cutting Board",
      coverImg: "/ideas/ideas-cutting-1.jpg",
      items: [
        {
          name: "Shyina",
          img: "/articles/shyina/shalna_1_bg_white.jpg",
          slug: "/shop/cutting-boards/shyina",
        },
      ],
    },
    {
      title: "Dinning room",
      coverImg: "/ideas/ides-first-1.jpg",
      items: [
        {
          name: "Bernard Chair",
          img: "/articles/bernard/bernard_walnus_1.jpg",
          slug: "/shop/chair/bernard",
        },
      ],
    },
    {
      title: "Dinning room",
      coverImg: "/ideas/ideas-4.jpg",
      items: [
        {
          name: "Judy chair",
          img: "/articles/judy/judy_walnus_1.jpg",
          slug: "/shop/chair/judy",
        },
      ],
    },
    {
      title: "Cutting Boards",
      coverImg: "/ideas/ideas-2.jpg",
      items: [
        {
          name: "Melronna",
          img: "/articles/melronna/melronna_white_bg.jpg",
          slug: "/shop/cutting-boards/melronna",
        },
      ],
    },
  ],
};
</script>
