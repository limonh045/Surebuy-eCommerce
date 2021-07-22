<template>
  <div>
    <div
      class="live-chat__open"
      v-if="!togglelivechat"
      @click="$emit('liveChatHandle')"
    >
      <fa-icon icon="comments"></fa-icon>
      Live Chat
    </div>
    <div class="conversion-area" v-show="togglelivechat">
      <div class="chat-people p-3">
        <div class="d-flex">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
          ></b-avatar>
          <div class="ml-4">
            <div class="chat-us__alert pb-1">Question? Chat With Us</div>
            <div class="online-now">Support Is Online</div>
            <div>
              <b-avatar class="my-1" size="sm" variant="light"
                ><fa-icon class="text-dark" icon="search"></fa-icon
              ></b-avatar>
              <b-avatar class="my-1" size="sm"
                ><fa-icon class="text-white" icon="envelope"></fa-icon
              ></b-avatar>

              <b-avatar class="my-1" size="sm"
                ><fa-icon class="text-white" icon="comment"></fa-icon
              ></b-avatar>
            </div>
          </div>
          <button class="live-chat__close" @click="$emit('liveChatHandle')">
            <fa-icon icon="times"></fa-icon>
          </button>
        </div>
      </div>
      <div class="convertion-text">
        <div class="send-msg d-flex">
          <input
            type="text"
            placeholder="composse message"
            class="send-msg__input"
            v-model="messages"
          />
          <div class="send-emogi">
            <fa-icon icon="surprise"></fa-icon>
            <fa-icon icon="plus-circle" v-if="messages == ''"></fa-icon>
            <fa-icon icon="paper-plane" class="mr-2" v-else></fa-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["togglelivechat"],
  data: () => ({
    messages: "hi"
  })
};
</script>
<style>
.live-chat__open {
  width: 230px;
  height: 40px;
  background: #ff8641;
  position: fixed;
  bottom: 0;
  right: 34px;
  color: #fff;
  font-weight: 700;
  z-index: 999;
  cursor: pointer;
  -webkit-box-shadow: 0 0 4px 0 #ff8641;
  -moz-box-shadow: 0 0 4px 0 #ff8641;
  box-shadow: 0 0 4px 0 #983903;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  -webkit-transition: all 300ms ease-in-out;
  transition: all 300ms ease-in-out;
  float: right;
  font-size: 17px;
  line-height: 40px;
}
.live-chat__open svg {
  float: left;
  width: 38px;
  height: 38px;
  fill: #fff;
  margin-right: 10px;
  margin-left: 45px;
}
.live-chat__open:hover {
  background: #ef691e;
  height: 42px;
}
.conversion-area {
  width: 360px;
  z-index: 99999;
  height: 34rem;
  position: fixed;
  background: #e76060;
  bottom: 0;
  right: 32%;
  box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.15) !important;
}
.chat-us__alert {
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #ffffff;
}
.online-now {
  font-size: 11.6px;
  color: #fff;
  line-height: 16px;
  opacity: 0.8;
}
.live-chat__close {
  padding: 10px !important;
  position: absolute !important;
  right: 12px !important;
  top: 10px !important;
  transition: transform 0.2s ease-in-out;
  z-index: 99;
  width: 44px;
  height: 44px;
  display: block;
  background: #e76060;
  border: none;
}
.live-chat__close:hover {
  cursor: pointer;
  transform: scale(1.1);
  background: #ff686e;
}
.live-chat__close svg {
  font-size: 22px;
}
.convertion-text {
  height: 100%;
  background: #f5f8fb !important;
}
.send-msg {
  height: 60px;
  background: rgba(255, 255, 255, 1);
  bottom: 0;
  position: fixed;
}
.send-msg__input {
  border: none;
  padding: 10px 15px;
  width: 282px;
  flex-grow: 1;
  outline: none;
  font-size: 16px;
}
.send-emogi svg {
  font-size: 30px;
  margin-top: 14px;
  margin-right: 6px;
}
@media screen and (max-width: 776px) {
  .live-chat__open {
    visibility: hidden;
  }
}
@media screen and (max-width: 512px) {
  .conversion-area {
    width: 100%;

    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .send-msg {
    right: 0;
    left: 0;
  }
}
</style>
