<template>
  <main class="font-sans h-screen bg-app-white text-app-dark-gray">
    <app-home-hero />
    <article class="max-w-xs mx-auto mt-12">
      <p class="text-app-dark-gray font-sans text-lg leading-snug">
        In ganz Bosnien und Herzegowina gibt es Wälder, die an das
        Tolkins Nandor erinnern, in dem Waldelben leben. Waldelben
        spüren die Seele der Bäume sowie unser kleines Team von
        Holzzauberer. Nur so können wir die jenige beschreiben die
        Verantwortlich sind für die fantastische Kombination von Holz
        mit anderen Materialien und einen Sinn für Design besitzen,
        der unserem Zuhause Wärme und ein magisches Aussehen verleiht
      </p>
    </article>
    <article class="mt-24">
      <h2 class="uppercase text-3xl text-center py-6">#wood-elves</h2>
      <section class="px-3">
        <app-image class="mt-3 pb-full">
          <img
            class="absolute inset-0 w-full h-full object-cover object-center"
            src="/buddy.jpg"
            alt="image"
          />
        </app-image>
        <app-image class="mt-3 pb-full">
          <img
            class="absolute inset-0 w-full h-full object-cover object-center"
            src="/stol.jpeg"
            alt="image"
          />
        </app-image>
        <app-image class="mt-3 pb-full">
          <img
            class="absolute inset-0 w-full h-full object-cover object-center"
            src="/stol2.jpeg"
            alt="image"
          />
        </app-image>
      </section>
      <section
        class="mt-24 px-2 grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-16"
      >
        <figure>
          <app-image class="pb-2/3">
            <img
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="/buddy.jpg"
              alt="image"
          /></app-image>
          <figcaption>
            <p
              class="mt-4 uppercase text-base text-center font-semibold"
            >
              Home
            </p>
          </figcaption>
        </figure>
        <figure>
          <app-image class="pb-2/3">
            <img
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="/stol.jpeg"
              alt="image"
          /></app-image>
          <figcaption>
            <p
              class="mt-4 uppercase text-base text-center font-semibold"
            >
              Home
            </p>
          </figcaption>
        </figure>
        <figure>
          <app-image class="pb-2/3">
            <img
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="/stol.jpeg"
              alt="image"
          /></app-image>
          <figcaption>
            <p
              class="mt-4 uppercase text-base text-center font-semibold"
            >
              Home
            </p>
          </figcaption>
        </figure>
        <figure>
          <app-image class="pb-2/3">
            <img
              class="absolute inset-0 w-full h-full object-cover object-center"
              src="/buddy.jpg"
              alt="image"
          /></app-image>
          <figcaption>
            <p
              class="mt-4 uppercase text-base text-center font-semibold"
            >
              Home
            </p>
          </figcaption>
        </figure>
      </section>
    </article>
  </main>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
