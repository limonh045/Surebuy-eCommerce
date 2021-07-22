<template>
  <div class="custom">
    <b-modal id="signup" hide-header hide-footer hide-header-close>
      <h1 class="modal-title d-inline-block pb-2">Login</h1>
      <fa-icon
        icon="times"
        class="modal-cancel-btn float-right"
        @click="$bvModal.hide('signup')"
      ></fa-icon>
      <button class="d-block signup-btn my-2 signup-btn__fb">
         Sign Up or Login With
        <b>Facebook</b>
      </button>
      <button class="d-block signup-btn signup-btn__email">
        <fa-icon class="email-icon mx-1" icon="envelope"></fa-icon>

        Login With <b>Email</b>
      </button>
      <div class="hr-or w-100 my-3 position-relative text-center">
        <span class="or-text">or</span>
      </div>
      <p class="text-center my-4">PLEASE ENTER YOUR MOBILE PHONE NUMBER</p>
      <div class="signup-number position-relative d-flex">
        <img
          class="signup-number__flag mr-2"
          src="~assets/img/bd-flag.png"
          alt=""
        />
        <div class="plus-icon position-absolute ml-5 mt-1">+</div>
        <input
          type="text"
          placeholder="017********"
          v-model="mobileNumber"
          class="signup-number__input"
        />
      </div>
      <button class="sign-btn mt-3" @click="signUpHandel">SIGN UP / LOGIN</button>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    mobileNumber: ''
  }),
    computed: {
     ...mapGetters(["signNum"]),
  },
  methods:{
    signUpHandel(){
        this.$store.commit('signUp', this.mobileNumber)
        this.$bvModal.hide('signup')
        this.$bvModal.hide("small-modal")
        this.mobileNumber = ''
    }
  }
};
</script>
<style>
#signup___BV_modal_content_ {
  margin: auto;
  max-width: 380px;
  top: 50px;
}
#signup {
  padding: 0 !important;
}
.modal-title {
  font-size: 22px;
}
.modal-cancel-btn {
  width: 40px !important;
  height: 40px;
  padding: 10px;
}
.modal-cancel-btn:hover {
  color: red;
}
.signup-btn {
  text-align: center;
  width: 100%;
  height: 58px;
  border-radius: 5px;
  transition: all 450ms;
}
.signup-btn__fb {
  color: #fff;
  background: #49639f;
}
.signup-btn__fb:hover {
  background: #364472;
}
.signup-btn__email {
  background: #fff;

  border: 1px solid black;
}
.signup-btn__email:hover {
  background: #f3f3f3;
}
.email-icon {
  font-size: 24px;
  margin-bottom: -4px;
  color: orange;
}
.or-text::before {
  content: "";
  position: absolute;
  width: 45%;
  right: 0;

  height: 1px;
  background: #e8e8e8;

  top: 10px;
}
.or-text::after {
  content: "";
  position: absolute;
  width: 45%;
  left: 0;

  height: 1px;
  background: #e8e8e8;

  top: 10px;
}
.signup-number__flag {
  width: 36px;
  height: 32px;
}
.signup-number__input {
  padding: 0 0 0 20px;
  border: none;
  outline: none;
  border-bottom: solid 2px #c9c9c9;
  width: 100%;
  font-size: 18px;
}
.signup-number__input:focus,
.signup-number__input:active {
  border-bottom: solid 2px #ff7517;
}
.sign-btn {
  width: 100%;
  height: 58px;
  text-align: center;
  font-size: 14px;
  color: white;
  background: #eb484b;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.5);
  transition: all 450ms;
  text-transform: uppercase;
}
.sign-btn:hover {
  background: #e5595a;
}
@media screen and (max-width: 776px) {
  #signup___BV_modal_content_ {
    max-width: 100%;
    top: 0;
  }
  .modal-dialog {
    margin: 0 !important;
  }
}
</style>
