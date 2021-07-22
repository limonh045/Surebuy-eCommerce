<template>
  <div>
    <h2 class="text-center py-4">
      Why People <fa-icon class="text-danger" icon="heart"></fa-icon> SureBuy
    </h2>
    <div class="why-people d-md-flex d-block">
      <div class="why-people__item m-auto border-btm-orange">
        <img
         src="~assets/img/iphone12.png"
          alt=""
          style="width: 100%;"
        />
        <div class="why-people__info">
          <h3 class="text-center pt-3 pb-2">Buy & Get Delivery</h3>
          <p class="text-center text-center m-auto">
            No waiting in traffic, no haggling, no worries carrying ,
            they're delivered right at your door.
          </p>
        </div>
      </div>
      <div class="why-people__item m-auto border-btm-green">
        <img
          src="~assets/img/mack.png"
          alt=""
          style="width: 100%;"
        />
        <div class="why-people__info">
          <h3 class="text-center pt-3 pb-2">Get Fresh Product</h3>
          <p class="text-center text-center m-auto">
            Our fresh produce is sourced every client, you get the best from
            us.
          </p>
        </div>
      </div>
      <div class="why-people__item m-auto border-btm-red">
        <img
         src="~assets/img/sourch.png"
          alt=""
          style="width: 100%;"
        />
        <div class="why-people__info">
          <h3 class="text-center pt-3 pb-2">A wide range of Products</h3>
          <p class="text-center text-center m-auto">
            With 4000+ Products to choose from, forget scouring those aisles for
            hours.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.why-people__item {
  width: 33.3333%;
  position: relative;
}
.why-people__info {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 35%;
  background-color: rgba(255, 255, 255, 0.8);
}
.why-people__info p {
  font-size: 16px;
  width: 85%;
}
.border-btm-orange {
  border-bottom: 3px solid orange;
}
.border-btm-green {
  border-bottom: 3px solid green;
}
.border-btm-red {
  border-bottom: 3px solid red;
}
@media screen and (max-width: 1599px) {
  .why-people__info {
    min-height: 70%;
  }
}
@media screen and (max-width: 768px) {
  .why-people__item {
    width: 80%;
  }
}
</style>
