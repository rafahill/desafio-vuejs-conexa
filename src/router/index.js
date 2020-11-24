import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import PatientWrapper from '../views/PatientWrapper.vue'
import ScheduleWrapper from '../views/ScheduleWrapper.vue'
import ScheduleDetailsWrapper from '../views/ScheduleDetailsWrapper.vue'
import NotFound from '../components/shared/NotFound.vue'
import store from '../store/index'

Vue.use(Router)

const router = new Router({
mode: 'history',
routes:  [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/patient-list',
    name: 'patient-list',
    component: PatientWrapper
  },
  {
    path: '/',
    name: 'schedule',
    component: ScheduleWrapper
  },
  {
    path: '/schedule-details/:id',
    name: 'schedule-details',
    component: ScheduleDetailsWrapper
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  },
]
});

router.beforeEach((to, from, next) => {
    store.dispatch('tryAutoLogin')
    const authed = store.getters.userToken
    if (authed === null && to.path !== '/login') {
      next('/login')
    } else {
      next()
    }
})
export default router
