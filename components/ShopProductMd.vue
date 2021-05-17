<template>
  <ShopProductRenderless :value="item">
    <template
      v-slot:default="{
        productName,
        productPrice,
        deliveryTime,
        eventsHandlers,
        woodTypes,
        dimensions,
        add: increase,
        remove: decrease,
        quantity,
        productDescription,
        productMarkdown,
        images,
      }"
    >
      <article class="grid-cols-2 mx-auto md:grid md:max-w-2xl">
        <section class="col-start-1">
          <SliderShowNav v-if="images.length > 1" :images="images" />
          <NuxtImg v-else :src="images[0]" sizes=" md:50vw" quality="80" />
        </section>
        <section class="col-start-2">
          <h1>{{ productName }}</h1>
          <h3>{{ productPrice }}</h3>
          <p>
            Delivery Time <span>{{ deliveryTime }}</span>
          </p>
          <form @submit.prevent="eventsHandlers.formHandle.submit">
            <fieldset>
              <legend>Material:</legend>
              <label for="material">Select material: </label>
              <select
                id="material"
                name="select"
                v-on="eventsHandlers.typeWood"
              >
                <option
                  v-for="wood in woodTypes"
                  :key="wood.woodType"
                  :value="wood.woodType"
                >
                  {{
                    wood.woodType.charAt(0).toUpperCase() +
                    wood.woodType.slice(1)
                  }}
                  <template v-if="wood.addPrice > 0">
                    &nbsp; +{{ wood.addPrice }} &#36;</template
                  >
                </option>
              </select>
            </fieldset>
            <fieldset>
              <legend>Dimensions:</legend>
              <label for="dimension">Select dimension: </label>
              <select id="dimension" name="dimension">
                <option
                  v-for="(dimension, i) in dimensions"
                  :key="i"
                  :value="i"
                >
                  {{ dimension.data.length }} x {{ dimension.data.width }} x
                  {{ dimension.data.height }}

                  <template v-if="dimension.addPrice > 0">
                    &nbsp; +{{ dimension.addPrice }}&#36;
                  </template>
                </option>
              </select>
            </fieldset>
            <div>
              <button type="submit">Add to cart</button>
              <div
                class="flex flex-shrink-0 px-4 py-2 flex-basis-50 bg-app-light-gray"
              >
                <AppButtonQty
                  class="flex-shrink-0 flex-basis-25"
                  @click.native="decrease"
                >
                  <MinusIcon class="w-6 h-6" />
                </AppButtonQty>
                <p class="flex-shrink-0 flex-basis-50">
                  <label for="amount" class="sr-only">Quantity</label>
                  <input
                    id="amount"
                    type="text"
                    name="amount"
                    readonly
                    :value="quantity"
                    class="w-full text-center appearance-none select-none focus:outline-none bg-app-light-gray"
                  />
                </p>
                <AppButtonQty
                  class="flex-shrink-0 flex-basis-25"
                  @click.native="increase"
                >
                  <PlusIcon class="w-6 h-6" />
                </AppButtonQty>
              </div>
            </div>
          </form>
          <section>
            <h3>{{ productDescription }}</h3>
            <NuxtContent :document="productMarkdown" />
            <ShippingReturns class="mt-3" />
          </section>
        </section>
      </article>
    </template>
  </ShopProductRenderless>
</template>

<script>
import MinusIcon from "~/assets/svg/minusIcon.svg";
import PlusIcon from "~/assets/svg/plusIcon.svg";
export default {
  components: {
    MinusIcon,
    PlusIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
