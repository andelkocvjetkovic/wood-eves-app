<template>
  <section class="pt-6 pb-12 bg-app-dark-gray">
    <section class="max-w-xs mx-auto xs:max-w-sm text-app-white md:max-w-2xl">
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
      <form class="flex flex-col items-center" @submit.prevent="submitForm">
        <AppFormField
          id="Name"
          v-model="form.name"
          label="Name"
          required
          placeholder="Name *"
          type="text"
          name="Name"
        />
        <AppFormField
          id="EmailAddress"
          v-model="form.email"
          label="EmailAddress"
          required
          placeholder="E-mail addresse *"
          type="email"
          name="EmailAddress"
        />
        <AppFormField
          id="phoneNumber"
          v-model="form.phone"
          label="phoneNumber"
          required
          placeholder="Phone number"
          type="text"
          name="phoneNumber"
        />
        <div class="flex flex-col w-full mt-8">
          <label class="sr-only" for="message">Nachricht</label>
          <textarea
            id="message"
            v-model.lazy="form.message"
            class="p-1 mt-4 placeholder-black bg-app-white text-app-dark-gray focus:placeholder-transparent"
            name="message"
            cols="30"
            rows="5"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <app-button-accent
          type="submit"
          class="w-full mt-12 shadow-2xl md:w-1/2"
        />
      </form>
    </section>
  </section>
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
      console.log("TODO Implement submit form :)");
    },
  },
};
</script>
