<template>
  <main class="pb-16">
    <header class="max-w-xs mx-auto mt-4 text-center lg:mt-12">
      <h1 class="font-serif text-2xl lg:text-3xl">Ideas</h1>
      <p class="lg:text-lg">
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
          sizes="xs:320px lg:640px"
          fit="cover"
        />
      </div>
      <div class="shadow-xl item-two">
        <NuxtImg
          src="/ideas/ideas-two.jpg"
          class="object-cover object-center w-full h-full rounded-sm"
          sizes="xs:320px lg:640px"
          fit="cover"
        />
      </div>
      <div class="shadow-xl item-three">
        <NuxtImg
          src="/ideas/ideas-three.jpg"
          class="object-cover object-center w-full h-full rounded-sm"
          sizes="xs:320px lg:640px"
          fit="cover"
        />
      </div>
    </div>
    <article class="mt-8">
      <header>
        <h1 class="font-serif text-xl text-center md:text-2xl">
          Lorem ipsum dolor sit amet.
        </h1>
      </header>

      <IdeasList
        class="max-w-xs mx-auto mt-6 xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
      />
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
