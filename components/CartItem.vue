<template>
  <div>
    <div
      class="cart-open__btn"
      v-show="!cartopen"
      @click="$emit('cartopenhandelar')"
    >
      <div class="cart-bag__icon">
        <img
          class="cart-bag__icon--img"
          src="~assets/img/item-cart-bag.PNG"
          alt=""
        />
        <div class="cart-bag__qyntity text-center">
          {{ cartItemData.length }} ITEM
        </div>
      </div>
      <div class="cart-item__price mt-1 text-center">&#2547; {{ total }}</div>
    </div>

    <div class="cart-item">
      <div class="cart-item__bag d-flex">
        <img
          class="cart-itrm__bag--icon"
          src="~assets/img/item-cart-bag.PNG"
          alt=""
        />
        <div class="cart-item__number">{{ cartItemData.length }} ITEMS</div>
        <button @click="$emit('cartopenhandelar')" class="cart-item__close">
          CLOSE
        </button>
      </div>

      <div class="delivery-offer">
        <div v-if="(400 / total) * 100 < 100">
          <div class="delivery-offer__persent--full"></div>
          <div class="deliver-offer__info">
            You have reduced delivery charge
          </div>
          <span class="offer-money"> &#2547; 9</span>
        </div>
        <div v-else>
          <div
            class="delivery-offer__persent"
            :style="{ width: (total / 400) * 100 + '%' }"
          ></div>
          <div class="deliver-offer__info">
            Shop ৳ {{ 400 - total }} more and save ৳10 fee
          </div>
          <span class="offer-money"> &#2547; 19</span>
        </div>
      </div>

      <div>
        <div class="cart-empty mt-5 pt-5" v-if="cartItemData.length == 0">
          <img
            class="d-block m-auto"
            src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1635/Default/components/header/ShoppingCart/images/emptyShoppingBag.png?q=low&alpha=1"
            alt=""
          />
          <div class="cart-empty__text text-center px-3">
            Your shopping bag is empty. Start shopping
          </div>
          <div class=" cart-empty__text contact-us text-center">
            Phone : 0188-1234567
          </div>
        </div>
        <div
          class="cart-added d-flex"
          v-else
          v-for="(cartItem, i) in cartItemData"
          :key="i"
        >
          <div class="cart-quantity__control my-auto">
            <button
              @click="$store.commit('cartQunatityPlus', cartItem._id)"
              class="cart-added__control--up"
            >
              <fa-icon icon="angle-up"></fa-icon>
            </button>
            <div class="cart-item__quantity text-center">
              {{ cartItem.quantity }}
            </div>
            <div>
              <button
                disabled
                v-if="cartItem.quantity == 1"
                @click="$store.commit('cartQunatityMinus', cartItem._id)"
                class="cart-added__control--up"
              >
                <fa-icon icon="angle-down"></fa-icon>
              </button>
              <button
                v-else
                @click="$store.commit('cartQunatityMinus', cartItem._id)"
                class="cart-added__control--up"
              >
                <fa-icon icon="angle-down"></fa-icon>
              </button>
            </div>
          </div>
          <img
            class="cart-added__icon my-auto mx-2"
            :src="cartItem.itemLogo"
            alt=""
          />
          <div class="cart-added__info">
            <div class="cart-added__name">
              {{ cartItem.name }}
            </div>
            <div class="cart-added__net-price">{{ cartItem.measurements }}</div>
          </div>
          <div class="mx-2 d-flex">
            <div class="my-auto" v-if="cartItem.offer">
              <div class="cart-offer__net--price text-danger">
                &#2547;{{ cartItem.quantity * cartItem.offer }}
              </div>
              <div class="cart-added__net--price">
                &#2547;{{ cartItem.quantity * cartItem.price }}
              </div>
            </div>
            <div v-else class="cart-added__all--price my-auto ">
              &#2547;{{ cartItem.quantity * cartItem.price }}
            </div>
          </div>
          <div
            @click="$store.commit('deleteCartItem', cartItem._id)"
            class="cart-added__remove my-auto pt-3 mx-2"
          >
            x
          </div>
        </div>
      </div>

      <div class="cart-item__footer">
        <div class="special-card py-2">
          <div @click="specialCode = !specialCode" class="card-open__toggle">
            <fa-icon icon="angle-up" v-show="!specialCode"></fa-icon>
            <fa-icon icon="angle-down" v-show="specialCode"></fa-icon>
            Have A Special Card?
          </div>
          <div class="ajustify-center" v-show="specialCode">
            <input
              type="text"
              placeholder="Special Code"
              class="special-code__input"
            />
            <button class="code-go">Go</button>
            <button class="code-cancel">Cancel</button>
          </div>
        </div>
        <div class="place-order ajustify-center" v-if="cartItemData.length > 0">
          <div class="place-order__text" @click="placeOrder">Place Order</div>
          <div class="all-price">&#2547; {{ total }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["cartopen"],
  data: () => ({
    deliveryOffer: 100,
    specialCode: false,
  }),
  computed: {
    ...mapGetters(["cartItemData","signNum", "totalCartItemPrice"]),
    total() {
      var total = 0;
      for (var i = 0; i < this.cartItemData.length; i++) {
        var item = this.cartItemData[i];
        if (item.offer) {
          total += item.offer * item.quantity;
        } else {
          total += item.price * item.quantity;
        }
      }
      return total;
    },
  },
  methods: {
   async placeOrder() {
      if (!this.signNum) {
         this.$bvModal.show('signup')
         return;
      }
      alert(this.cartItemData.length +' product order successfuly ')
      
      // for (const i of this.cartItemData) {
      //   i.orderFrom = this.signNum
      // }
      // await this.$axios.$post(`/orders`,this.cartItemData);
       this.$store.commit("clearCart");
    },
  },
  mounted() {},
};
</script>
<style scoped>
.cart-open__btn {
  margin-left: -20px;
  opacity: 0.7;
  cursor: pointer;
  position: fixed;
  width: 65px;
  height: 75px;
  background: #fff;
  right: 0;
  top: calc(110px + 30%);
  box-shadow: 0 0 16px -1px rgba(0, 0, 0, 0.75);
  transition: 0.1s;
}
.cart-open__btn:hover {
  opacity: 1;
}
.cart-bag__icon {
  height: 50px;
  background: #55584d;
  width: 100%;
}
.cart-bag__icon--img {
  margin: 7px 5px 0 22px;
}
.cart-bag__qyntity {
  color: #fdd670;
  margin-top: -2px;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  padding-top: 0;
}
.cart-item__price {
  font-weight: 700;
}

