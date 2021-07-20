import request from '@/utils/request'

export function getProjects() {
  return request({
    url: 'projects',
    method: 'get',
  })
}

export function getProjectsById(id) {
  return request({
    url: `projects/${id}`,
    method: 'get',
  })
}

export function createProject(data) {
  return request({
    url: `projects`,
    method: 'post',
    data,
  })
}

export function getProjectsByPage(page) {
  return request({
    url: `projects/?page=${page}`,
    method: 'get',
  })
}
