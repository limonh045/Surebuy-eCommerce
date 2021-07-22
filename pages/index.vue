<template>
  <div>
    <header-search />
    <!-- <div class="banners ajustify-center mt-3">
      <img
        src="https://cdn.chaldal.net/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D71054&q=low&v=1&w=588&h=160&webp=1"
        alt=""
      />
      <img
        src="https://cdn.chaldal.net/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D70958&q=low&v=1&w=588&h=160&webp=1"
        alt=""
      />
    </div> -->

    <!-- <h2 class="text-center py-4">Our Product Categories</h2>
    <div class="m-auto  product-catagory">
      <div class="aalign-start ajustify-center">
        <nuxt-link
          class="product-catagory__item "
          :to="proCat.to"
          v-for="(proCat, i) in productCatagories"
          :key="i"
        >
          <div class="d-flex position-relative">
            <div class="product-catagory__item--name">
              {{ proCat.name }}
            </div>
            <img class="mr-3" :src="proCat.icon" alt="" /></div
        ></nuxt-link>
      </div>
    </div> -->

    <h2 class="text-center py-4">How to order from SureBuy ?</h2>
    <div class="courosal-slide">
      <b-carousel
        id="carousel-1"
        :interval="4000"
        indicators
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
      >
        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="~assets/img/howto.png"
        ></b-carousel-slide>
        <b-carousel-slide
         img-src="~assets/img/howto2.png"
        ></b-carousel-slide>
        <b-carousel-slide
          img-src="~assets/img/howto3.png"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <offer-slider />
    <!-- <my-slider/> -->
    <why-love />
    <clients-say />
    <the-footer />
    <payment-way />
  </div>
</template>

<script>
import { menuItems } from "../data/menuItems";
import { productCatagories } from "../data/productCatagories";
import { mapGetters } from "vuex";
export default {

  data: () => ({
    menuItems,
    productCatagories
  }),
  computed: {
    ...mapGetters(["cartItemData"])
  },
  mounted() {
    // this.$store.commit("addToCart", { name: "done" });
    console.log(this.cartItemData);

    menuItems.forEach(item => {
      if (item.expand) {
        item.expand = false;
      }
    });
  },
  head() {
      return {
        title: ` SureBuy.Com`,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
};
</script>

<style>
.banners img {
  margin: 3px 2px;
  max-width: 588px;
  width: 48%;
}
.product-catagory__item {
  width: 31%;
  max-width: 380px;
  margin: 10px;
  border: 1px solid #d4d4d4;
  color: black;
  text-decoration: none;
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 3px;
}
.product-catagory__item:hover {
  color: black;
  text-decoration: none;
}
.product-catagory__item--name {
  width: 75%;
  text-align: center;
  margin: auto;
  font-size: 15px;
  line-height: 31px;
}
.courosal-slide {
  max-width: 65rem;
  margin: auto;
  display: block;
  padding: 0 20px;
}
@media only screen and (max-width: 992px) {
  .product-catagory__item {
    width: 47%;
    max-width: 450px;
  }
}

@media only screen and (max-width: 768px) {
  .banners img {
    width: 100%;
  }
  .product-catagory__item {
    width: 96%;
    max-width: 600px;
  }
}
</style>
