<script>
import { mapActions } from "vuex";
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedWood: this.value.typeOfWoods?.[0] ?? {},
      selectedDimension: this.value.dimensions?.[0] ?? {},
      selectedColor: this.value.colors?.[0] ?? {},
      quantity: 1,
    };
  },
  computed: {
    productType() {
      return this.value.type;
    },
    productName() {
      return `${this.value.name} ${this.selectedWood.woodType}`;
    },
    heroImg() {
      return this.value.heroImage;
    },
    getImages() {
      var woodTypeImgs = this.selectedWood.images || [];
      var dimensionImgs = this.selectedDimension.images || [];
      var imgs = [];
      if (woodTypeImgs.length == 0) {
        imgs.push(this.heroImg);
      } else {
        imgs = [...woodTypeImgs];
      }
      if (dimensionImgs.length > 0) {
        imgs = [...imgs, ...dimensionImgs];
      }
      return imgs.map((img) => {
        return `${this.getSlug}/${img}`;
      });
    },
    getWoodTypes() {
      return this.value.typeOfWoods == undefined ? [] : this.value.typeOfWoods;
    },
    getAllDimensions() {
      return this.value.dimensions == undefined ? [] : this.value.dimensions;
    },
    getPrice() {
      return `${
        this.value.startPrice +
        this.selectedWood.addPrice +
        this.selectedDimension.addPrice
      } $`;
    },
    getSlug() {
      return `/articles/${this.value.slug}`;
    },
    deliveryTime() {
      var delivery = this.value.deliveryTime;
      switch (this.value.deliveryPeriods) {
        case "w":
          return `${delivery} - ${delivery + 1} weeks`;
        case "d":
          return `${delivery} - ${delivery + 2} days`;
        case "y":
          if (Number(delivery) == 1) {
            return `${delivery} year`;
          } else return `${delivery} years`;
        default:
          return `5 - 6 weeks`;
      }
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
    handleChangeWood(e) {
      var i = this.value.typeOfWoods.find((wo) => {
        return wo.woodType === e.target.value;
      });
      if (i == undefined) {
        console.error(e.target.value, "This type of wood does not exist");
      }
      this.selectedWood = i;
    },
    handdleChangeDimension(e) {
      var i = this.value.dimensions[e.target.value];
      if (i == undefined) {
        console.error(e.target.value, "This dimension does not exist");
      }
      this.selectedDimension = i;
    },
    addItem() {
      this.quantity++;
    },
    removeItem() {
      if (this.quantity == 1) return;
      this.quantity--;
    },
    handleForm() {
      var selectedProduct = {};
      selectedProduct.uuid = this.value.uuid;
      selectedProduct.wood = this.selectedWood;
      selectedProduct.dimension = this.selectedDimension;
      selectedProduct.quantity = this.quantity;
      selectedProduct.name = this.value.name;
      selectedProduct.price =
        this.value.startPrice +
        this.selectedWood.addPrice +
        this.selectedDimension.addPrice;

      this.addToCart(selectedProduct);
      this.quantity = 1;
    },
  },
  render() {
    return this.$scopedSlots.default({
      productName: this.productName,
      productDescription: this.value.description,
      productMarkdown: this.value,
      productType: this.productType,
      selectedWoodType: this.selectedWood,
      selecteDimesnion: this.selectedDimension,
      selectedColor: this.selectedColor,
      images: this.getImages,
      productPrice: this.getPrice,
      woodTypes: this.getWoodTypes,
      dimensions: this.getAllDimensions,
      quantity: this.quantity,
      deliveryTime: this.deliveryTime,
      eventsHandlers: {
        typeWood: {
          change: (e) => {
            this.handleChangeWood(e);
          },
        },
        dimension: {
          change: (e) => {
            this.handdleChangeDimension(e);
          },
        },
        formHandle: {
          submit: (e) => {
            this.handleForm(e);
          },
        },
      },
      add: this.addItem,
      remove: this.removeItem,
    });
  },
};
</script>
