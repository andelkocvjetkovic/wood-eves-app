<template functional>
  <section
    class="px-2 py-12 mt-24 xs:px-0 bg-app-light-gray text-app-dark-gray sm:mt-32 md:mt-36 lg:py-20"
    :class="[data.class, data.staticClass]"
  >
    <div
      class="relative max-w-xs mx-auto prose-sm prose xs:max-w-sm sm:max-w-lg sm:prose-lg lg:max-w-4xl lg:grid lg:grid-cols-2 lg:gap-x-8 xl:max-w-5xl xl:gap-x-14"
    >
      <header class="font-serif lg:col-start-1 lg:col-span-1">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h4 class="">
          Some two months before the murder of Sir Danvers, I had been out for
          one of my adventures, had returned at a late hour, and woke the next
          day in bed with somewhat odd sensations
        </h4>
        <p class="hidden lg:block">
          The pleasures which I made haste to seek in my disguise were, as I
          have said, undignified; I would scarce use a harder term. But in the
          hands of Edward Hyde, they soon began to turn toward the monstrous.
          When I would come back from these excursions, I was often plunged into
          a kind of wonder at my vicarious depravity. This familiar that I
          called out of my own soul, and sent forth alone to do his good
          pleasure, was a being inherently malign and villainous; his every act
          and thought centered on self; drinking pleasure with bestial avidity
          from any degree of torture to another; relentless like a man of stone.
          Henry Jekyll stood at times aghast before the acts of Edward Hyde; but
          the situation was apart from ordinary laws, and insidiously relaxed
          the grasp of conscience. It was Hyde, after all, and Hyde alone, that
          was guilty. Jekyll was no worse; he woke again to his good qualities
          seemingly unimpaired; he would even make haste, where it was possible,
          to undo the evil done by Hyde. And thus his conscience slumbered.
        </p>
      </header>
      <figure class="lg:col-start-2 lg:col-span-1">
        <div
          role="presentation"
          class="relative h-full overflow-hidden rounded pb-3/4 sm:pb-4/6 lg:pb-0 lg:absolute lg:w-1/2 lg:right-0 lg:top-0 lg:rounded-none"
        >
          <NuxtImg
            id="workImg"
            src="wood-work-2.jpg"
            class="absolute inset-0 object-cover object-center w-full h-full lg:my-0"
            alt="wood work"
            sizes="xs:90vw sm:60vw lg:50vw xl:80vw"
            fit="cover"
            loading="lazy"
          />
        </div>
        <figcaption class="lg:hidden">
          <p class="text-base">
            The pleasures which I made haste to seek in my disguise were, as I
            have said, undignified; I would scarce use a harder term. But in the
            hands of Edward Hyde, they soon began to turn toward the monstrous.
            When I would come back from these excursions, I was often plunged
            into a kind of wonder at my vicarious depravity. This familiar that
            I called out of my own soul, and sent forth alone to do his good
            pleasure, was a being inherently malign and villainous; his every
            act and thought centered on self; drinking pleasure with bestial
            avidity from any degree of torture to another; relentless like a man
            of stone. Henry Jekyll stood at times aghast before the acts of
            Edward Hyde; but the situation was apart from ordinary laws, and
            insidiously relaxed the grasp of conscience. It was Hyde, after all,
            and Hyde alone, that was guilty. Jekyll was no worse; he woke again
            to his good qualities seemingly unimpaired; he would even make
            haste, where it was possible, to undo the evil done by Hyde. And
            thus his conscience slumbered.
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
