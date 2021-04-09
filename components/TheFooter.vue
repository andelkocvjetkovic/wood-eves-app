<template>
  <footer class="pb-12 bg-app-dark-gray text-app-white">
    <article class="bg-app-blue-gray">
      <SocialIcons
        class="max-w-xs py-4 mx-auto text-app-light-gray md:max-w-md lg:max-w-lg"
      />
    </article>
    <!-- Information about company -->
    <article
      class="max-w-xs mx-auto mt-16 xs:max-w-sm sm:max-w-lg md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
    >
      <div class="md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-16 xl:gap-x-1/5">
        <h3 class="text-2xl font-semibold lg:text-3xl">Hier finden Sie uns:</h3>
        <address class="flex flex-col justify-between mt-6 lg:text-lg">
          <p class="">Reifeisenstr. 36, 60386 Frankfurt, Germany</p>
          <p class="flex justify-between mt-4">
            <span>Rufen Sie uns an: </span>
            <a class="underline" href="tel:+49 000 00000000">
              +49 000 00000000
            </a>
          </p>
          <p class="flex justify-between mt-4">
            <span>Email: </span
            ><a href="mailto:and3lko@gmail.com">and3lko@gmail.com</a>
          </p>
        </address>
      </div>
      <div class="order-first mt-16 md:mt-0">
        <h3 class="text-2xl font-semibold lg:text-3xl">Öffnungszeiten:</h3>
        <div class="mt-6 lg:text-lg">
          <p class="flex justify-between">
            <span>Mo - Fr</span><span>9:00am - 5:00pm</span>
          </p>
          <p class="flex justify-between mt-4">
            <span>Sa - So</span><span>Geschlossen</span>
          </p>
        </div>
      </div>
    </article>
  </footer>
</template>
