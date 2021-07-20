import {
  getDashboards,
  getDashboardById,
  createDashboard,
  getDashboardsByPage,
} from '@/api/dashboards'

const state = {
  boards: null,
  selectedBoard: null,
  searchDashboards: {
    currentPage: 0,
    data: [],
    lastPage: 1,
  },
}

const mutations = {
  SET_BOARDS: (state, boards) => {
    state.boards = boards
  },
  SET_BOARDS_DATA: (state, boards) => {
    state.boards.data = boards
  },
  SET_SELECTEDBOARD: (state, board) => {
    state.selectedBoard = board
  },
  SET_SEARCH_DASHBOARDS: (state, dashboards) => {
    state.searchDashboards.currentPage = dashboards.current_page
    state.searchDashboards.lastPage = dashboards.last_page
    state.searchDashboards.data = state.searchDashboards.data.concat(
      dashboards.data
    )
  },
}

const getters = {
  boards: (state) => state.boards,
  selectedBoard: (state) => state.selectedBoard,
  searchDashboards: (state) => state.searchDashboards,
}

const actions = {
  getDashboards({ commit }) {
    return new Promise((resolve, reject) => {
      getDashboards()
        .then((response) => {
          commit('SET_BOARDS', response)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getDashboardById({ commit }, id) {
    return new Promise((resolve, reject) => {
      getDashboardById(id)
        .then((response) => {
          commit('SET_SELECTEDBOARD', response)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  updateDashboards({ commit }, page) {
    return new Promise((resolve, reject) => {
      getDashboardsByPage(page)
        .then((response) => {
          commit('SET_BOARDS_DATA', response.data)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  createDashboard({ commit }, payload) {
    return new Promise((resolve, reject) => {
      createDashboard(payload)
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  searchDashboards({ commit }, page) {
    return new Promise((resolve, reject) => {
      getDashboardsByPage(page)
        .then((response) => {
          commit('SET_SEARCH_DASHBOARDS', response)
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
