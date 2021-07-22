<template>
<!-- banner: (...)
bread: (...)
catagory: (...)
childmenu: (...)
isExpand: (...)
menuId: (...)
submenu: (...)
tumbail: (...) -->
  <div>
    <div v-for="(menuItem, i) in menuItems" :key="i">
      <div v-if="menuItem.submenu && menuItem.submenu.length>0">
        <div @click="menuItem.isExpand = !menuItem.isExpand">
          <nuxt-link class="menu-link__main" :to="'/'+menuItem.catagory.split(' ').join('-')">
            <img :src="menuItem.icon" style="width: 21px;" alt="" />
            {{ menuItem.catagory }}
            <fa-icon
              class="float-right mr-4 mt-1"
              icon="chevron-right"
              :class="{'rotete' : menuItem.isExpand}"
            ></fa-icon>
          </nuxt-link>
        </div>
        <div v-if="menuItem.isExpand" class="subItem-boder__left ml-3">
          <div v-for="(subItem, i) in menuItem.submenu" :key="i">
            <div v-if="subItem.submenu && subItem.submenu.length>0">
              <div @click="subItem.isExpand = !subItem.isExpand">
                <nuxt-link class="menu-link__submenu" :to="'/'+subItem.catagory.split(' ').join('-')"
                  >{{ subItem.catagory }}
                  <fa-icon
                    class="float-right mr-4 mt-1"
                    icon="chevron-right"
                    :class="{'rotete' : subItem.isExpand}"
                  ></fa-icon
                ></nuxt-link>
              </div>
              <div v-if="subItem.isExpand" class="subItem-boder__left ml-3">
                <div v-for="(sub, i) in subItem.submenu" :key="i">
                  <nuxt-link class="menu-link__sub" :to="'/'+sub.catagory.split(' ').join('-')"
                    >{{ sub.catagory }}
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div v-else>
              <nuxt-link class="menu-link__submenu" :to="'/'+subItem.catagory.split(' ').join('-')">{{
                subItem.catagory
              }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <!-- <div v-else-if="menuItem.extraStyle">
        <nuxt-link :to="menuItem.to" class="menu-link__offer my-2"
          >Offers <span>{{ offerItem.length }}</span></nuxt-link
        >
        <hr class="m-0" />
      </div> -->
      <div v-else>
        <nuxt-link class="menu-link__main" :to="'/'+menuItem.catagory.split(' ').join('-')"
          ><img :src="menuItem.icon"  style="width: 21px;"/>{{
            menuItem.catagory
          }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { productItems } from "../data/productItems";
// import { menuItems } from "../data/menuItems";
export default {
  data: () => ({
    menuItems:[],
    productItems,
    offerItem: []
  }),
  methods:{
 async getMenu(){
const ip = await this.$axios.$get(`/menu`)
     console.log(ip);
     this.menuItems = ip
  }
  },
  mounted() {
    // this.productItems.forEach(i => {
    //   if (i.beforePrice) {
    //     this.offerItem.push(i);
    //   }
    // });
     this.getMenu()
  }
};
</script>

<style>
.menu-link__main {
  padding: 0px 0 0px 10px;
  display: block;
  text-decoration: none;
  font-size: 13px;
  color: #000;

  letter-spacing: 0.1px;
  text-transform: capitalize;
}
.menu-link__submenu {
  padding: 5px 0 5px 15px;
  display: block;
  text-decoration: none;
  font-size: 13px;
  color: #000;
  letter-spacing: 0.1px;
  text-transform: capitalize;
  /* border-left: 1px solid red; */
}
.menu-link__sub {
  padding: 5px 0 5px 15px;
  display: block;
  text-decoration: none;
  font-size: 13px;
  color: #000;
  letter-spacing: 0.1px;
  text-transform: capitalize;
}
.menu-link__offer {
  padding: 5px 0 5px 35px;
  display: block;
  text-decoration: none;
  font-size: 13px;
  color: #000;
  letter-spacing: 0.1px;
}
.menu-link__offer span {
  padding: 2px 5px;
  color: #ff686e;
  background-color: #fff;
  margin-left: 5px;
  font-size: 0.8em;
  position: relative;
  font-weight: 700;
  border: 1px solid #ff686e;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.subItem-boder__left {
  border-left: 1px solid #eee;
}
.menu-link__main:hover,
.menu-link__submenu:hover,
.menu-link__sub:hover,
.menu-link__offer:hover {
  background: linear-gradient(to right, #fff 0, #ccc 100%);
  color: #000;
  text-decoration: none;
}
.nuxt-link-exact-active {
  font-weight: 700;
  color: #d39b11 !important;
}
.rotete{
  transform: rotate(90deg);
}
</style>
