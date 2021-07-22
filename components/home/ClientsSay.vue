<template>
  <div class="py-5">
    <h2 class="text-center py-4">What our clients are saying</h2>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      class="py-3"
      indicators
      img-width="100%"
    >
      <b-carousel-slide v-for="(clientsay, i) in sliderdatas" :key="i">
        <template #img>
          <div class="client-speack ajustify-center">
            <div class="client-profile">
              <img :src="clientsay.img" alt="" style="border-radius: 50%;    height: 59%;" class="client-profile__pic" />
              <div class="client-profile__name text-center">
                {{ clientsay.name }}
              </div>
            </div>
            <div class="client-say">
              {{ clientsay.say }}
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  data: () => ({
    sliderdatas: [
      {
        name: "Shahareal sojib",
        img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-1/p200x200/150824648_1368303983506327_6542170142051241156_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeEkKa5p16FdCV1SmAaF6ALOs-9nw9MdWHiz72fD0x1YeIphQTFRpWLD6gEg-ycIAvbcO_nxZB0ZVHPj1HrFr6ms&_nc_ohc=gnsnkfYRw1gAX-3nphb&_nc_ht=scontent.fdac14-1.fna&oh=897befd5374a66a59ce5ed1422cac9e7&oe=60FBA95C",
        say:
          "I want to order something (A perfume) for my mom at BD. Although the delivery area was out of their scope, their support team instantly replied to my query and manged to deliver the product. The best thing I noticed, they informed step by step updated news about the order processing.",
      },
      {
        name: "Polash",
        img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-1/p200x200/203436423_2917161158610802_2101481401878796826_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeEMr9VsgTIp_q7W8ggbutfZxKsSsigx2FnEqxKyKDHYWSfX9qYQfN6miU_3k_M_0VefBPNmzH02420j_WTYq62O&_nc_ohc=duxCUvdsj34AX_D_fs1&_nc_ht=scontent.fdac14-1.fna&oh=ca11f5d4cf5a8679048ccad328041100&oe=60FC3089",
        say:
          "I have been shopping from chaldal for the past few months and i am loving the experience. Have been shopping from here and i have recommended my relatives too. They are also happy with the service. The prices are comparatively low and the products are genuine.",
      },
      {
        name: "Sabbir hossen shuvo",
        img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-1/s200x200/160651591_1400342393636016_8941857762262634095_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGUz56MUaK7LJmBhNw45jtgshCqy5LDuTKyEKrLksO5MiJpMt-lY0jWRGM_8qz2mmbqUZuufzuUaXoEAokKdiIm&_nc_ohc=xfQBaYnx3dUAX9Gy2Mo&_nc_ht=scontent.fdac14-1.fna&oh=49fd0c09afd55869373cc02f2baf7cb8&oe=60FA64E4",
        say:
          "Loved the service! I urgently needed some stuffs and ordered it here and they delivered in less than an hour as promised! Thanks a lot for that.",
      },
      {
        name: "Siblu",
        img: "https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-1/s200x200/185310033_2855084168140665_4319762710435697420_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeFbdPL7n5gubq-SDLxcT17el6SJJAOZaKKXpIkkA5loopUKL05X22XaJLfqbXxarhapEAYNn3ZyCFXF04FANoWG&_nc_ohc=HWk5BKMvwr8AX_Xc_gE&_nc_ht=scontent.fdac14-1.fna&oh=771240e956301559b089589c2fbc2e5d&oe=60FA8840",
        say:
          "Satisfied by their professionalism ! Got my tea bags in time. Didnt have to pay any delivery charge. I cant believe that. Keep it up !",
      },
    ],
  }),
};
</script>
<style>
.client-speack {
  margin: 0 15px;
}
.client-profile {
  text-align: center;
  width: 280px;
  display: inline-block;
}
.client-profile__name {
  font-size: 18px;
  font-weight: 200;
  color: #353430;
  padding: 0 15px;
}
.client-say {
  max-width: 60rem;
  height: 100%;
  background-color: #eee;
  line-height: 25px;
  font-size: 16px;
  font-weight: 200;
  width: 100%;
  padding: 17px;
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 5px;
  text-align: left;
  position: relative;
}
.client-say::before {
  content: "";
  position: absolute;
  display: block;
  width: 14px;
  height: 14px;
  background: #eee;
  left: -7px;
  top: 50%;
  transform: rotate(45deg);
}
@media screen and (max-width: 1260px) {
  .client-say::before {
    top: -7px;
    left: 50%;
  }
}
</style>
