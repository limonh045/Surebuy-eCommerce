import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  fas,
  faArrowRight,
  faSignInAlt,
  // faFacebookF
  
  
} from "@fortawesome/free-solid-svg-icons";

//use it
// <fa-icon icon="sign-in-alt"></fa-icon>

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  fas,
  faArrowRight,
  faSignInAlt,
  // faFacebookF
  

);

// Register the component globally
Vue.component("fa-icon", FontAwesomeIcon);
