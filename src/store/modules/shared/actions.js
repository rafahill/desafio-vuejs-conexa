export const addLoading = ({ commit }) => {
  commit('ADD_LOADING')
}

export const subtractLoading = ({ commit }) => {
  commit('SUBTRACT_LOADING')
}

export const activateLoading = ({ commit }) => {
  commit('ACTIVATE_LOADING')
}

export const deactivateLoading = ({ commit }) => {
  commit('DEACTIVATE_LOADING')
}

export const setLoadingMessage = ({ commit }, message) => {
  commit('SET_LOADING_MESSAGE', message)
}

export const openSnackbar = ({ commit }, props) => {
  commit('OPEN_SNACKBAR', props)
}

export const closeSnackbar = ({ commit }) => {
  commit('CLOSE_SNACKBAR')
}

export const openErrorDialog = ({ commit }, message) => {
  commit('OPEN_ERROR_DIALOG', message)
}

export const closeErrorDialog = ({ commit }) => {
  commit('CLOSE_ERROR_DIALOG')
}