import router from './router'
import store from './store'
import { getToken, removeToken } from '@/utils/auth'

const whiteList = ['/']

router.beforeEach(async (to, from, next) => {
  const token = getToken()

  if (token) {
    if (to.path === '/') {
      next({ path: '/home' })
    } else {
      const userInfo = store.getters['user/user']

      if (userInfo !== null) {
        next()
      } else {
        try {
          await store.dispatch('user/userInfo')
          next()
        } catch (error) {
          removeToken()
          next({ path: '/' })
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/')
    }
  }
})
