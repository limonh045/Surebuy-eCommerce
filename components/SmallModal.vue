<template>
    <div>
       <b-modal id="small-modal" hide-header hide-footer hide-header-close>
           <div class="small-modal__header w-100" @click="$bvModal.hide('small-modal')">
               Chaldal
               <fa-icon class="mx-1" icon='egg'></fa-icon>
           </div>
           <div class="small-modal__link">
               <div v-if="!signNum" class="modal-link"  @click="$bvModal.show('signup')">
                   <fa-icon class="mx-2" icon='sign-in-alt'></fa-icon>
                   Login
               </div>
               <div v-if="!signNum" class="modal-link"  @click="$bvModal.show('signup')">
                   <fa-icon class="mx-2" icon='user-plus'></fa-icon>
                 Sign Up
               </div>
               <div v-if="signNum" class="modal-link"  @click='$store.commit("signUp", ""),$bvModal.hide("small-modal")'>
                   <fa-icon class="mx-2" icon='user-plus'></fa-icon>
                  {{ signNum ? signNum + "(LogOut)" : "Sign In" }}
               </div>
               <div class="modal-link">
                   <fa-icon class="mx-2" icon='language'></fa-icon>
                  Language
               </div>
                <div class="modal-link">
                    <fa-icon class="mx-2" icon='info-circle'></fa-icon>
                   Help And More
               </div>
           </div>
       </b-modal>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: {
    ...mapGetters(["signNum"]),
  },
}
</script>
<style>
#small-modal___BV_modal_body_{
padding: 0 !important;
}
#small-modal___BV_modal_content_{
max-width: 350px!important;
margin: auto;
top: 40px;
}
.small-modal__header{
        background: #4f4f4f;
    color: #fff;
    font-size: 19px;
    
    padding: 13px 26px;
    cursor: 
    pointer;
}
.modal-link{
        color: #4f4f4f;
    font-size: 19px;
        padding: 15px;
    cursor: pointer;
}
</style>