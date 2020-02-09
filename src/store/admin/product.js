import firebase from 'firebase'
const state = {
  selectedProduct: null,
  products: null
};

const mutations = {
  setSelectedProduct(state, payload) {
    state.selectedProduct = payload;
  },
  setSelectedProductTitle(state, payload) {
    state.selectedProduct.title = payload;
  },
  setSelectedProductDescription(state, payload) {
    state.selectedProduct.description = payload;
  },
  setProducts(state, payload) {
    state.products = payload;
  }
};

const actions = {
  getProducts() {},
  getProduct() {},
  createNewProduct({ commit }) {
    commit("setSelectedProduct", {
      title: "",
      description: "",
      image: null
    });
  },
  addProduct() {
      firebase.firestore().
  },
  removeProduct() {},
  updateProduct() {}
};

export default {
  state,
  mutations,
  actions
};
