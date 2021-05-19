<script>
export default {
  props: {
    labFor: {
      type: String,
      required: true,
    },
  },
  computed: {
    labelText() {
      var tempArr = this.labFor.split("-");
      if (tempArr.length == 1) {
        return tempArr[0];
      } else {
        return tempArr.join(" ");
      }
    },
  },
};
</script>

<template>
  <p class="flex flex-col mt-6">
    <label :for="labFor" class="text-sm capitalize md:text-base">{{
      labelText
    }}</label>
    <slot />
  </p>
</template>
