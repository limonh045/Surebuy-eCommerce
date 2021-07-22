<template>
  <div>
    <div class="catagory-banner ajustify-center">
      <img v-for="(banar, j) in pageInfo.banner" :key="j" :src="banar" alt="" />
    </div>

    <div class="broadcumbs ml-4 my-3">
      <nuxt-link
        class="broadcumbs-link"
        v-for="(broad, i) in pageInfo.bread"
        :key="i"
        :to="`/${broad.split(' ').join('-')}`"
      >
        {{ broad }} <span></span
      ></nuxt-link>
    </div>

    <div class="catagory-name d-flex">
      <hr class="float-left ml-4" />
      <div class="cat d-inline">{{ pageInfo.catagory }}</div>
      <hr class="float-right mr-4" />
    </div>

    <div
      class="aalign-start px-3"
      v-if="menus && !isItem"
    >
      <nuxt-link
        class="product-catagory__link mx-2"
        :to="subMenu.catagory.split(' ').join('-')"
        v-for="(subMenu, i) in menus"
        :key="i"
      >
        <img :src="subMenu.tumbail" alt="" class="product-catagory__icon" />
        <div class="product-catagory__name">{{ subMenu.catagory }}</div>
      </nuxt-link>
    </div>

    <div class="aalign-start mx-3 md-show" v-else>
      <div class="product-item  mx-2 mt-3" v-for="(item, i) in items" :key="i">
        <div class="product-item__info position-relative" style="height:320px">
          <img :src="item.photo" alt="" class="product-icon-cata" />
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
                    @click="
                      $store.commit('cartQunatityMinus', item._id),
                        minusQyn(item._id)
                    "
                    class="add__minus pl-2 pt-0 mr-2"
                    >-</span
                  >
                  <span class="qyntty text-center">{{ item.quantity }}</span>
                  <span
                    @click="$store.commit('cartQunatityPlus', item._id),addQyn(item._id)"
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
              @click="
                $store.commit('cartQunatityMinus', item._id), minusQyn(item._id)
              "
              class="cart-add__plus"
            >
              -
            </button>
            <button
              @click="
                $store.commit('cartQunatityPlus', item._id), addQyn(item._id)
              "
              class="cart-add__qyn"
            >
              {{ item.quantity }} in bag
            </button>
            <button
              @click="
                $store.commit('cartQunatityPlus', item._id), addQyn(item._id)
              "
              class="cart-add__minus"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <!-- -----------details modal----------- -->
    </div>
    <b-modal id="detail-modal" hide-header hide-footer hide-header-close>
      <fa-icon
        icon="times"
        class="modal-cancel-btn float-right"
        @click="$bvModal.hide('detail-modal')"
      ></fa-icon>

      <div class="aalign-start">
        <div class="product-show__img p-2 w-50">
          <img :src="detailsModalInfo.photo" alt="" class="" />
        </div>
        <div class="product-show__info p-2 w-50">
          <div class="product-show__info--name">
            {{ detailsModalInfo.name }}
          </div>
          <div class="product-show__info--weight">
            {{ detailsModalInfo.measurements }}
          </div>
          <div>
            <div v-if="detailsModalInfo.offer">
              <div class="product-price__discount--info">
                &#2547; {{ detailsModalInfo.offer }}
              </div>
              <div class="product-price__regular">
                &#2547; {{ detailsModalInfo.price }}
              </div>
            </div>
            <div v-else class="product-price__reals">
              &#2547; {{ detailsModalInfo.offer }}
            </div>
          </div>
          <div class="aalign-start ">
            <div class="quytity-count aspace-between mr-4 mt-2">
              <div class="d-flex">
                <button
                  @click="
                    $store.commit('cartQunatityMinus', detailsModalInfo._id),
                      minusQyn(item._id)
                  "
                  class="cart-qyntity__minus"
                  v-if="detailsModalInfo.quantity == 0"
                  disabled
                >
                  <fa-icon icon="minus"></fa-icon>
                </button>
                <button
                  v-else
                  @click="
                    $store.commit('cartQunatityMinus', detailsModalInfo._id),
                      minusQyn(item._id)
                  "
                  class="cart-qyntity__minus"
                >
                  <fa-icon icon="minus"></fa-icon>
                </button>
              </div>
              <div class="qyntity-number d-inline-bloc">
                {{ detailsModalInfo.quantity }}<br />
                <span class="cart-bag-in">in bag</span>
              </div>
              <button
                v-if="detailsModalInfo.quantity === 0"
                @click="addCartHandle(detailsModalInfo)"
                class="cart-qyntity__plus"
              >
                <fa-icon icon="plus"></fa-icon>
              </button>
              <button
                v-if="detailsModalInfo.quantity !== 0"
                @click="
                  $store.commit('cartQunatityPlus', detailsModalInfo._id),
                    addQyn(item._id)
                "
                class="cart-qyntity__plus"
              >
                <fa-icon icon="plus"></fa-icon>
              </button>
            </div>
            <div
              @click="$bvModal.hide('detail-modal')"
              class="cart-buynow mt-2"
            >
              Buy Now
            </div>
          </div>
          <hr />
          <p>
            Premium quality locally sourced. Meat, such as beef, is mainly
            composed of protein. Usually eaten as roasts, ribs, or steaks, beef
            is also commonly ground or minced. Patties of ground beef are often
            used in hamburgers. Processed beef products include corned beef,
            beef jerky, and sausages. Fresh lean beef is rich in various
            vitamins and minerals, especially iron and zinc, and is therefore
            recommended as part of a healthy diet.
          </p>
        </div>
      </div>

      <payment-way class="mt-5" />
    </b-modal>
  </div>
