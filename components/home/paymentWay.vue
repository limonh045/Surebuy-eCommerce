<template>
  <div>
    <div class="aspace-between payment-getway px-4">
      <div class="payment-when d-flex ">
        <div class="mx-auto d-flex">
          <div class="d-flex">
            <!-- <img
              src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1615/Default/stores/chaldal/components/page/BrandComponent/images/1-hour.png?q=low&webp=1&alpha=1"
              alt=""
            /> -->
            <p>3 days delivery</p>
          </div>
          <div class="d-flex">
            <!-- <img
              src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1615/Default/stores/chaldal/components/page/BrandComponent/images/cash-on-delivery.png?q=low&webp=1&alpha=1"
              alt=""
            /> -->
            <p>Cash on delivery</p>
          </div>
        </div>
      </div>
      <div class="d-flex payment-method ">
        <div class="mx-auto d-flex">
          <p>Pay With DBBL,Upay</p>
          <!-- <img
            src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1615/Default/components/shared/NewFooter/images/Amex.png?q=low&webp=1&alpha=1"
            alt=""
          />
          <img
            src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1616/Default/components/shared/NewFooter/images/mastercard.png?q=low&webp=1&alpha=1"
            alt=""
          />
          <img
            src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1616/Default/components/shared/NewFooter/images/VIsa.png?q=low&webp=1&alpha=1"
            alt=""
          />

          <img
            src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1616/Default/components/shared/NewFooter/images/bkash.png?v=1&q=low&webp=1&alpha=1"
            alt=""
          />
          <img
            src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1616/Default/components/shared/NewFooter/images/COD.png?v=1&q=low&webp=1&alpha=1"
            alt=""
          /> -->
        </div>
      </div>
    </div>
    <!-------------End Payment get way---------------------->
    <div class="footer-info pb-5">
      <div class="d-lg-flex d-block px-4">
        <div class="footer-info__left">
         
          <p class="footer-info__descrip">
            SureBuy.com is an online shop in Dhaka, Bangladesh. We believe time
            is valuable to our fellow Dhaka residents, and that they should not
            have to waste hours in traffic, brave bad weather and wait in line
            just to buy basic necessities like eggs! This is why Chaldal
            delivers everything you need right at your door-step and at no
            additional cost.
          </p>
          <div class="row py-5">
            <div class="col-4">
              <h3 class="footer-link__title">Customer Service</h3>
              <div class="footer-link d-flex">
                <nuxt-link to="/r">Contact Us</nuxt-link>
                <nuxt-link to="/r">FAQ</nuxt-link>
              </div>
            </div>
            <div class="col-4">
              <h3 class="footer-link__title">About SureBuy</h3>
              <div class="footer-link d-flex">
                <nuxt-link to="/r">Privacy Policy</nuxt-link>
                <nuxt-link to="/r">Terms of Use</nuxt-link>
              </div>
            </div>
            <div class="col-4">
              <h3 class="footer-link__title">For Business</h3>
              <div class="footer-link d-flex">
                <nuxt-link to="/r">Corporate</nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-info__right">
          <!-- <div class="ajustify-end ajustify-md-center mt-3">
            <img
              class="m-2"
              src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1616/Default/components/shared/NewFooter/images/google_play_store.png?q=low&webp=1&alpha=1"
              alt=""
            />

            <img
              class="m-2"
              src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1616/Default/components/shared/NewFooter/images/app_store.png?q=low&webp=1&alpha=1"
              alt=""
            />
          </div> -->
          <h1 class="text-right ajustify-md-center mt-2">
            <fa-icon icon="phone-alt"></fa-icon> 0188-1234567
          </h1>
          <p class="text-right ajustify-md-center">
            or email <b>support@Surebuy.com</b>
          </p>
          <!-- <div class="ajustify-end ajustify-md-center social-logo mt-4">
            <img
              src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1616/Default/components/shared/NewFooter/images/Facebook.png?q=low&webp=1&alpha=1"
              alt=""
            />

            <img
              src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1616/Default/components/shared/NewFooter/images/Youtube.png?q=low&webp=1&alpha=1"
              alt=""
            />

            <img
              src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1616/Default/components/shared/NewFooter/images/twitter.png?q=low&webp=1&alpha=1"
              alt=""
            />

            <img
              src="https://cdn.chaldal.net/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+Release-1616/Default/components/shared/NewFooter/images/Instagram.png?q=low&webp=1&alpha=1"
              alt=""
            />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.payment-getway {
  color: #606060;
  background: #f2f2f2;
}
.payment-when img,
.payment-method img {
  width: 40px;
}
.payment-when p,
.payment-method p {
  font-size: 15px;
  margin: auto;
  padding: 0 5px;
}
.footer-info {
  background: #f7f7f7;
}
.footer-info__left {
  width: 70%;
  position: relative;
  border-right: 1px solid #ededed;
}

.footer-info__right {
  width: 30%;
  /* min-width: 334px; */
}

.footer-info__descrip {
  font-size: 16px;
}
.footer-link {
  flex-direction: column;
}
.social-logo img {
  width: 40px;
  margin: 0 2px;
}
.footer-link__title {
  padding-bottom: 4px;
  border-bottom: 1px solid #ededed;
}
.footer-link a {
  color: black;
  font-size: 16px;
  font-weight: 300;
}
@media screen and (max-width: 996px) {
  .ajustify-md-center {
    display: flex;
    justify-content: center;
  }
  .footer-info__left {
    width: 100%;
  }
  .footer-info__right {
    width: 100%;
  }
}
@media screen and (max-width: 776px) {
  .footer-info__descrip {
    text-align: center;
  }
}
</style>
