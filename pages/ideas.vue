<template>
  <main class="pb-16">
    <header class="max-w-xs mx-auto mt-6 text-center lg:mt-12">
      <h1 class="font-serif text-2xl capitalize lg:text-3xl">
        Our beautiful Ideas
      </h1>
      <p class="mt-1 lg:text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
        repellat.
      </p>
    </header>
    <div
      class="h-64 max-w-xs mx-auto mt-6 grid-container xs:max-w-md md:max-w-lg md:mt-10 lg:max-w-3xl lg:h-96"
    >
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
    <article
      class="max-w-xs mx-auto mt-9 xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
    >
      <header
        class="pl-3 mt-3 text-sm border-l-4 border-app-blue-gray sm:w-1/2 sm:mx-auto"
      >
        <h1 class="font-serif text-xl md:text-3xl">
          Lorem ipsum dolor sit amet.
        </h1>
        <p class="mt-3 border-app-dark-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          dolore animi? Asperiores sed beatae tempore blanditiis.
        </p>
      </header>

      <IdeasList class="mt-8" />
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
