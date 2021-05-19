<template functional>
  <section :class="[data.class, data.staticClass]" class="py-px">
    <div
      class="relative mx-auto mt-12 prose-sm prose lg:prose-lg md:grid md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:gap-x-14 xs:mx-auto xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
    >
      <header class="font-serif lg:col-start-1 lg:col-span-1">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h3>
          Some two months before the murder of Sir Danvers, I had been out for
          one of my adventures, had returned at a late hour, and woke the next
          day in bed with somewhat odd sensations
        </h3>
        <p class="hidden md:block">
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
      <figure
        class="px-2 overflow-hidden lg:col-start-2 lg:col-span-1 unsetMargin"
      >
        <div
          role="presentation"
          class="relative h-full overflow-hidden rounded-sm pb-3/4 sm:pb-4/6 md:pb-0 md:w-full md:right-0 md:top-0 md:rounded-none"
        >
          <NuxtImg
            src="wood-work-2.jpg"
            class="absolute inset-0 object-cover object-center w-full h-full unsetMargin"
            alt="wood work"
            sizes="xs:90vw sm:60vw md:100vw"
            fit="cover"
            loading="lazy"
          />
        </div>
        <figcaption class="md:hidden">
          <p class="text-base text-app-dark-gray">
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
            and Hyde alone, that was guilty.
          </p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
::v-deep .unsetMargin {
  @apply md:mt-0 !important;
}
</style>
