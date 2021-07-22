<template>
  <div>
    <b-modal id="detail-modal" hide-header hide-footer hide-header-close>
      <fa-icon
        icon="times"
        class="modal-cancel-btn float-right"
        @click="$bvModal.hide('detail-modal')"
      ></fa-icon>

      <div class="aalign-start">
        <div class="product-show__img p-2 w-50">
          <img
            src="https://cdn.chaldal.net/_mpimage/molfix-baby-diaper-belt-1-new-born-2-5-kg-44-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D67515&q=best&v=1&m=400&w=200&webp=1"
            alt=""
            class=""
          />
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
                    $store.commit('cartQunatityMinus', detailsModalInfo.id)
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
                    $store.commit('cartQunatityMinus', detailsModalInfo.id)
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
                @click="$store.commit('cartQunatityPlus', detailsModalInfo.id)"
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
export default {
  props: ["detailsModalInfo"]
};
</script>
<style scoped>
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
  min-width: 300px;
}

@media screen and (min-width: 576px) {
  .modal-md {
    max-width: 980px !important;
  }
}
</style>
