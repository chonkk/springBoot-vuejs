import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['Login', 'Register']
  const authRequired = !publicPages.includes(to.name)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    router.push({ name: 'Login', query: { to: to.path } })
  } else {
    next()
  }
})

export default router
