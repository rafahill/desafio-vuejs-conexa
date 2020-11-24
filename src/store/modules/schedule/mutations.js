import moment from 'moment'

export const SET_SCHEDULE_LIST = (state, scheduleList) => {
  scheduleList.data.forEach((sl, index) => {
    sl.dataConsulta = moment(new Date()).add(index + 1, 'hours').format('YYYY-MM-DD HH:mm')
    sl.dataTerminoConsulta = moment(new Date()).add(index + 2, 'hours').format('YYYY-MM-DD HH:mm')
  })
  state.scheduleList = scheduleList;
};

export const SET_SCHEDULE_DETAILS = (state, scheduleDetails) => {
  let filteredSchedule
  if (state.scheduleList.data) {
    filteredSchedule = state.scheduleList.data.filter(sl => sl.id === scheduleDetails.data.id)
  }

  if (filteredSchedule) {
    scheduleDetails.data.dataConsulta = filteredSchedule[0].dataConsulta
    scheduleDetails.data.dataTerminoConsulta = filteredSchedule[0].dataTerminoConsulta
  }

  state.scheduleDetails = scheduleDetails;
};