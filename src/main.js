
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

const Home = () => import('./pages/Home.vue')
const About = () => import('./pages/About.vue')

// import Home from './pages/Home.vue'
// import About from './pages/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
