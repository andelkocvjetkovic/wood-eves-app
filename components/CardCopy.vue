<template>
  <li class="flex items-center">
    <p
      class="flex-grow-0 text-base md:text-base flex-basis-75 xs:flex-basis-50"
    >
      <slot name="cardNumber">
        {{ cardNumber }}
      </slot>
    </p>
    <p
      class="flex items-center justify-between space-x-1 text-sm flex-basis-25 xs:flex-basis-50"
    >
      <span
        class="flex items-center justify-center flex-grow text-center xs:px-4"
      >
        <slot />
      </span>
      <button
        v-tooltip="{
          content: `Copied!`,
          show: isStatusActive,
          trigger: 'manual',
          placement: 'top',
          container: false,
        }"
        class="relative transition-colors duration-150 ease-out border-2 border-opacity-0 rounded focus:outline-none border-app-dark-gray hover:border-opacity-100"
        :class="[isStatusActive ? 'text-app-green' : '']"
        @click="handleCopy"
      >
        <component :is="getComponent" />
      </button>
    </p>
  </li>
</template>

<script>
import { VTooltip } from "v-tooltip";
import ClipboardIcon from "~/assets/svg/clipboardIcon.svg";
import CheckIcon from "~/assets/svg/checkIcon.svg";

export default {
  components: {
    ClipboardIcon,
    CheckIcon,
  },
  directives: {
    tooltip: VTooltip,
  },
  props: {
    cardNumber: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isStatusActive: false,
    };
  },
  computed: {
    getComponent() {
      return this.isStatusActive
        ? this.$options.components.CheckIcon
        : this.$options.components.ClipboardIcon;
    },
  },
  methods: {
    async handleCopy() {
      if (this.isStatusActive === true) {
        return;
      }
      // TODO support older browsers
      if (navigator.clipboard) {
        this.isStatusActive = true;
        try {
          await navigator.clipboard.writeText(this.cardNumber);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        } finally {
          setTimeout(() => {
            this.isStatusActive = false;
          }, 2000);
        }
      }
    },
  },
};
</script>
<style lang="postcss">
.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  @apply bg-app-blue-gray text-app-white rounded px-3 py-1 text-sm;
}

.tooltip .tooltip-arrow {
  margin: 5px;
  z-index: 1;
  @apply w-0 h-0 border-solid absolute border-app-blue-gray;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}
.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}
/*



.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}
*/
</style>
