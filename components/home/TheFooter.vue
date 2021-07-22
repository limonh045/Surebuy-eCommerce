<template>
  <div>
    <div class="corporate-customar pb-5">
      <div class="corporated">
        <fa-icon
          class="m-auto color-white d-block pt-5 briefcase-icon "
          icon="briefcase"
        ></fa-icon>
        <h2 class="text-center color-white">Do you own a business?</h2>
        <h3 class="text-center mb-4">Become a Corporate Customer</h3>
        <div class="ajustify-center">
          <div class="corporate-info">
            <fa-icon class="check-sign" icon="check"></fa-icon>
            <fa-icon
              class="mb-2 color-white corporate-info__icon"
              icon="money-check"
            ></fa-icon>
            <p class="corporate-info__des text-center color-white">
              Special Corporate Prices
            </p>
          </div>
          <div class="corporate-info">
            <fa-icon class="check-sign" icon="check"></fa-icon>
            <fa-icon
              class="mb-2 color-white corporate-info__icon"
              icon="user"
            ></fa-icon>
            <p class="corporate-info__des text-center color-white">
              24 Hour Support
            </p>
          </div>
          <div class="corporate-info">
            <fa-icon class="check-sign" icon="check"></fa-icon>
            <fa-icon
              class="mb-2 color-white corporate-info__icon"
              icon="truck"
            ></fa-icon>
            <p class="corporate-info__des text-center color-white">
              Flexible Free Delivery
            </p>
          </div>
        </div>
        <nuxt-link class="corporate-info__link" to="/find-more">
          FIND OUT MORE</nuxt-link
        >
      </div>
    </div>
    <!-- ----------END CORPORATE----------- -->
    <div class="get-app pt-5 ">
      <div class="aspace-evenly">
        <div class="get-app__area" >
          <h2 class="text-center my-3 mb-5">Be a part of our family</h2>
          <div class="get-app__area--input mt-3 mx-3 d-flex">
            <img class="bd-flag" src="~assets/img/bd-flag.png" alt="" />
            <p class="m-auto plus">+</p>
            <input class="input-bar" v-model="getAppNumber" type="text" />
            <button class="input-bar__btn">Get App</button>
          </div>
          <label class="mt-2 mx-3 input-label" for="" v-if="getAppNumber == 88"
            >e.g. +8801672955886</label
          >
          <div class="store-logo my-3">
            <img src="~assets/img/play-store.png" alt="" />
            <img src="~assets/img/app-store.png" alt="" />
          </div>
        </div>
        <img class="mobile-logo" alt="" src="~assets/img/mobile-logo.png" />
      </div>
    </div>
    <!-- -----------End Get App--------------- -->
    <div class="service-info aspace-evenly pb-3">
      <img
        class=" service-info__img"
        alt=""
        src="~assets/img/chaldal_new_warehouses.png"
      />
      <div class="service-info__title mt-5">
        <h1 class="color3">Dhaka</h1>
        <h1 class="color-white">Total Orders Placed</h1>
        <h1 class="color3">2,242,108</h1>
        <h1 class="color-white">Total Savings</h1>
        <h1 class="color3">৳190,579,180</h1>
        <h1 class="color-white">Time Saved</h1>
        <h1 class="color3">1,681,581 hrs</h1>
      </div>
    </div>
    <!-- -----------ENd service info---------- -->

  </div>
</template>
<script>
export default {
  data: () => ({
    getAppNumber: 88
  })
};
</script>
<style>
.corporate-customar {
  background-image: url(https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1616/Default/stores/chaldal/components/landingPage2/LandingPage/images/how_to_order_chaldal/tutorial-2.jpg?q=best&webp=1);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.corporate-customar::before {
  background: linear-gradient(to right, #00728f 0, #00566b 100%);

  content: " ";
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.corporated {
  position: relative;
}
.briefcase-icon {
  font-size: 80px;

  box-sizing: content-box;
}
.corporate-customar h3 {
  color: #fdd670;
}
.corporate-info {
  position: relative;
  padding: 15px;
  margin: 0 15px 15px;
  display: inline-block;
  border-radius: 5px;
  width: 200px;
  background-color: rgba(0, 0, 0, 0.2);
}
.corporate-info__icon {
  display: block;
  margin: auto;
  font-size: 60px;
  box-sizing: content-box;
  padding: 12px;
}
.corporate-info__des {
  font-size: 15px;
}
.check-sign {
  position: absolute;
  font-size: 19px;
  background: #82a900;
  color: #fff;
  border-radius: 5px;
  top: -7px;
  left: 13px;
  padding: 3px;
  box-sizing: content-box;
}
.corporate-info__link {
  text-decoration: none;
  background: #ff686e;
  padding: 8px 15px 9px;
  border-radius: 2px;
  color: #ffff;
  font-size: 14px;
  transition: all 300ms ease-in-out;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  margin: auto;
  display: table;
}
.corporate-info__link:hover {
  background-color: #ff353d;
  color: #ffff;
}

.get-app__area--input {
  border-radius: 6px;
  background: #eee;

  position: relative;
}
.input-bar {
  border: none;
  font-size: 14px;
  padding-left: 64px;
  outline: none;
  width: 243px;
  background: transparent;
  border-radius: 6px 0 0 6px;
}
.input-bar:active,
.input-bar:focus {
  border: 2px solid #ff686e;
}

.input-bar__btn {
  background-color: #ff686e;
  border: 0;
  border-radius: 0 6px 6px 0;
  color: #fff;
  outline: 0;
  max-width: 33%;
  padding: 15px 20px;
}
.bd-flag {
  width: 37px;
  height: 22px;
  margin: 12px 5px;
  position: absolute;
}
.plus {
  position: absolute;
  left: 49px;
  top: 13px;
}
.store-logo img {
  width: 180px;
}
.mobile-logo {
  width: 25%;
  min-width: 300px;
}
.service-info {
  background: #3a3a3a;
}
.service-info__img {
  width: 350px;
}
.service-info__title h1 {
  text-align: center;
  margin: 10px 0;
  font-size: 35px;
}
@media screen and (max-width:320px) {
  .get-app__area{
     width: 100%;
  }
}
</style>
