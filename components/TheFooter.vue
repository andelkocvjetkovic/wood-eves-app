<template>
  <footer class="pb-12 bg-app-dark-gray text-app-white">
    <div class="bg-app-blue-gray">
      <SocialIcons
        class="max-w-xs py-4 mx-auto text-app-light-gray md:max-w-md lg:max-w-lg"
      />
    </div>
    <!-- Information about company -->
    <section
      class="px-4 mt-16 xs:mx-auto xs:max-w-sm sm:max-w-lg md:grid md:gap-x-8 lg:gap-x-12 md:grid-cols-2 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
    >
      <article class="md:space-y-4">
        <h3 class="text-2xl font-semibold xl:text-3xl">You'll find us here:</h3>
        <div class="flex flex-col justify-between mt-6 md:mt-0 xl:text-lg">
          <address class="">7481 Delaware Street Irwin, PA 15642</address>
          <p class="flex justify-between mt-4">
            <span>Give us a call: </span>
            <a class="underline" href="tel:+40 000 00000000">
              +40 000 00000000
            </a>
          </p>
          <p class="flex justify-between mt-4">
            <span>Email: </span
            ><a href="mailto:and3lko@gmail.com">and3lko@gmail.com</a>
          </p>
        </div>
      </article>
      <article class="mt-16 md:mt-0 md:space-y-4">
        <h3 class="text-2xl font-semibold xl:text-3xl">Opening hours:</h3>
        <div class="mt-6 xl:text-lg md:mt-0">
          <p class="flex justify-between">
            <span>Mo - Fr</span><span>9:00am - 5:00pm</span>
          </p>
          <p class="flex justify-between mt-4">
            <span>Sa - So</span><span>Closed</span>
          </p>
        </div>
      </article>
    </section>
  </footer>
</template>
