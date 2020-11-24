import http from '@/http'

export const getScheduleList = ({ commit, dispatch }) => {
  http.get('consultas')
    .then(function (response) {
      if (response.status === 200) {
        dispatch('subtractLoading')
        let res = response.data
        commit('SET_SCHEDULE_LIST', res)
      }

    })
    .catch(function (err) {
      console.error('Failed loging in', err);
      dispatch('openSnackbar', { message: 'Erro, por favor entre em contato com o suporte.' })
      throw err;
    });
}

export const getScheduleDetails = ({ commit, dispatch }, id) => {
  http.get(`consulta/${id}`)
    .then(function (response) {
      if (response.status === 200) {
        dispatch('subtractLoading')
        let res = response.data
        commit('SET_SCHEDULE_DETAILS', res)
      }

    })
    .catch(function (err) {
      console.error('Failed loging in', err);
      dispatch('openSnackbar', { message: 'Erro, por favor entre em contato com o suporte.' })
      throw err;
    });
}

export const createSchedule = ({ dispatch }, scheduleObj) => {
  http.post('consulta', scheduleObj)
    .then(function (response) {
      if (response.status === 201) {
        dispatch('subtractLoading')
        dispatch('openSnackbar', { message: 'Agendamento realizado com sucesso!', color: 'success' })
        dispatch('getScheduleList')
      }

    })
    .catch(function (err) {
      console.error('Failed loging in', err);
      dispatch('openSnackbar', { message: 'Erro, por favor entre em contato com o suporte.' })
      throw err;
    });
}