<template>
  <div>
    <div class="pb-4 position-relative  ">
      <h2 class="text-center py-5">Special Offer</h2>
      <button @click="scrollLeft()" class="slider-control__left">
        <fa-icon class="control-left" icon="chevron-left"></fa-icon>
      </button>
      <button @click="scrollRight()" class="slider-control__right">
        <fa-icon class="control-right" icon="chevron-right"></fa-icon>
      </button>

      <div class="slider">
        <div class="my-slide" ref="mySlide">
          <div class="my-slide__content" :style="{ width: 150000 + '%' }">
            <div class="aflex">
              <div
                class="offer-slider__item"
                v-for="(item, i) in items"
                :key="i"
              >
                <img
                  class="product-banner p-3"
                  :src='item.photo'
                  alt=""
                  style="height: 285px;"
                />
                <div class="products px-4  position-relative">
                  <div class="d-flex">
                    <!-- <img :src="item.photo" alt="" class="product-icon" /> -->
                    <div class="product-info w-100 text-center" style="    height: 115px;">
                      <div class="product-info__name ">
                        {{ item.name }}
                      </div>
                      <div class="product-info__weight my-3">
                        {{ item.measurements }}
                      </div>
                      <div class="discout-product d-flex text-center w-100 justify-content-center">
                        <div class="discount-product__price text-center">
                          {{ item.offer }}
                        </div>
                        <div class="discount-product__real--price text-center">
                          {{ item.price }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="products-overflow position-absolute">
                    <h2
                      v-if="item.quantity == 0"
                      @click="addCartHandle(item)"
                      class="adding-shop text-center m-auto"
                    >
                      Add Shopping Bag
                    </h2>
                    <h2
                      v-else
                      @click="$store.commit('cartQunatityPlus', item._id)"
                      class="text-center mt-3 text-white"
                    >
                      &#2547; {{ item.quantity * item.price }}
                    </h2>
                    <div>
                      <button
                        v-if="item.quantity == 0"
                        @click="addCartHandle(item)"
                        class="overflow-button"
                      >
                        add to cart
                      </button>
                      <button
                        v-else
                        @click="$store.commit('cartQunatityPlus', item._id)"
                        class="overflow-button"
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="cart-add__btn px-2 mb-2">
                  <button
                    @click="addCartHandle(item)"
                    v-if="item.quantity == 0"
                    class="item-item__cart--btn"
                  >
                    Add To Cart
                  </button>
                  <div class="d-flex my-2" v-else>
                    <button
                      @click="$store.commit('cartQunatityMinus', item._id)"
                      class="cart-add__plus"
                    >
                      -
                    </button>
                    <button
                      @click="$store.commit('cartQunatityPlus', item._id)"
                      class="cart-add__qyn"
                    >
                      {{ item.quantity }} in bag
                    </button>
                    <button
                      @click="$store.commit('cartQunatityPlus', item._id)"
                      class="cart-add__minus"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { productItems } from "../../data/productItems";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    sliderChange: 0,
    offerLength: 5,
  
  }),
   computed: {
    ...mapGetters({items:"setOffer"}),
  },

  mounted() {
    setInterval(() => {
      this.$refs.mySlide.scrollLeft += 340;
      if (
        this.$refs.mySlide.scrollLeft >=
        340 * (this.productItems.length - 9)
      ) {
        this.$refs.mySlide.scrollLeft = 0;
      }
    }, 3000);
    // this.productItems.map((i) => {
    //   if (i.beforePrice) {
    //     this.items.push(i);
    //   }
    // });
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
     
      this.$store.dispatch('getOfferItem')
    },
    addCartHandle(item) {
      item.quantity = 1;
      this.$store.commit("addToCart", item);
    },
    scrollLeft() {
      this.$refs.mySlide.scrollLeft -= 340;
    },

    scrollRight() {
      this.$refs.mySlide.scrollLeft += 340;
      if (
        this.$refs.mySlide.scrollLeft >
        340 * (this.items.length - 9)
      ) {
        this.$refs.mySlide.scrollLeft = 0;
      }
    },
  },
};
</script>

