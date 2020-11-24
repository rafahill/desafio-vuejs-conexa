import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

const state = {
  userToken: null,
  userName: null
};

export default {
  state,
  mutations,
  actions,
  getters,
};