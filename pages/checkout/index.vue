<template>
  <main class="py-6">
    <section
      class="px-4 xs:mx-auto xs:max-w-sm xs:px-0 sm:max-w-lg md:max-w-2xl"
    >
      <h1 class="text-2xl font-semibold text-center md:text-3xl">
        Lorem ipsum dolor sit amet.
      </h1>
      <p class="mt-4 leading-snug text-center md:text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, aliquid.
      </p>
      <form
        class="mt-6"
        novalidate="true"
        @submit.prevent="handleForm"
        @change="handleChange"
      >
        <div
          v-if="errors.length"
          class="p-6 bg-opacity-50 bg-app-red text-app-white ring-2 ring-app-red"
        >
          <b>Please corrcet the following error(s) :</b>
          <ul class="text-sm list-decimal list-inside">
            <li v-for="(err, i) in errors" :key="i" class="font-semibold">
              {{ err }}
            </li>
          </ul>
        </div>
        <fieldset :class="[errors.length ? 'mt-6' : '']">
          <legend class="text-lg italic font-semibold">1. Your Email</legend>
          <AppInputWrapper lab-for="email">
            <AppInput
              id="email"
              v-model="formData.email"
              type="email"
              name="email"
              autocomplete="email"
            />
            <span class="text-xs text-app-blue-gray"
              >You'll recive recepits and notifications at this email
              address</span
            >
          </AppInputWrapper>
        </fieldset>
        <fieldset class="mt-6">
          <legend class="text-lg italic font-semibold">2. Shipping:</legend>
          <AppInputWrapper lab-for="first-name">
            <AppInput
              id="first-name"
              v-model="formData.firstName"
              type="text"
              name="first-name"
              autocomplete="given-name"
            />
          </AppInputWrapper>
          <AppInputWrapper lab-for="last-name">
            <AppInput
              id="last-name"
              v-model="formData.lastName"
              type="text"
              name="last-name"
              autocomplete="family-name"
            />
          </AppInputWrapper>
          <AppInputWrapper lab-for="address">
            <AppInput
              id="address"
              v-model="formData.address1"
              type="text"
              name="address1"
              autocomplete="address-line1"
            />
          </AppInputWrapper>
          <p class="max-w-full mt-6">
            <label for="country">Country:</label>
            <select
              id="country"
              v-model="formData.country"
              name="country"
              class="w-full p-2 mt-1 border border-app-blue-gray"
            >
              <option
                v-for="country in $options.countryList"
                :key="country"
                :value="country"
              >
                {{ country }}
              </option>
            </select>
          </p>
          <AppInputWrapper lab-for="zip-code">
            <AppInput
              id="zip-code"
              v-model="formData.zipCode"
              type="text"
              name="zip-code"
              autocomplete="postal-code"
            />
          </AppInputWrapper>
          <AppInputWrapper lab-for="city">
            <AppInput
              id="city"
              v-model="formData.city"
              type="text"
              name="city"
            />
          </AppInputWrapper>
          <AppInputWrapper lab-for="phone-number">
            <AppInput
              id="phone-number"
              v-model="formData.phoneNumber"
              type="text"
              autocomplete="tel"
            />
          </AppInputWrapper>
        </fieldset>
        <p class="flex justify-between mt-6">
          <label for="subs">Subscribe to our mailing list</label>
          <input
            id="subs"
            v-model="formData.isSubs"
            type="checkbox"
            name="toppings"
          />
        </p>
        <AppButton
          type="submit"
          class="block w-full mt-6 disabled:opacity-30 md:w-1/2 md:mx-auto"
          :disabled="errors.length ? true : false"
          >Continue</AppButton
        >
        <p v-if="errors.length" class="mt-3 text-app-red">
          Please first correct error(s)
        </p>
      </form>
    </section>
  </main>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { v4 as uuidv4 } from "uuid";
export default {
  middleware({ store, error }) {
    if (store.getters.cartLength === 0) {
      return error({
        statusCode: 403,
        message: "You have to first make a order to get access on this page",
      });
    }
  },
  data() {
    return {
      formData: {
        email: this.$store.state.order?.email || "and3lko@gmail.com",
        firstName: this.$store.state.order?.firstName || "Andelko",
        lastName: this.$store.state.order?.lastName || "Cvjetkovic",
        address1: this.$store.state.order?.address1 || "Nadbare bb",
        zipCode: this.$store.state.order?.zipCode || "71270",
        country: this.$store.state.order?.country || "",
        city: this.$store.state.order?.city || "Fojnica",
        phoneNumber: this.$store.state.order?.phoneNumber || "063316273",
        isSubs: this.$store.state.order?.isSubs || false,
      },
      errors: [],
    };
  },
  computed: {
    ...mapState(["order"]),
  },
  methods: {
    ...mapMutations(["setOrder"]),
    handleChange(e) {
      if (this.errors.length > 0) {
        this.checkForm();
      }
    },
    handleForm() {
      this.checkForm();
      if (this.errors.length > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return;
      }

      // Create UUID for each sucess handled submit form
      // put data into store
      var uuid = uuidv4();
      if (this.order) {
        // if there is already order reset it an put new formData into it
        // call without params reset state.order
        this.setOrder();
      }
      this.formData.uuid = uuid;
      this.setOrder(this.formData);
      this.$router.push({ path: `/checkout/${uuid}` });
    },
    checkInput(input) {
      return input.trim().length == 0;
    },
    checkForm() {
      this.errors = [];
      if (this.checkInput(this.formData.firstName)) {
        this.errors.push("FirstName required");
      }
      if (this.checkInput(this.formData.lastName)) {
        this.errors.push("Lastname required");
      }
      if (this.checkInput(this.formData.email)) {
        this.errors.push("Email required");
      } else if (!this.validateEmail()) {
        this.errors.push("Valid email required");
      }
      if (this.checkInput(this.formData.address1)) {
        this.errors.push("Address is required");
      }
      if (this.checkInput(this.formData.country)) {
        this.errors.push("Country is required");
      }
      if (this.checkInput(this.formData.city)) {
        this.errors.push("City is required");
      }
      if (this.checkInput(this.formData.phoneNumber)) {
        this.errors.push("Phone Number is required");
      }
      if (!this.formData.zipCode) {
        this.errors.push("Zip code is required");
      }
    },
    validateEmail() {
      var email = this.formData.email;
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },

  countryList: [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ],
};
</script>

<style></style>
