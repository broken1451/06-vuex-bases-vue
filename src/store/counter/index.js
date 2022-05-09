import state from "./state";
// import {increment, incrementBy, setLoading} from './mutations'
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const counterStore = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default counterStore;
