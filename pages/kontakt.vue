<template>
  <section class="pb-32 pt-14 bg-app-dark-gray">
    <section class="max-w-xs mx-auto xs:max-w-sm text-app-white md:max-w-2xl">
      <header>
        <h1 class="font-serif text-3xl text-center lg:text-4xl">
          Ihr Kontakt zu uns
        </h1>
        <p class="mt-6 text-center lg:text-lg">
          Haben Sie Fragen zu unserem Angebot? Wir sind gerne für Sie da. Füllen
          Sie einfach das Kontaktformular aus, und wir setzen uns zeitnah mit
          Ihnen in Verbindung.
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
          id="Telefon"
          v-model="form.phone"
          label="Telefon"
          required
          placeholder="Telefon"
          type="text"
          name="Telefon"
        />
        <div class="flex flex-col w-full mt-8">
          <label class="sr-only" for="nachricht">Nachricht</label>
          <textarea
            id="nachricht"
            v-model.lazy="form.message"
            class="p-1 mt-4 placeholder-black bg-app-white text-app-dark-gray focus:placeholder-transparent"
            name="nachricht"
            cols="30"
            rows="5"
            placeholder="Schreiben Sie ihre Nachricht hier"
          ></textarea>
        </div>
        <app-button-accent type="submit" class="mt-12 shadow-2xl" />
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
