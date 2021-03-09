<template>
  <footer class="pb-12 bg-app-dark-gray text-app-white md:pt-6">
    <section class="bg-app-blue-gray">
      <app-social-icons
        class="max-w-xs py-4 mx-auto md:hidden text-app-light-gray"
      />
    </section>
    <div
      class="max-w-xs mx-auto mt-16 xs:max-w-sm sm:max-w-lg md:max-w-3xl md:px-3 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-x-6 lg:max-w-4xl lg:gap-x-8 xl:max-w-6xl xl:gap-x-10"
    >
      <app-contat-us
        class="md:col-span-1 md:px-4 md:row-start-1 md:row-end-1 md:row-span-1 md:col-start-2 md:col-end-2"
      />
      <hr class="mt-24 md:hidden" />
      <app-social-icons
        class="hidden md:flex md:bg-app-dark-gray md:col-span-1 md:row-span-1 md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-1"
      />
      <app-our-info
        class="mt-24 md:col-span-1 md:row-span-1 md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-1"
      />
    </div>
  </footer>
</template>
