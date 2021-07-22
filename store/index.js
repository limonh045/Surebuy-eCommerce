
const state = () => ({
  cartItem: [],
  signNum: "",
  items: [],
  menu: [],
  isItem: "",
  searchResult: [],
  setOffer: [],
});

const getters = {
  cartItemData: (state) => state.cartItem,
  signNum: (state) => state.signNum,
  items: (state) => state.items,
  menus: (state) => state.menu,
  isItem: (state) => state.isItem,
  searchResult: (state) => state.searchResult,
  setOffer: (state) => state.setOffer,
};
const mutations = {
  addToCart(state, item) {
    state.cartItem.push(item);
  },
  clearCart(state) {
    state.cartItem = [];
    state.items.forEach((e) => {
      e.quantity = 0;
    });
    state.searchResult.forEach((e) => {
      e.quantity = 0;
    });
    state.setOffer.forEach((e) => {
      e.quantity = 0;
    });
  },
  signUp(state, number) {
    state.signNum = number;
  },
  cartQunatityPlus(state, id) {
    state.cartItem.find((c) => c._id == id).quantity++;

    if (state.items.length) {
      state.items.find((c) => c._id == id).quantity = state.cartItem.find(
        (c) => c._id == id
      ).quantity;
    }

    if (state.searchResult.length) {
      state.searchResult.find(
        (c) => c._id == id
      ).quantity = state.cartItem.find((c) => c._id == id).quantity;
    }
    if (state.setOffer.length) {
      state.setOffer.find((c) => c._id == id).quantity = state.cartItem.find(
        (c) => c._id == id
      ).quantity;
    }
  },
  cartQunatityMinus(state, id) {
    state.cartItem.find((c) => c._id == id).quantity--;
    if (state.items.length) {
      state.items.find((c) => c._id == id).quantity = state.cartItem.find(
        (c) => c._id == id
      ).quantity;
    }

    if (state.searchResult.length) {
      state.searchResult.find(
        (c) => c._id == id
      ).quantity = state.cartItem.find((c) => c._id == id).quantity;
    }
    if (state.setOffer.length) {
      state.setOffer.find((c) => c._id == id).quantity = state.cartItem.find(
        (c) => c._id == id
      ).quantity;
    }
    if (state.cartItem.find((c) => c._id == id).quantity === 0) {
      state.cartItem.splice(
        state.cartItem.findIndex((c) => c._id == id),
        1
      );
    }
  },
  deleteCartItem(state, id) {
    state.cartItem.find((c) => c._id == id).quantity = 0;
    if (state.items.length) {
      state.items.find((c) => c._id == id).quantity = state.cartItem.find(
        (c) => c._id == id
      ).quantity;
    }

    if (state.searchResult.length) {
      state.searchResult.find(
        (c) => c._id == id
      ).quantity = state.cartItem.find((c) => c._id == id).quantity;
    }
    if (state.setOffer.length) {
      state.setOffer.find((c) => c._id == id).quantity = state.cartItem.find(
        (c) => c._id == id
      ).quantity;
    }
    state.cartItem.splice(
      state.cartItem.findIndex((c) => c._id == id),
      1
    );
  },
  setItem(state, item) {
    state.items = [];
    state.items = item;
  },
  setMenu(state, menu) {
    state.menu = menu;
  },
  isItem(state, boo) {
    state.isItem = boo;
  },
  setSearch(state, res) {
    state.searchResult = [];
    state.searchResult = res;
  },
  setOffer(state, res) {
    state.setOffer = [];
    state.setOffer = res;
  },
};

const actions = {
  async getItem({ commit, state }, cata) {
    const item = await this.$axios.$get(`/item${cata}`);
    if (item && item.items) {
      commit("isItem", true);
      let arr = [];
      item.item.forEach((e) => {
        state.cartItem.forEach((c) => {
          if (c._id == e._id) {
            e.quantity = c.quantity;
          } else if (!c) {
            e.quantity = 0;
          }
        });
        arr.push(e);
        commit("setItem", arr);
      });
    } else {
      commit("isItem", false);
      commit("setMenu", item);
    }
  },
  async getSearchResult({ commit, state }, cata) {
    console.log(state);
    const ip = await this.$axios.$get(`/search/${cata}`);

    let arr = [];
    ip.forEach((e) => {
      state.cartItem.forEach((c) => {
        if (c._id == e._id) {
          e.quantity = c.quantity;
        } else if (!c) {
          e.quantity = 0;
        }
      });
      arr.push(e);
      commit("setSearch", arr);
    });
  },

  async getOfferItem({ commit, state }) {
    console.log(state);
    const ip = await this.$axios.$get(`/offer`);

    let arr = [];
    ip.forEach((e) => {
      state.cartItem.forEach((c) => {
        if (c._id == e._id) {
          e.quantity = c.quantity;
        } else if (!c) {
          e.quantity = 0;
        }
      });
      arr.push(e);
      commit("setOffer", arr);
    });
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
