import Vue from "vue";
import VueSlickCarousel from "vue-slick-carousel";

// For Lazy Loading webpack
// var VueSlickCarousel = () =>
//   import(/* webpackChunkName: "vue-slick-carousel" */ "vue-slick-carousel");

Vue.component("VueSlickCarousel", VueSlickCarousel);
