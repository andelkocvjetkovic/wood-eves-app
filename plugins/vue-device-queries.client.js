import Vue from "vue";
import DeviceQueries from "vue-device-queries";
Vue.use(DeviceQueries, {
  tablet: "min-width: 768px",
  laptop: "min-width: 1024px",
});
