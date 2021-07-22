<template>
  <div class="header-search d-flex w-100">
    <div class="header-search__section m-auto w-100">
      <h1 class="header-search__title text-center pt-4">
       Safely Shop From SureBuy
      </h1>
      <div class="search-bar ajustify-center m-auto">
        <input
          class="search-bar__input"
          placeholder="Search for products (e.g. Iphone,OnePlus)"
          type="text"
          v-model="sarched"
        />
        <button class="search-bar__btn--icon"  @click="search"></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data:()=>({
    sarched:''
  }),
  methods:{
    search(){
if (!this.searched) {
  return
}
      this.$router.replace({
          path: `search/${this.sarched.split(" ").join("-")}`,
        });
    }
  }
}
</script>
<style>
.header-search {
  background: url('~assets/top.png')
    no-repeat center;
  background-size: cover;
  padding-top: 6rem;
  padding-bottom: 8rem;
}
.header-search__title {
  color: #000;
  font-size: 40px;
  font-weight: 700;
}
.search-bar {
  border: 0.5px solid #c8c8c8;
  border-radius: 6px;
max-width: 50rem;
}
.search-bar__input {
  flex-grow: 1;
  padding: 4px 0 4px 12px;
  box-sizing: border-box;
  font-size: 17px;
  border-radius: 6px 0 0 6px;
  height: 40px;
  border: none;
  outline: none;
}

.search-bar__btn--icon {
  width: 34px;
  height: 40px;
  background-image: url("~assets/img/search-icon.PNG");
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right;
  box-sizing: border-box;
  border: none;
}
@media only screen and (max-width: 768px) {
  .header-search__title {
    font-size: 20px;
  }
  .search-bar {
    width: 65%;
    min-width: 300px;
  }
}
</style>
