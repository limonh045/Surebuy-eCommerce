<template>
  <div>
    <the-navbar
      :toggleHandelar="expandShow"
      @expandHandle="expandShow = !expandShow"
    />
    <div
      class="expand-backdrop"
      @click="expandShow = !expandShow"
      v-show="expandShow"
    ></div>

    <div class="d-flex">
      <div class="slidebar " :class="{ expanSlide: !expandShow }">
        <menu-slider />
      </div>

      <div
        class="maincontent"
        :class="{ expanMain: expandShow, cartbarexpand: cartSlideShow }"
      >
        <Nuxt />
        <live-chat
          @liveChatHandle="livechatShow = !livechatShow"
          :togglelivechat="livechatShow"
        />
      </div>

      <div class="cartbar " :class="{ cartopen: !cartSlideShow }">
        <cart-item
          @cartopenhandelar="cartSlideShow = !cartSlideShow"
          :cartopen="cartSlideShow"
        />
        <div
          class="cart-close__btn"
          v-show="cartSlideShow"
          @click="cartSlideShow = !cartSlideShow"
        >
          <fa-icon icon="chevron-right"></fa-icon>
        </div>
      </div>
    </div>

    <the-footers
      @cartCollapseHandelar="cartSlideShow = !cartSlideShow"
      @liveChatCollapseHandelar="livechatShow = !livechatShow"
      @expandHandelar="expandShow = !expandShow"
    />
  </div>
  <!-- <the-footer /> -->
</template>
<script>
import TheFooter from "../components/home/TheFooter.vue";
export default {
  components: { TheFooter },
  data: () => ({
    expandShow: false,
    livechatShow: false,
    cartSlideShow: false
  }),
  methods: {},
  watch: {
    $route() {
      var mq = window.matchMedia("(max-width: 760px)");
      if (mq.matches) {
        this.expandShow = false;
      }
    },
  },
};
</script>

<style>
.slidebar {
  z-index: 2;
  width: 220px;
  position: fixed;
  transition: all 300ms;
  background: white;
  color: black;
  overflow-y: auto;
  border: 1px solid #eee;
  height: 100%;
}

.maincontent {
  width: 100%;
  flex-grow: 10;
  transition: all 300ms;
}

.expanSlide {
  margin-left: -290px;
}

.cartopen {
  margin-right: -333rem;
}

.cartbarexpand {
  margin-right: 320px;
}

.cartbar {
  z-index: 2;
  width: 320px;
  position: fixed;
  right: 0;
  transition: 300ms;
  background: white;
  color: black;
  overflow-y: auto;
  border: 1px solid #eee;
  height: 100%;
  transition: all 220ms;
}

/* =====cart button =========== */

.cart-close__btn {
  margin-left: -16px;
  position: fixed;
  cursor: pointer;
  top: 45%;
  height: 70px;
  width: 16px;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  color: #fff;
  background-color: #b7b7b7;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.cart-close__btn svg {
  font-size: 23px;
  margin-top: 20px;
}
@media screen and (min-width: 776px) {
  .expanMain {
    margin-left: 220px;
  }
  .cartbarexpand {
    margin-right: 320px;
  }
}
@media screen and (max-width: 996px) {
  .cartbar {
    width: 100%;
  }
}

@media screen and (max-width: 776px) {
  .cart-open__btn {
    visibility: hidden;
  }
  .expand-backdrop {
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .cartbarexpand {
    margin-right: 0;
  }
}
</style>