.cart-item__bag {
  width: 100%;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  background-color: #e4e0e1;
  height: 39px;
  box-sizing: border-box;
  display: none;
  padding: 0 0 0 20px;
}
.cart-itrm__bag--icon {
  margin-top: 4px;
  width: 22px;
}
.cart-item__number {
  text-align: left;
  width: 80px;
  font-weight: 700;
  color: #4f4f4f;
  margin: 7px 0 0 8px;
}
.cart-item__close {
  display: block;
  float: right;
  background: 0 0;
  border: 1px solid #62615f;
  padding: 1px 8px 5px;
  /* margin-right: 3px; */
  margin-top: 6px;
  color: #4f4f4f;
  height: 24px;
  font-size: 12px;
  position: absolute;
  right: 10px;
}
.cart-item__close:hover {
  background: #bdbaba;
}
.contact-us {
  margin-top: 9.5rem;
}
.delivery-offer {
  font-weight: 700;
  position: absolute;
  color: #fff;
  width: 100%;

  height: 34px;
  background-color: #7a7879;
  position: relative;
}
.deliver-offer__info {
  line-height: 35px;
  padding-left: 5px;
  position: absolute;
}
.delivery-offer__persent {
  height: 34px;
  transition: 300ms;
  background: red;
  position: absolute;
}
.offer-money {
  position: absolute;
  right: 10px;
  top: 4px;
}
.delivery-offer__persent--full {
  height: 34px;
  background: #97cd6d;
  width: 100%;
  position: absolute;
}

.cart-empty__text {
  font-size: 17px;
  color: #aaa;
}
.cart-added {
  border-bottom: 1px solid #ebebeb;
}

.cart-added__control--up {
  background: transparent;
  opacity: 0.35;
}
.cart-added__control--up:hover {
  opacity: 1;
}

.cart-added__net-price {
  color: #9a9999;
  font-size: 10px;
  font-weight: 700;
}
.cart-added__icon {
  max-width: 40px;
  max-height: 40px;
}
.cart-added__name {
  text-transform: capitalize;
}
.cart-offer__net--price {
  font-size: 12px;
  position: absolute;
  right: 40px;
  margin-top: -24px;
}
.cart-added__all--price {
  font-size: 12px;
  position: absolute;
  right: 40px;
}
.cart-added__net--price {
  text-decoration: line-through;
  position: absolute;
  right: 40px;
}
.cart-added__remove {
  font-size: 15px;

  cursor: pointer;
  position: absolute;
  right: 8px;
}
.cart-added__remove:hover {
  color: red;
}
.card-open__toggle svg {
  border: 1px solid #787878;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.special-card {
  position: absolute;
  bottom: 151px;
  width: 100%;
  text-align: center;
  color: #787878;
  align-items: center;
  border-width: 1px 0;
  border-style: solid;
  border-color: #ededed;
  background: #f7f7f7;
}
.special-code__input {
  background: #e3e3e3;
  border: 0;
  font-size: 14px;
  border-radius: 5px;
  height: 33px;
  width: 180px;
  text-align: center;
  outline: 0;
  float: left;
  margin: 10px 8px 0 0;
}
.code-go {
  background: #ff686e;
  color: #fff;
  font-size: 14px;
  text-transform: none;
  border: none;
  border-radius: 3px;
  line-height: 28px;
  width: 50px;
  float: left;
  margin: 11px 0 0 8px;
  -webkit-box-shadow: 0 0 5px #ccc;
  -moz-box-shadow: 0 0 5px #ccc;
  box-shadow: 0 0 5px #ccc;
}
.code-cancel {
  background: transparent;
}
.place-order {
  position: absolute;
  bottom: 101px;
  width: 100%;
}
.place-order__text {
  width: 50%;
  height: 40px;
  background: #ff8182;
  border: none;
  color: #fff;
  font-size: 17px;
  line-height: 37px;
  padding: 0;
  text-align: center;
  box-shadow: 0 0 3px #b1aeae;
  border-radius: 2px;
  cursor: pointer;
}
.all-price {
  background: #e04f54;
  float: right;
  height: 100%;
  text-align: center;
  width: 40%;
  font-size: 17px;
  color: #ffff;
  margin-right: -5px;
  line-height: 40px;
  border-radius: 0 2px 2px 0;
}
</style>
