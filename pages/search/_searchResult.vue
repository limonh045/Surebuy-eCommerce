<template>
  <div>
    <div class="aalign-start mx-3 ">
      <div class="product-item mx-2 mt-3" v-for="(item, i) in searchResult" :key="i">
        <div class="product-item__info position-relative">
          <img :src="item.photo" alt="" class="product-icon" />
          <div class="product-item__name text-center">
            {{ item.name }}
          </div>
          <div class="number-of-product text-center mt-3">
            {{ item.measurements }}
          </div>
          <div
            class="product-price__discount ajustify-center"
            v-if="item.offer"
          >
            <div class="discout-price">&#2547; {{ item.offer }}</div>
            <div class="real-price">&#2547; {{ item.price }}</div>
          </div>
          <div class="product-price__real text-center" v-else>
            &#2547; {{ item.offer }}
          </div>

          <div class="price-overflow position-absolute">
            <div>
              <h1
                @click="addCartHandle(item)"
                v-if="item.quantity == 0"
                class="overflow-title pt-4"
              >
                Add To Shopping Bag
              </h1>
              <div v-else>
                <div class="d-flex mt-5 ml-4">
                  <span
                    @click="$store.commit('cartQunatityMinus', item._id)"
                    class="add__minus pl-2 pt-0 mr-2"
                    >-</span
                  >
                  <span class="qyntty text-center">{{ item.quantity }}</span>
                  <span
                    @click="$store.commit('cartQunatityPlus', item._id)"
                    class="add__plus"
                    >+</span
                  >
                </div>
                <p class="mt-4 ml-5 pl-4 d-block bag-text">in bag</p>
              </div>
            </div>
            <button @click="detailHandelar(item)" class="overflow-btn__details">
              Details
            </button>
          </div>
        </div>
        <div class="cart-add__btn">
          <button
            @click="addCartHandle(item)"
            v-if="item.quantity == 0"
            class="item-item__cart--btn"
          >
            Add To Cart
          </button>
          <div class="d-flex mt-2" v-else>
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
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
  }),
  computed: {
    ...mapGetters(['searchResult']),
  },
   head() {
    return {
      title: `${this.$route.params.searchResult
        .split("-")
        .join(" ")} - SureBuy.Com`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  methods: {
    addCartHandle(item) {
      item.quantity = 1;
      this.$store.commit("addToCart", item);
    },
    detailHandelar(item) {
       this.$bvModal.show("detail-modal");
        this.detailsModalInfo = item;
    },
     searchResults() {
      const name = this.$route.params.searchResult.split(" ").join("-");
      this.$store.dispatch('getSearchResult',name)
      // const ip = await this.$axios.$get(`/search/${name}`);
      // console.log(ip);
      // this.searchResult = ip;
    },
  },
  mounted() {
    this.searchResults();
  },
  watch: {
    // $route() {
    //   this.searchResult();
    // },
  },
};
</script>
<style>
.product-item {
  width: 202px;
  height: 342px;
}

.product-icon {
  margin: auto;
  display: block;
}
.product-price__real {
  font-weight: 700;
  text-align: center;
  padding-top: 5px;
  font-size: 18px;
}
.real-price {
  margin: 11px 6px;
  text-decoration: line-through;
  padding-top: 0;
  font-size: 12px;
}
.discout-price {
  font-weight: 700;
  text-align: center;
  padding-top: 5px;
  font-size: 18px;
  color: red;
}
.product-item__info:hover .price-overflow {
  display: block;
}
.price-overflow {
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(40, 40, 40, 0.75);
  top: 0;
  border-radius: 6px;
}
.overflow-title {
  height: 100px;
  width: 125px;
  margin: 30px auto 0;
  color: #fff;
  font-size: 22px;
  line-height: 34px;
  text-align: center;
}
.overflow-btn__details {
  bottom: 0;
  width: 100%;
  position: absolute;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
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
.bag-text {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
}
</style>
