import request from '@/utils/request'

export function getIssues() {
  return request({
    url: 'issues',
    method: 'get',
  })
}

export function getIssuesById(id) {
  return request({
    url: `issues/${id}`,
    method: 'get',
  })
}

export function setStatus(id, group) {
  const data = {
    status: group,
  }
  return request({
    url: `issues/${id}`,
    method: 'put',
    data,
  })
}

export function createIssue(data) {
  return request({
    url: `issues`,
    method: 'post',
    data,
  })
}
export function editIssue(data, id) {
  return request({
    url: `issues/${id}`,
    method: 'put',
    data,
  })
}
