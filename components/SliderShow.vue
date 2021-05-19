<template>
  <VueSlickCarousel v-bind="$options.slickOptions" :key="images[0]">
    <figure v-for="(img, i) in images" :key="i">
      <div role="presentation" class="relative w-full overflow-hidden pb-full">
        <NuxtImg
          class="absolute inset-0 object-cover object-center w-full h-full"
          :alt="img"
          sizes="xs:100vw sm:70vw md:60vw lg:70vw"
          :src="img"
          quality="80"
          fit="cover"
        />
      </div>
    </figure>
  </VueSlickCarousel>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  slickOptions: {
    accessibility: true,
    dots: true,
    infinite: true,
    dotsClass: "slick-dots",
    speed: 300,
    draggable: false,
    touchThreshold: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          arrows: true,
          fade: false,
          touchMove: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          fade: false,
          arrows: false,
          touchMove: true,
        },
      },
    ],
  },
};
</script>
style
<style lang="postcss">
@charset 'UTF-8';
/* Icons */
@font-face {
  font-family: "slick";
  src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA)
    format("woff");
}
.slick-dots {
  bottom: -25px;

  @apply absolute block w-full p-0 m-0 list-none text-center;
}
.slick-dots li {
  margin: 0 5px;

  @apply relative inline-block w-5 h-5 p-0 cursor-pointer;
}
.slick-dots li button {
  font-size: 0;
  line-height: 0;
  padding: 5px;
  border: 0;

  @apply block w-5 h-5 text-transparent outline-none bg-transparent;
}
.slick-dots li button:hover,
.slick-dots li button:focus {
  @apply outline-none;
}

.slick-dots li button:before {
  font-family: "slick";
  font-size: 8px;
  content: "•";

  @apply leading-5 absolute top-0 left-0 w-5 h-5 text-center text-black opacity-25;
}
.slick-dots li.slick-active button:before {
  @apply opacity-75;
}
.slick-dots li button:hover,
.slick-dots li button:focus {
  @apply focus-visible:ring-1 focus-visible:ring-app-accent;
}

/* Arrows */
.slick-prev,
.slick-next {
  @apply absolute top-1/2 block w-6 h-6 p-0 transform  -translate-y-1/2;
  @apply cursor-pointer text-transparent border-none outline-none bg-transparent;
  font-size: 0;
  line-height: 0;
}
.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  @apply text-transparent outline-none bg-transparent;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
  @apply opacity-100;
}
.slick-prev.slick-disabled:before,
.slick-next.slick-disabled:before {
  @apply opacity-25;
}

.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  @apply text-app-dark-gray opacity-60 leading-none text-2xl;
}

.slick-prev {
  left: -25px;
}
[dir="rtl"] .slick-prev {
  right: -25px;
  left: auto;
}
.slick-prev:before {
  content: "←";
}
[dir="rtl"] .slick-prev:before {
  content: "→";
}

.slick-next {
  right: -25px;
}
[dir="rtl"] .slick-next {
  right: auto;
  left: -25px;
}
.slick-next:before {
  content: "→";
}
[dir="rtl"] .slick-next:before {
  content: "←";
}
</style>
