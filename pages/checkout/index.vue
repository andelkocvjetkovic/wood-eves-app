<template>
  <main class="max-w-xs py-6 mx-auto">
    <form class="" @submit.prevent="handleForm">
      <fieldset>
        <legend class="text-lg italic font-semibold">1. Your Email</legend>
        <AppWrapper>
          <label for="email" class="text-xs">Email:</label>
          <AppInput
            id="email"
            type="email"
            name="email"
            autocomplete="email"
            :value="formData.email"
            @item-change="(value) => (formData.email = value)"
          />
          <span class="text-xs text-app-blue-gray"
            >You'll recive recepits and notifications at this email
            address</span
          >
        </AppWrapper>
      </fieldset>
      <fieldset class="mt-6">
        <legend class="text-lg italic font-semibold">2. Shipping:</legend>
        <AppWrapper>
          <label for="name" class="">First name:</label>
          <AppInput
            id="name"
            type="text"
            autocomplete="given-name"
            :value="formData.firstName"
            @item-change="(value) => (formData.firstName = value)"
          />
        </AppWrapper>
        <AppWrapper>
          <label for="lastname">Last name:</label>
          <AppInput
            id="lastname"
            type="text"
            autocomplete="amily-name"
            :value="formData.lastName"
            @item-change="(value) => (formData.lastName = value)"
          />
        </AppWrapper>
        <AppWrapper>
          <label for="address1">Address 1:</label>
          <AppInput
            id="address1"
            :value="formData.address1"
            type="text"
            autocomplete="address-line1"
            @item-change="(value) => (formData.address1 = value)"
          />
        </AppWrapper>
        <AppWrapper>
          <label for="address2">Address 2:</label>
          <AppInput
            id="address2"
            :value="formData.address2"
            type="text"
            autocomplete="address-line2"
            @item-change="(value) => (formData.address2 = value)"
          />
        </AppWrapper>
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
        <AppWrapper>
          <label for="zipCode">ZIP Code: </label>
          <AppInput
            id="zipCode"
            :value="formData.zipCode"
            type="text"
            autocomplete="postal-code"
            @item-change="(value) => (formData.zipCode = value)"
          />
        </AppWrapper>
        <AppWrapper>
          <label for="city">City: </label>
          <AppInput
            id="city"
            :value="formData.city"
            type="text"
            @item-change="(value) => (formData.city = value)"
          />
        </AppWrapper>
        <AppWrapper>
          <label for="phoneNumber">Phone Number: </label>
          <AppInput
            id="phoneNumber"
            :value="formData.phoneNumber"
            type="text"
            autocomplete="tel"
            @item-change="(value) => (formData.phoneNumber = value)"
          />
        </AppWrapper>
      </fieldset>
      <p class="flex justify-between mt-6">
        <label for="subs">Subscribe to our mailing list</label>
        <input
          id="subs"
          :value="formData.isSubs"
          type="checkbox"
          name="toppings"
          @item-change="(value) => (formData.isSubs = value)"
        />
      </p>
      <AppButton type="submit" class="w-full mt-6">Continue</AppButton>
    </form>
  </main>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  middleware({ store, error }) {
    if (store.getters.cartLength === 0) {
      return error({
        statusCode: 403,
        message: "You  have to first make a to make access on this page",
      });
    }
  },
  data() {
    return {
      formData: {
        email: this.$store.state.order?.email || "",
        firstName: this.$store.state.order?.firstName || "",
        lastName: this.$store.state.order?.lastName || "",
        address1: this.$store.state.order?.address1 || "",
        address2: this.$store.state.order?.address2 || "",
        zipCode: this.$store.state.order?.zipCode || "",
        country: this.$store.state.order?.country || "",
        city: this.$store.state.order?.city || "",
        phoneNumber: this.$store.state.order?.phoneNumber || "",
        isSubs: this.$store.state.order?.isSubs || false,
      },
    };
  },
  computed: {
    ...mapState(["order"]),
  },
  mounted() {
    this.geoFind();
  },
  methods: {
    ...mapMutations(["setOrder"]),
    handleForm() {
      // Create UUID for each sucess handled submit form
      // redirect to /checkout/_uuid
      // put data into store
      var uuid = "adcb36af-77a0-44c4-97bb-1f3b2da131ce";
      // this.$router.push(formData);
      if (this.order) {
        // if there is already order reset it an put new formData into it
        this.setOrder();
      }
      this.formData.uuid = uuid;
      this.setOrder(this.formData);
      this.$router.push({ path: `/checkout/${uuid}` });
    },
    geoFind() {
      fetch("https://extreme-ip-lookup.com/json/")
        .then((res) => res.json())
        .then((response) => {
          this.formData.country = response.country;
        })
        .catch(console.warn);
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
