<template>
  <main class="py-6">
    <article
      class="px-4 xs:mx-auto xs:max-w-sm xs:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
    >
      <header class="mx-auto text-center">
        <h1 class="font-serif text-4xl capitalize lg:text-3xl">
          Our beautiful Ideas
        </h1>
        <p class="mt-2 lg:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
          repellat.
        </p>
      </header>
      <div class="h-64 mt-6 grid-container md:mt-10 md:h-96">
        <div class="shadow-xl item-one">
          <NuxtImg
            src="/ideas/ideas-one.jpg"
            class="object-cover object-center w-full h-full rounded-sm"
            sizes="xs:50vw lg:640px"
            fit="cover"
          />
        </div>
        <div class="shadow-xl item-two">
          <NuxtImg
            src="/ideas/ideas-two.jpg"
            class="object-cover object-center w-full h-full rounded-sm"
            sizes="xs:50vw lg:640px"
            fit="cover"
          />
        </div>
        <div class="shadow-xl item-three">
          <NuxtImg
            src="/ideas/ideas-three.jpg"
            class="object-cover object-center w-full h-full rounded-sm"
            sizes="xs:50vw lg:640px"
            fit="cover"
          />
        </div>
      </div>
      <section class="mt-9">
        <header
          class="pl-3 text-sm border-l-4 border-app-blue-gray sm:w-3/4 md:max-w-md lg:border-l-0 lg:mx-auto lg:text-center"
        >
          <h1 class="font-serif text-xl md:text-3xl">
            Lorem ipsum dolor sit amet.
          </h1>
          <p class="mt-3 border-app-dark-gray md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            dolore animi? Asperiores sed beatae tempore blanditiis.
          </p>
        </header>

        <IdeasList class="mt-8" />
      </section>
    </article>
  </main>
</template>

<script>
export default {};
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
