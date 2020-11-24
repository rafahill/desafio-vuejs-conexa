import http from '@/http'
import router from '@/router/index.js'

export const login = ({ commit, dispatch }, params) => {
  http.post('login', params)
    .then(function (response) {
      if (response.status === 200) {
        dispatch('subtractLoading')
        let res = response.data.data
        dispatch('openSnackbar', { message: `Seja Bem vindo ${res.nome}`, color: 'success' })
        commit('SET_USER_TOKEN', res.token)
        commit('SET_USER_NAME', res.name)
        localStorage.setItem('currentUserToken', JSON.stringify(res.token))
        localStorage.setItem('currentUserName', JSON.stringify(res.nome))
        router.push('/')
      }

    })
    .catch(function (err) {
      console.error('Failed loging in', err);
      dispatch('openSnackbar', { message: 'Erro, por favor entre em contato com o suporte.' })
      throw err;
    });
}

export const tryAutoLogin = async ({ commit }) => {
  const currentUserToken = JSON.parse(localStorage.getItem('currentUserToken'))
  const currentUserName = JSON.parse(localStorage.getItem('currentUserName'))
  if (!currentUserToken) {
    return
  } else {
    commit('SET_USER_TOKEN', currentUserToken)
    commit('SET_USER_NAME', currentUserName)
  }
}

export const logout = ({ commit }) => {
  commit('SET_USER_TOKEN', null)
  localStorage.removeItem('currentUserToken')
  localStorage.removeItem('currentUserName')
  router.push('/login')
}