</template>
<script>
import DetailsModal from "../components/DetailsModal.vue";
import { mapGetters } from "vuex";
export default {
  components: { DetailsModal },
  data: () => ({
    menuCatagory: [],
    detailsModalInfo: [],
    pageInfo: [],
  }),
  computed: {
    ...mapGetters(['menus','items','isItem']),
  },
  methods: {
    detailHandelar(item) {
      this.$bvModal.show("detail-modal");
      this.detailsModalInfo = item;
    },
    // itemQuntityHandelar(v) {
    //   var selectItem = this.productItems.find((p) => p.id == v);
    //   if (selectItem.quantity == 0) {
    //     return;
    //   } else {
    //     selectItem.quantity--;
    //   }
    // },
    addCartHandle(item) {
      item.quantity = 1;
      this.$store.commit("addToCart", item);
    },
    async getData() {
      const cata = this.$route.path.split(" ").join("-");
      const ip = await this.$axios.$get(`/pageinfo${cata}`);
      this.pageInfo = ip[0];
      this.$store.dispatch("getItem", cata);
      // const item = await this.$axios.$get(`/item${cata}`);

      // if (item && item.items) {
      //   item.item.forEach((e) => {
      //     this.cartItemData.forEach((c) => {
      //       if (c && c._id == e._id) {
      //         e.quantity = c.quantity;
      //       }else{
      //          e.quantity = 0
      //       }
      //     });
      //     this.items.push(e);
      //   });
      // } else {
      //   this.menus = item;
      // }
    },
    addQyn(id) {
      // this.items.find((e) => e._id == id).quantity++;
    },
    minusQyn(id) {
      // this.items.find((e) => e._id == id).quantity--;
    },
  },
  head() {
    return {
      title: `${this.$route.params.catagory
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
  mounted() {
    this.getData();
  },
};
</script>
<style>
.catagory-banner img {
  max-width: 47%;
  margin: 0 2px;
}

.catagory-name hr {
  flex-grow: 1;
}
.cat {
  text-align: center;
  padding: 0px;
  margin: 0 20px;
  font-size: 23px;
  color: #666;
  text-transform: capitalize;
}

.broadcumbs-link {
  text-decoration: none;
  font-size: 13px;
  font-weight: 300;
  padding-left: 4px;
  color: #615e58;
}

.broadcumbs-link span {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  transform: rotate(-45deg);
  margin: 0 10px;
}
.broadcumbs-link:last-child {
  font-weight: 700;
}
.broadcumbs-link:last-child span {
  visibility: hidden;
}
.product-catagory__link,
.product-catagory__link:hover {
  width: 200px;
  color: #666;
  font-family: 300;
  text-decoration: none;
}
.product-catagory:hover {
  color: #666;
}
.product-catagory__icon {
  height: 200px;
}
.product-catagory__name {
  font-size: 16px;
  text-align: center;
  font-family: 300;
  text-transform: capitalize;
}

.product-item {
  width: 202px;
  height: 342px;
}

.product-icon-cata {
  margin: auto;
  display: block;
  height: 200px;
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

/* ============details modal=============== */

#detail-modal___BV_modal_content_ {
  margin: auto;
  max-width: 980px;
  top: 50px;
}
#detail-modal {
  padding: 0 !important;
}
.product-show__img {
  border: red;
}
.product-show__info--name {
  letter-spacing: normal;
  word-wrap: break-word;
  font-size: 2.2em;
  color: #000;
  line-height: 30px;
  margin: 0 30px 10px 0;
}
.product-show__info--weight {
  font-size: 1.4em;
  color: #888;
}
.product-price__discount--info,
.product-price__reals {
  font-weight: 700;
  color: #444;
  font-size: 2.5em;
  display: inline;
}
.product-price__regular {
  text-decoration: line-through;

  font-weight: 700;
  display: inline;
}
.quytity-count {
  width: 55%;
  min-width: 220px;
  border-radius: 4px;
  border: 1px solid #cdcdcd;
}
.cart-qyntity__minus,
.cart-qyntity__plus {
  width: 60px;
  cursor: pointer;
  outline: 0;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: 0 solid #d2d1d1;
  background: #f4f3f3;
  box-shadow: 0 0 2px #ccc;
  font-size: 40px;
  line-height: 30px;
  color: #818181;
  transition: 300ms;
}
.cart-qyntity__minus:hover,
.cart-qyntity__plus:hover {
  background: #ffff;
}
.qyntity-number {
  height: 65px;
  padding: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 26px;
  color: #818181;
}
.cart-bag-in {
  font-size: 12px;
  text-align: center;

  font-weight: 700;
}
.cart-buynow {
  border: 0;
  border-radius: 3px;
  padding: 15px 18px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 10px;
  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.15);
  background-color: #fb7679;
  outline: 0;
  font-size: 16px;
  width: 35%;
  min-width: 150px;
  float: right;
  height: 66px;
  text-align: center;
  transition: 300ms;
  cursor: pointer;
}
.cart-buynow:hover {
  background-color: #fa4449;
}
.product-show__img,
.product-show__info {
  min-width: 260px;
}

@media screen and (max-width: 990px) {
  .catagory-name hr {
    width: 17%;
  }
  .cat {
    font-size: 17px;
  }
}
@media screen and (min-width: 576px) {
  .modal-md {
    max-width: 980px !important;
  }
}
@media screen and (max-width: 576px) {
  .md-show {
    justify-content: center;
  }
}
</style>
