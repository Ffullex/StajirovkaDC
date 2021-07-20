import { login, logout } from '@/api/auth'
import { userInfo, userById, users, userByPage } from '@/api/user'
import { removeToken, setToken } from '@/utils/auth'

const state = {
  user: null,
  searchUsers: {
    currentPage: 0,
    data: [],
    lastPage: 1,
  },
}

const mutations = {
  SET_USER: (store, user) => {
    store.user = user
  },
  SET_SEARCH_USERS: (store, users) => {
    store.searchUsers.currentPage = users.current_page
    store.searchUsers.lastPage = users.last_page
    store.searchUsers.data = store.searchUsers.data.concat(users.data)
  },
}

const getters = {
  user: (store) => store.user,
  searchUsers: (store) => store.searchUsers,
}

const actions = {
  login({ commit }, data) {
    const { email, password } = data
    return new Promise((resolve, reject) => {
      login({ email: email, password: password })
        .then((response) => {
          setToken(response.token)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getUserById(_, id) {
    return new Promise((resolve, reject) => {
      userById(id)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getUserByPage({ commit }, page) {
    return new Promise((resolve, reject) => {
      userByPage(page)
        .then((response) => {
          commit('SET_SEARCH_USERS', response)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  userInfo({ commit }) {
    return new Promise((resolve, reject) => {
      userInfo()
        .then((response) => {
          commit('SET_USER', response)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  users() {
    return new Promise((resolve, reject) => {
      users()
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          removeToken()
          commit('SET_USER', null)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
