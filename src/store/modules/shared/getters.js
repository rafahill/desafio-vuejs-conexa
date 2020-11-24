export const loading = (state) => {
  return state.loading > 0 && state.activeLoading
}

export const message = (state) => {
  return state.message
}

export const color = (state) => {
  return state.color
}

export const snackbar = (state) => {
  return state.snackbar
}

export const snackbarMessage = (state) => {
  return state.snackbarMessage
}

export const snackbarColor = (state) => {
  return state.snackbarColor
}

export const errorDialog = (state) => {
  return state.errorDialog
}

export const errorMessage = (state) => {
  return state.errorMessage
}

export const errorList = (state) => {
  return state.errorList
}