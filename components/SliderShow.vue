<template>
  <div ref="wrapper" class="relative overflow-hidden pb-full">
    <ul
      ref="container"
      class="absolute inset-0 flex items-center w-full"
      @pointerdown="dragStart"
      @pointerup="dragStop"
      @pointermove="dragMove"
      @mousedown.prevent
    >
      <li
        v-for="(img, i) in images"
        :key="i"
        class="w-full h-full min-w-full"
        style="touch-action: none"
        @dragstart.prevent
      >
        <NuxtImg
          :src="img"
          class="object-cover object-center w-full h-full"
          @mousedown.prevent
        />
      </li>
    </ul>
    <!--PIGINATION-->
    <div
      class="absolute bottom-0 flex items-center justify-center space-x-6 transform translate-x-1/2 right-1/2"
      @click="changeImage"
    >
      <button
        v-for="(img, i) in images"
        :key="i"
        class="w-4 h-4 rounded-full"
        :class="[currentIndex == i ? 'bg-app-dark-gray' : 'bg-app-light-gray']"
        :data-index="i"
      ></button>
    </div>

    <button
      v-if="currentIndex > 0"
      class="absolute transform -translate-y-1/2 top-1/2"
      @click="prev"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-labelledby="arrowLeft"
        class="w-8 h-8"
      >
        <title id="arrowLeft">Previous Image</title>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button
      v-if="currentIndex < images.length - 1"
      class="absolute right-0 transform -translate-y-1/2 top-1/2"
      @click="next"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-labelledby="arrowRight"
        class="w-8 h-8"
      >
        <title id="arrowRight">Next Image</title>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
    <pre class="absolute bottom-0">
        xDown: {{ xDown }}
        xDiff: {{ xDiff }}
        xCurrent: {{ currentX }}
        imageIndex: {{ currentIndex }}
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      animationPlaying: false,
      xDown: null,
      yDown: null,
      xMove: 0,
      currentX: 0,
    };
  },
  computed: {
    xDiff() {
      return this.xDown - this.xMove;
    },
    clientWidth() {
      return this.$refs.container.clientWidth;
    },
    scrollWidth() {
      return this.$refs.container.scrollWidth;
    },
  },
  watch: {
    images() {
      this.$gsap.to(this.$refs.container, {
        x: 0,
        duration: 0.2,
        onComplete: () => {
          this.currentIndex = 0;
          this.xDown = null;
          this.yDown = null;
          this.xMove = 0;
          this.currentX = 0;
        },
      });
    },
  },
  methods: {
    dragStart(e) {
      if (this.animationPlaying) return false;
      this.$refs.container.setPointerCapture(e.pointerId);
      this.xDown = e.clientX;
      this.yDown = e.clientY;
      this.xMove = e.clientX;
    },
    dragStop(e) {
      this.currentX += this.xDiff;
      this.xDown = null;
      this.yDown = null;
      this.xMove = 0;
      this.$refs.container.releasePointerCapture(e.pointerId);

      var index = this.currentX / this.clientWidth;
      this.currentIndex = Math.round(index);
      if (this.currentIndex > this.images.length - 1) {
        this.currentIndex = this.images.length - 1;
      } else if (this.currentIndex < 0) {
        this.currentIndex = 0;
      }
      this.animationPlaying = true;
      this.$gsap.to(this.$refs.container, {
        x: -(this.currentIndex * this.clientWidth),
        duration: 0.2,
        onComplete: () => {
          this.animationPlaying = false;
          this.currentX = this.currentIndex * this.clientWidth;
        },
      });
    },
    dragMove(e) {
      if (
        !this.xDown ||
        !this.yDown ||
        !e.target.hasPointerCapture(e.pointerId)
      )
        return;

      var xUp = e.clientX;
      this.xMove = xUp;
      var xDiff = this.xDown - xUp;

      if (Math.abs(xDiff) !== 0) {
        if (xDiff > 2) {
          // MOVE RIGHT
          this.$gsap.to(this.$refs.container, {
            x: -(this.currentX + this.xDiff),
            duration: 0,
          });
        } else if (xDiff < -2) {
          // MOVE LEFT
          this.$gsap.to(this.$refs.container, {
            x: -(this.currentX + this.xDiff),
            duration: 0,
          });
        }
      }
      // Y axis move
      // var yDiff = this.yDown - yUp;
      // var yUp = e.clientY;
      // if (Math.abs(yDiff) !== 0) {
      //   if (yDiff > 2) {
      //     console.log("Move up");
      //   } else if (yDiff < -2) {
      //     console.log("Move down");
      //   }
      // }
    },
    changeImage(e) {
      if (e.target.tagName === "BUTTON" && this.animationPlaying === false) {
        this.animationPlaying = true;
        this.currentIndex = e.target.dataset.index;
        this.$gsap.to(this.$refs.container, {
          x: -(this.currentIndex * this.clientWidth),
          duration: 0.2,
          onComplete: () => {
            this.animationPlaying = false;
            this.currentX = this.currentIndex * this.clientWidth;
          },
        });
      }
    },
    next() {
      if (
        this.currentIndex == this.images.length - 1 ||
        this.animationPlaying === true
      ) {
        return;
      }
      // GSAP
      this.animationPlaying = true;
      this.$gsap.to(this.$refs.container, {
        x: `+= ${-this.clientWidth}`,
        duration: 0.2,
        onComplete: () => {
          this.currentIndex++;
          this.animationPlaying = false;
          this.currentX = this.currentIndex * this.clientWidth;
        },
      });
    },
    prev() {
      if (this.currentIndex == 0 || this.animationPlaying === true) {
        return;
      }
      this.animationPlaying = true;
      this.$gsap.to(this.$refs.container, {
        x: `+= ${this.clientWidth}`,
        duration: 0.2,
        onComplete: () => {
          this.currentIndex--;
          this.animationPlaying = false;
          this.currentX = this.currentIndex * this.clientWidth;
        },
      });
    },
  },
};
</script>

<style></style>
