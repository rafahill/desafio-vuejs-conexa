export const ADD_LOADING = (state) => {
  state.loading = state.loading + 1
}

export const SUBTRACT_LOADING = (state) => {
  if (state.loading > 1) {
    state.loading = state.loading - 1
  } else {
    state.loading = 0
  }
}

export const ACTIVATE_LOADING = (state) => {
  state.activeLoading = true
}

export const DEACTIVATE_LOADING = (state) => {
  state.activeLoading = false
}

export const SET_LOADING_MESSAGE = (state, message) => {
  state.message = message
}

export const OPEN_SNACKBAR = (state, props) => {
  state.snackbar = true
  state.snackbarMessage = props.message.message || props.message
  state.snackbarColor = props.color || 'red'
  state.errorList = props.message.errors || null
}

export const CLOSE_SNACKBAR = (state) => {
  state.snackbar = false
  state.snackbarMessage = ''
  state.snackbarColor = ''
}

export const OPEN_ERROR_DIALOG = (state, message) => {
  state.errorDialog = true
  state.errorMessage = message
}

export const CLOSE_ERROR_DIALOG = (state) => {
  state.errorDialog = false
  state.errorMessage = ''
}