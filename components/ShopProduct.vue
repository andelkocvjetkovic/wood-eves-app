<template>
  <ShopProductRenderless :value="item">
    <template
      v-slot:default="{
        productName,
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
      <section
        class="md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:gap-x-10 xl:gap-x-14 xl:gap-y-10"
      >
        <h1
          class="font-serif text-3xl font-semibold tracking-wide capitalize md:hidden"
        >
          {{ productName }}
        </h1>
        <!-- Slider show mobile -->
        <section class="mt-4 md:flex md:flex-col md:justify-center">
          <SliderShow
            v-if="images.length > 1"
            class="w-full mt-2"
            :images="images"
          />
          <NuxtImg
            v-else
            :src="images[0]"
            sizes="xs:100vw sm:60vw lg:50vw"
            quality="80"
          />
        </section>
        <section
          class="pt-px mt-4 md:order-first md:flex md:flex-col md:justify-around"
        >
          <h1
            class="hidden font-serif text-3xl font-semibold tracking-wide capitalize md:block"
          >
            {{ productName }}
          </h1>
          <p class="flex items-center justify-between mt-6">
            <span class="font-serif text-2xl font-bold text-black">{{
              productPrice
            }}</span>
            <span class="text-sm text-center"
              >Delivery Time <br />
              {{ deliveryTime }}</span
            >
          </p>
          <form @submit.prevent="eventsHandlers.formHandle.submit">
            <fieldset class="mt-4">
              <legend class="text-sm">Material:</legend>
              <label for="material">Select material: </label>
              <select
                id="material"
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
              <label for="dimension">Select dimension: </label>
              <select
                id="dimension"
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
              <AppButton
                type="submit"
                class="flex-shrink-0 flex-basis-50 lg:text-lg"
              >
                Add to cart
              </AppButton>
              <div
                class="flex flex-shrink-0 px-4 py-3 flex-basis-50 bg-app-light-gray"
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
                    class="w-full text-center appearance-none select-none focus:outline-none bg-app-light-gray lg:text-lg"
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
        </section>

        <!-- Product description -->
        <article>
          <NuxtContent
            class="mt-4 prose-sm prose"
            :document="productMarkdown"
          />
        </article>
        <ShippingReturns class="mt-8 md:mt-4" />
      </section>
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
