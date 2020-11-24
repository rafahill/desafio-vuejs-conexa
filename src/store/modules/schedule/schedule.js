import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

const state = {
  scheduleList: [],
  scheduleDetails: []
};

export default {
  state,
  mutations,
  actions,
  getters,
};