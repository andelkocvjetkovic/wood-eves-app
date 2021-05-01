<template>
  <ShopProduct :value="item">
    <template
      v-slot:default="{
        productName,
        productDescription,
        productMarkdown,
        images,
        productPrice,
        woodTypes,
        dimensions,
        add: increase,
        remove: decrease,
        quantity,
        eventsHandlers,
        deliveryTime,
      }"
    >
      <section class="max-w-xs mx-auto xs:max-w-sm">
        <h2 class="font-serif text-xl font-semibold capitalize">
          {{ productName }}
        </h2>
        <!-- Slider show mobile -->
        <SliderShow
          v-if="images.length > 1"
          class="w-full mt-2 max-h-96"
          :images="images"
        />
        <NuxtImg v-else :src="images[0]" />

        <div>
          <p class="flex items-center justify-between mt-6">
            <span class="font-serif text-2xl font-bold text-black">{{
              productPrice
            }}</span>
            <span class="text-sm text-center"
              >Delivery Time <br />
              {{ deliveryTime }}</span
            >
          </p>
          <form class="" @submit.prevent="eventsHandlers.formHandle.submit">
            <fieldset class="mt-4">
              <legend class="text-sm">Material:</legend>
              <select
                class="block w-3/4 p-3 mt-2 border focus-visible:border-app-accent"
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
            <fieldset class="mt-6">
              <legend class="text-sm">
                Dimensions:
                <span class="text-xs"> L cm x W cm x H cm </span>
              </legend>
              <select
                class="block w-3/4 p-3 mt-2 border focus-visible:border-app-accent"
                v-on="eventsHandlers.dimension"
              >
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

            <!-- Cart Adding -->
            <div class="flex items-center py-4 mt-6">
              <button
                type="submit"
                class="flex-shrink-0 p-2 flex-basis-50 bg-app-dark-gray text-app-light-gray"
              >
                Add to cart
              </button>
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
        </div>

        <!-- Product description -->
        <div>
          <p class="text-sm leading-6">{{ productDescription }}</p>
          <button
            class="mt-4 underline focus:outline-none active:text-app-dark-gray focus-visible:ring-1 ring-offset-black"
            @click="readMore = !readMore"
          >
            Details <span>&#8594;</span>
          </button>
          <NuxtContent
            v-show="readMore"
            class="mx-auto mt-8 prose-sm prose sm:prose lg:prose-lg xl:prose-2xl"
            :document="productMarkdown"
          />
        </div>
      </section>
    </template>
  </ShopProduct>
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
  data() {
    return {
      readMore: false,
    };
  },
};
</script>

<style></style>
