<template>
  <div class="sticky-top">
    <div class="navbars d-flex">
      <div class="navbar-expa aalign-start">
        <div @click="$emit('expandHandle')">
          <button class="navbar-expand__btn px-3 py-2  ml-3 my-2 sm-hide">
            <fa-icon icon="bars" class="navbar-expand__btn--icon"></fa-icon>
          </button>

          <div
            class="humber-expand__menu px-2 py-1 my-1 mx-2  sm-show"
            :class="{ change: toggleHandelar }"
          >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>

        <nuxt-link to="/" class="sm-hide mt-2" style="text-decoration:none;color:#6f5b5b !important">
          <h3 class="px-2 mt-2">SureBuy.Com</h3>
        </nuxt-link>
      </div>

      <div class="navbar-search__area d-flex ">
        <input
          class="navbar-search__input"
          type="text"
          ref="searchItem"
          v-model="searchItem"
          @change="searchHandeler()"
          placeholder="Search for products (e.g. Iphone,OnePlus)"
        />
        <button class="search-icon" @click="searchHandeler()"></button>
      </div>

      <div class="ml-3 navbars-link">
        <nuxt-link
          to="/help"
          class="px-4 py-3 h-100 navbars-link navbar-link__help md-hide"
        >
          <fa-icon class="question-circle" icon="question-circle"></fa-icon>
          Help & More
        </nuxt-link>
        <nuxt-link
          to="/lan"
          class="px-4 py-3 h-100 navbars-link  navbar-link__lang md-hide"
          ><span class="text-danger mr-1"> EN</span>|
          <span class="navbar-link__lang--bang ml-1"> বাং </span>
        </nuxt-link>
        <button
          class="px-5 py-3 h-100 navbar-btn__sign sm-hide"
          @click="signUpBtn"
        >
          {{ signNum ? signNum + "(LogOut)" : "Sign In" }}
        </button>
        <button
          @click="$bvModal.show('small-modal')"
          class="navbar-btn__dotted mr-2 sm-show"
        ></button>
      </div>
    </div>
    <!-- -------------- model----------- -->
    <sign-up-modal />
    <small-modal />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["toggleHandelar"],
  data: () => ({
    expand: true,
    searchItem: "",
  }),
  computed: {
    ...mapGetters(["signNum"]),
  },
  mounted() {
    if (this.$route.params.searchResult) {
      this.searchItem = this.$route.params.searchResult.split("-").join(" ");
      this.$refs.searchItem.focus();
    }
  },
  methods: {
    searchHandeler() {
      if (!this.searchItem) {
        return
      }
      if (this.$route.params.searchResult) {
        this.$router.replace({
          path: `${this.searchItem.split(" ").join("-")}`,
        });
      } else {
        this.$router.replace({
          path: `search/${this.searchItem.split(" ").join("-")}`,
        });
      }
    },
    signUpBtn() {
      if (!this.signNum) {
        this.$bvModal.show("signup");
      } else {
        this.$store.commit("signUp", "");
      }
    },
  },
  watch: {
    $route() {
      if (this.$route.params.searchResult) {
        this.searchItem = this.$route.params.searchResult.split("-").join(" ");
      }else{
        this.searchItem = ''
      }
    },
  },
};
</script>

<style>
.navbars {
  width: 100%;
  height: 55px;
  background-color: #fdd670;
  overflow: hidden;
}

.navbar-expand__btn {
  background-color: transparent;
  border: none;
}

.navbar-expand__btn--icon {
  font-size: 20px;
}

.navbar-expand__btn:hover,
.humber-expand__menu:hover {
  background-color: #f9cd5c;
}

.humber-expand__menu {
  display: none;
  cursor: pointer;
}
.bar1,
.bar2,
.bar3 {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-6px, 6px);
  transform: rotate(-45deg) translate(-5px, 5px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}

.navbar-logo {
  height: 40px;
  margin-top: -5px;
}
.navbar-search__area {
  flex-grow: 1;
  margin-top: 7px;
}
.navbar-search__input {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 3px;
  border: #fff;
  outline: none;
  padding: 0 0px 0 12px;
}
.search-icon {
  width: 34px;
  height: 40px;
  background-image: url("~assets/img/search-icon.PNG");
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right;
  box-sizing: border-box;
  border: none;
}
.navbars-link {
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  margin-right: -4px;
}
.navbars-link:hover {
  text-decoration: none;
}
.navbar-link__help {
  border-left: 1px solid #ecc766;
  color: #615e58;
}
.navbar-link__help:hover {
  background: #eeb529;
  transition: all 0.3s;
  color: #615e58;
}
.navbar-link__lang {
  border-left: 1px solid #ecc766;
  border-right: 1px solid #ecc766;
}
.navbar-link__lang--bang {
  color: #615e58;
}
.navbar-link__lang--bang:hover {
  color: red;
}
.navbar-btn__sign {
  background: #ff686e;
  color: #fff;
  font-size: 15px;
}
.navbar-btn__sign:hover {
  background: #e04f54;
  transition: all 0.3s;
  color: #fff;
}

.question-circle {
  color: #bd9322;
  font-size: 20px;
  margin-right: 2px;
}
.navbar-btn__dotted {
  background: url("~assets/img/dotted-btn.PNG");
  display: none;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  border: none;
  padding: 0 17px;
}
</style>
