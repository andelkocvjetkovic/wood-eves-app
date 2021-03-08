<template>
  <section>
    <header class="">
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
      <app-input
        id="Name"
        v-model="form.name"
        label="Name"
        required
        placeholder="Name *"
        type="text"
        name="Name"
      />
      <app-input
        id="EmailAddress"
        v-model="form.email"
        label="EmailAddress"
        required
        placeholder="E-mail addresse *"
        type="email"
        name="EmailAddress"
      />
      <app-input
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
          class="p-1 mt-4 transition-colors duration-1000 border border-opacity-0 resize-none text-app-dark-gray placeholder-app-dark-gray focus:outline-none focus:border-opacity-100 border-app-accent"
          name="nachricht"
          cols="30"
          rows="10"
          placeholder="Schreiben Sie ihre Nachricht hier"
        ></textarea>
      </div>
      <app-button-accent type="submit" class="mt-12 shadow-2xl" />
    </form>
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
    submitForm() {},
  },
};
</script>
