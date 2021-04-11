import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Zoom,
  Lazy,
  A11y,
  Thumbs,
  Controller,
} from "swiper/js/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import Vue from "vue";
SwiperClass.use([Pagination, Navigation, Zoom, Lazy, A11y, Thumbs, Controller]);

Vue.use(getAwesomeSwiper(SwiperClass));
