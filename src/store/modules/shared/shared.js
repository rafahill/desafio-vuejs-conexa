import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const state = {
  loading: 0,
  activeLoading: true,
  message: 'Aguarde...',
  color: '#FFFFFF',
  snackbar: false,
  snackbarMessage: '',
  snackbarColor: 'red',
  errorDialog: false,
  errorMessage: '',
  errorList: [],
}

export default {
  state,
  actions,
  getters,
  mutations
}