<style>
.item-item__cart--btn {
  height: 37px;
  width: 100%;
  margin-top: 10px;

  background-color: #fff;
  border: 1px solid #ebebeb;
  padding: 6px 0;
  text-align: center;
  transition: all ease-in-out 0.15s;

  font-weight: 700;
  font-size: 14px;
  color: #fe8280;
}
.item-item__cart--btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 1px 1px #c3c1c199;
  border-color: #d0cfcf;
}
.cart-add__plus,
.cart-add__minus {
  border: none;
  width: 30px;
  background: #ff8182;
  height: 38px;
  outline: 0;
  font-weight: 700;
  color: #fff;
}
.cart-add__qyn {
  flex-grow: 1;
  background: #ff8182;
  border-right: 1px solid #d55f5f;
  border-left: 1px solid #d55f5f;
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
  color: #ffff;
}
.add__plus,
.add__minus {
  font-size: 35px;
  border: 3px solid #fef3d5;
  border-radius: 50%;
  height: 33px;
  width: 33px;
  padding-top: 3px;
  margin-top: 27px;
  line-height: 19px;
  padding-left: 3px;
  color: #ffff;
  cursor: pointer;
}
.qyntty {
  font-size: 55px;
  line-height: 83px;
  width: 73px;
  color: #fdd670;
}

.my-slide {
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
}

.my-slide::-webkit-scrollbar {
  display: none;
}

.slider {
  width: 64%;
  min-width: 20rem;
  overflow: hidden;
  margin: auto;
}
.offer-slider {
  width: max-content;
  transition: 0.4s all;
}
.offer-slider__item {
  max-width: 300px;
  min-width: 214px;
  border: 1px solid black;
  border-radius: 5px;
  display: inline-block;
  margin: 0 20px;
}
.slider-control__left {
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: #ff686e;
  width: 45px;
  height: 90px;
  position: absolute;
  top: 50%;
}
.control-left {
  font-size: 30px;
  color: white;
}
.slider-control__right {
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  background-color: #ff686e;
  width: 45px;
  height: 90px;
  position: absolute;
  top: 50%;
  right: 0;
}
.control-right {
  font-size: 30px;
  color: white;
}

.product-icon {
  max-width: 145px;
  max-height: 145px;
}
.product-info__name {
  font-size: 14px;
}
.product-info__weight {
  font-size: 12px;
}
.product-info__price {
  font-size: 18px;
}
.discount-product__price {
  color: red;
  font-size: 18px;
}
.discount-product__real--price {
  font-size: 12px;
  margin: auto 7px;
  text-decoration: line-through;
}
.add-to-cart {
  width: 91%;
  margin: auto;
  display: block;
  margin-bottom: 12px;
  padding: 6px 0;
  font-size: 14px;
  color: red;
  font-weight: 700;
  border-radius: 4px;
  background: transparent;
  border: 1px solid #ebebeb;
  margin-top: 10px;
}
.add-to-cart:hover {
  transform: translateY(-1px);
  box-shadow: 0 1px 1px #c3c1c199;
  border-color: #d0cfcf;
}
.cart-icon {
  padding: 0 50px;
  box-sizing: content-box;
}
.products-overflow {
  display: none;
  padding: 0 13px;
  width: 89%;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(40, 40, 40, 0.75);
  margin: 0 19px;
  border-radius: 6px;
}
.products:hover .products-overflow {
  display: block;
}
.adding-shop {
  width: 46%;
  padding-top: 14px;
  line-height: 1.2;
  color: white;
}
.overflow-button {
  bottom: 0;
  position: absolute;
  width: 100%;
  margin-left: -13px;
  border-radius: 0 0 6px 6px;
}
@media screen and (max-width: 1170px) {
  .slider-control__left,
  .slider-control__right {
    height: 90px;
    border-radius: 0px;
    z-index: 1;
    color: red;
    width: 45px;
    background: #fff;
  }
  .slider-control__left svg,
  .slider-control__right svg {
    color: red;
  }
  .slider-control__left:hover,
  .slider-control__right:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
