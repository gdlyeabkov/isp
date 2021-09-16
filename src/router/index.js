import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClientLogin from '../views/ClientLogin.vue'
import ClientRegister from '../views/ClientRegister.vue'
import RateRegister from '../views/RateRegister.vue'
import PersonalArea from '../views/PersonalArea.vue'
import Support from '../views/Support.vue'
import Feedback from '../views/Feedback.vue'
import NewsRegister from '../views/NewsRegister.vue'
import News from '../views/News.vue'
import LicenseRegister from '../views/LicenseRegister.vue'
import Licenses from '../views/Licenses.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clients/login',
    name: 'ClientLogin',
    component: ClientLogin
  },
  {
    path: '/clients/register',
    name: 'ClientRegister',
    component: ClientRegister
  },
  {
    path: '/rates/register',
    name: 'RateRegister',
    component: RateRegister
  },
  {
    path: '/client/area',
    name: 'PersonalArea',
    component: PersonalArea
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
  {
    path: '/news/register',
    name: 'NewsRegister',
    component: NewsRegister
  },
  {
    path: '/news/list',
    name: 'News',
    component: News
  },
  {
    path: '/licenses/list',
    name: 'Licenses',
    component: Licenses
  },
  {
    path: '/licenses/register',
    name: 'LicenseRegister',
    component: LicenseRegister
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
