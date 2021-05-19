<template>
  <main class="py-6">
    <section
      class="px-4 xs:px-0 xs:mx-auto xs:max-w-sm sm:max-w-xl md:max-w-2xl"
    >
      <header>
        <h1 class="font-serif text-3xl text-center lg:text-4xl">
          Lorem, ipsum dolor.
        </h1>
        <p class="mt-6 text-center lg:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          cupiditate vero, accusantium dolorem dicta hic, numquam doloremque
          optio saepe nesciunt ipsam vel quae impedit exercitationem?
        </p>
      </header>
      <form class="mt-8" @submit.prevent="submitForm">
        <AppInputWrapper lab-for="first-name">
          <AppInput
            id="first-name"
            v-model="form.name"
            required
            type="text"
            name="first-name"
            autocomplete="given-name"
          />
        </AppInputWrapper>
        <AppInputWrapper lab-for="email-address">
          <AppInput
            id="email-address"
            v-model="form.email"
            required
            type="email"
            name="mail"
            autocomplete="email"
          />
        </AppInputWrapper>
        <AppInputWrapper lab-for="phone-number">
          <AppInput
            id="phone-number"
            v-model="form.phone"
            required
            type="text"
            name="phone-number"
          />
        </AppInputWrapper>
        <div class="flex flex-col w-full mt-8">
          <label class="text-sm md:text-base" for="message"
            >Your Message:
          </label>
          <textarea
            id="message"
            v-model.lazy="form.message"
            class="p-1 mt-2 transition-colors duration-100 border-2 border-solid resize-none md:text-base bg-app-white focus:outline-none focus:border-app-accent border-app-dark-gray text-app-dark-gray"
            name="message"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <AppButton
          type="submit"
          class="block w-full mt-12 shadow-2xl sm:w-1/2 sm:mx-auto"
          >Send</AppButton
        >
      </form>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // TODO handle from submit
    },
  },
};
</script>
