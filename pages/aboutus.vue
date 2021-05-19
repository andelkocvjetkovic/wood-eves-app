<template functional>
  <main class="py-6" :class="[data.class, data.staticClass]">
    <article
      class="px-4 prose-sm prose xs:mx-auto xs:max-w-sm xs:px-0 sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
    >
      <article class="">
        <header class="text-center">
          <h1 class="font-serif">Lorem ipsum dolor sit amet?</h1>
          <h3>
            Small indeed was my appetite. This inexplicable incident, this
            reversal of my previous experience, seemed, like the Babylonian
            finger on the wall, to be spelling out the letters of my judgment;
            and I began to reflect more seriously than ever before on the issues
            and possibilities of my double existence.
          </h3>
        </header>
        <figure>
          <NuxtImg
            class="object-cover object-top w-full rounded-sm shadow-md h-screen/75vh"
            src="jony-deep.jpg"
            alt="Bony Been"
            sizes="xs:90vw sm:90vw md:90vw lg:90vw xl:90vw"
          />
          <p class="sr-only">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            rerum ratione distinctio beatae ipsam magnam similique quod
            molestiae rem provident.
          </p>
        </figure>
      </article>
      <hr />
      <article class="md:grid md:grid-cols-3 md:gap-x-8">
        <section>
          <h2 class="font-serif text-2xl">Our mission</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            laboriosam corporis laudantium nisi, praesentium illo eius, culpa
            magnam quibusdam accusantium similique debitis harum. Libero
            voluptatem hic voluptate dolores modi inventore?
          </p>
        </section>
        <section>
          <h2 class="font-serif text-2xl">Our product</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            laboriosam corporis laudantium nisi, praesentium illo eius, culpa
            magnam quibusdam accusantium similique debitis harum. Libero
            voluptatem hic voluptate dolores modi inventore?
          </p>
        </section>
        <section>
          <h2 class="font-serif text-2xl">How to buy our products</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            laboriosam corporis laudantium nisi, praesentium illo eius, culpa
            magnam quibusdam accusantium similique debitis harum. Libero
            voluptatem hic voluptate dolores modi inventore?
          </p>
        </section>
      </article>
    </article>
  </main>
</template>
