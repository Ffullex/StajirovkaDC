import {
  getProjects,
  getProjectsById,
  getProjectsByPage,
  createProject,
} from '@/api/projects'

const state = {
  projects: null,
  selectedProject: null,
}

const mutations = {
  SET_PROJECTS: (state, project) => {
    state.projects = project
  },
  SET_PROJECTS_DATA: (state, projects) => {
    state.projects.data = projects
  },
  SET_SELECTED_PROJECTS: (state, project) => {
    state.selectedProject = project
  },
}

const getters = {
  projects: (state) => state.projects,
  selectedProject: (state) => state.selectedProject,
}

const actions = {
  getProjects({ commit }) {
    return new Promise((resolve, reject) => {
      getProjects()
        .then((response) => {
          commit('SET_PROJECTS', response)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  updateProjects({ commit }, page) {
    return new Promise((resolve, reject) => {
      getProjectsByPage(page)
        .then((response) => {
          commit('SET_PROJECTS_DATA', response.data)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getProjectsById({ commit }, id) {
    return new Promise((resolve, reject) => {
      getProjectsById(id)
        .then((response) => {
          commit('SET_SELECTED_PROJECTS', response)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  createProject(_, payload) {
    return new Promise((resolve, reject) => {
      createProject(payload)
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
