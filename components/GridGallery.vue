<template functional>
  <div class="mt-12 grid-container" :class="[data.class, data.staticClass]">
    <div class="flex items-center justify-center item-text">
      <h1
        class="text-4xl font-semibold text-center uppercase text-app-accent lg:text-6xl"
        style="text-orientation: mixed; writing-mode: vertical-rl"
      >
        Wood - Elf
      </h1>
    </div>
    <div class="item-slika-1">
      <NuxtImg
        src="https://images.unsplash.com/photo-1546962339-5ff89552b8ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="item-slika-2">
      <NuxtImg
        src="/articles/jinx-barska-stolica-1.jpg"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="item-slika3">
      <NuxtImg
        src="https://images.unsplash.com/photo-1554286210-86b4daa0471a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="item-slika-4">
      <NuxtImg
        src="https://images.unsplash.com/photo-1546962339-5ff89552b8ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="item-slika-5">
      <NuxtImg
        src="https://images.unsplash.com/photo-1554286210-86b4daa0471a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="item-slika-6">
      <NuxtImg
        src="https://images.unsplash.com/photo-1546962339-5ff89552b8ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="item-slika-7">
      <NuxtImg
        src="/articles/pegas-stolica-1.jpg"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="item-slika-8">
      <NuxtImg
        src="/articles/long-daska-1.jpg"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="item-slika-9">
      <NuxtImg
        src="/articles/leaf-stol-1.jpg"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="item-slika-10">
      <NuxtImg
        src="/articles/way-stol-1.jpg"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="item-slika-11">
      <NuxtImg
        src="/articles/the-blue-sat-1.jpg"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <div class="item-slika-12">
      <NuxtImg
        src="/articles/don-daska-1.jpg"
        sizes="md:640px lg:720px"
        class="object-cover object-center w-full h-full"
      />
    </div>
  </div>
</template>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    "item-slika-5 item-slika-6 item-slika-7 item-slika-8 item-slika-9 item-slika-9"
    "item-slika-5 item-slika-6 item-slika-7 item-slika-8 item-slika-9 item-slika-9"
    "item-slika-5 item-slika-10 item-slika-10 item-slika-11 item-slika-11 item-slika-12"
    "item-text item-slika-10 item-slika-10 item-slika-11 item-slika-11 item-slika-4"
    "item-text item-slika-1 item-slika-2 item-slika-2 item-slika3 item-slika-4"
    "item-text item-slika-1 item-slika-2 item-slika-2 item-slika3 item-slika-4";
}
.item-text {
  grid-area: item-text;
}
.item-slika-1 {
  grid-area: item-slika-1;
}
.item-slika-2 {
  grid-area: item-slika-2;
}
.item-slika3 {
  grid-area: item-slika3;
}
.item-slika-4 {
  grid-area: item-slika-4;
}
.item-slika-5 {
  grid-area: item-slika-5;
}
.item-slika-6 {
  grid-area: item-slika-6;
}
.item-slika-7 {
  grid-area: item-slika-7;
}
.item-slika-8 {
  grid-area: item-slika-8;
}
.item-slika-9 {
  grid-area: item-slika-9;
}
.item-slika-10 {
  grid-area: item-slika-10;
}
.item-slika-11 {
  grid-area: item-slika-11;
}
.item-slika-12 {
  grid-area: item-slika-12;
}
</style>
