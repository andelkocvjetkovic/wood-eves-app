<template>
  <div class="flex justify-around">
    <a href="https://facebook.com/" target="_blank"
      ><span class="sr-only">Wood-Elvas Facebook</span>
      <FacebookIcon class="fill-current w-7 h-7"
    /></a>
    <a href="https://instagram.com/" target="_blank">
      <span class="sr-only">Wood-Elvas Instagram</span>
      <InstagramIcon class="fill-current w-7 h-7" />
    </a>
    <a href="https://instagram.com/" target="_blank">
      <span class="sr-only">Wood-Elvas Linkedin</span>
      <LinkedinIcon class="fill-current w-7 h-7" />
    </a>
  </div>
</template>
<script>
import FacebookIcon from "~/assets/svg/facebookIcon.svg";
import InstagramIcon from "~/assets/svg/instagramIcon.svg";
import LinkedinIcon from "~/assets/svg/linkedinIcon.svg";
export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
  },
};
</script>
