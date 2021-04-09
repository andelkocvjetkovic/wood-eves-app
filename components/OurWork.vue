<template functional>
  <section class="px-2 xs:px-0 bg-app-light-gray text-app-dark-gray">
    <div
      class="relative max-w-xs mx-auto prose-sm prose xs:max-w-sm sm:max-w-lg sm:prose-lg lg:max-w-4xl lg:grid lg:grid-cols-2 lg:gap-x-8 xl:max-w-5xl xl:gap-x-14"
    >
      <header class="font-serif lg:col-start-1 lg:col-span-1">
        <h1>Hat gespielt oder gespielt Basler.</h1>
        <h4 class="">
          Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
          Konsonantien leben die Blindtexte.
        </h4>
        <p class="hidden lg:block">
          Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich
          den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich bin
          allein und freue mich meines Lebens in dieser Gegend, die für solche
          Seelen geschaffen ist wie die meine. Ich bin so glücklich, mein
          Bester, so ganz in dem Gefühle von ruhigem Dasein versunken, daß meine
          Kunst darunter leidet. Ich könnte jetzt nicht zeichnen, nicht einen
          Strich, und bin nie ein größerer Maler gewesen als in diesen
          Augenblicken. Wenn das liebe Tal um mich dampft, und die hohe Sonne an
          der Oberfläche der undurchdringlichen Finsternis meines Waldes ruht,
          und nur einzelne Strahlen sich in das innere Heiligtum stehle.
        </p>
      </header>
      <figure class="lg:col-start-2 lg:col-span-1">
        <div
          role="presentation"
          class="relative h-full overflow-hidden rounded pb-3/4 sm:pb-4/6 lg:pb-0 lg:absolute lg:w-1/2 lg:right-0 lg:top-0 lg:rounded-none"
        >
          <nuxt-img
            id="workImg"
            src="wood-work-2.jpg"
            class="absolute inset-0 object-cover object-center w-full h-full lg:my-0"
            alt="wood work"
            sizes="xs:320px sm:640px lg:1280px"
            quality="80"
            fit="cover"
          />
        </div>
        <figcaption class="lg:hidden">
          <p class="text-base">
            Eine wunderbare Heiterkeit hat meine ganze Seele eingenommen, gleich
            den süßen Frühlingsmorgen, die ich mit ganzem Herzen genieße. Ich
            bin allein und freue mich meines Lebens in dieser Gegend, die für
            solche Seelen geschaffen ist wie die meine. Ich bin so glücklich,
            mein Bester, so ganz in dem Gefühle von ruhigem Dasein versunken,
            daß meine Kunst darunter leidet. Ich könnte jetzt nicht zeichnen,
            nicht einen Strich, und bin nie ein größerer Maler gewesen als in
            diesen Augenblicken. Wenn das liebe Tal um mich dampft, und die hohe
            Sonne an der Oberfläche der undurchdringlichen Finsternis meines
            Waldes ruht, und nur einzelne Strahlen sich in das innere Heiligtum
            stehle.
          </p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
#workImg {
  @apply lg:my-0  !important;
}
</style>
