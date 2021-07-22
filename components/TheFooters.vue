<template>
  <div class="footers-bar d-flex">
    <button class="footer-chat" @click="$emit('liveChatCollapseHandelar')"></button>
    <div class="start-shop" @click='$emit("expandHandelar")'>Start Shopping</div>
    <button class="footer-cart" @click="$emit('cartCollapseHandelar')"></button>
  </div>
</template>

<style>
.footers-bar {
    visibility: hidden;
  height: 47px;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
}
.footer-chat {
  background: url("~assets/img/footer-chat-icon.PNG");
  left: 0;
  top: initial;
  bottom: 0;
  width: 60px;
  height: 47px;
  border-radius: 0;
}
.start-shop {
  flex-grow: 1;
  height: 47px;
  text-align: center;
  background: #ff6f71;
  border: none;
  padding: 10px;
  font-size: 20px;
  color: #ffff;
}
.footer-cart {
  background-image: url("~assets/img/item-cart-bag.PNG");
  /* background: #ffff; */
  background-repeat: no-repeat;
  background-position: center;
  /* position: fixed !important; */
  bottom: 0 !important;
  top: initial;
  right: 0;
  width: 60px;
  height: 47px;

  z-index: 11;
}
@media screen and (max-width: 776px){
    .footers-bar {
        visibility: visible;
    }
}
</style>
