import {
  createIssue,
  getIssues,
  getIssuesById,
  setStatus,
  editIssue,
} from '@/api/issues'

const state = {
  issues: [],
  selectIssue: null,
}

const mutations = {
  SET_ISSUES: (state, issues) => {
    state.issues = issues
  },
  SET_SELECT_ISSUE: (state, issue) => {
    state.selectIssue = issue
  },
}

const getters = {
  issues: (state) => state.issues,
  selectIssue: (state) => state.selectIssue,
}

const actions = {
  getIssues({ commit }) {
    return new Promise((resolve, reject) => {
      getIssues()
        .then((response) => {
          commit('SET_ISSUES', response.data)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getIssuesById({ commit }, id) {
    return new Promise((resolve, reject) => {
      getIssuesById(id)
        .then((response) => {
          commit('SET_SELECT_ISSUE', response)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  setStatus(_, payload) {
    return new Promise((resolve, reject) => {
      setStatus(payload.id, payload.group)
        .then(() => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  createIssues(_, payload) {
    return new Promise((resolve, reject) => {
      createIssue(payload)
        .then(() => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  editIssues(_, payload) {
    return new Promise((resolve, reject) => {
      editIssue(payload.data, payload.id)
        .then(() => {
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
