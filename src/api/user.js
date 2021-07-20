import request from '@/utils/request'

export function userInfo() {
  return request({
    url: '/user',
    method: 'get',
  })
}

export function users() {
  return request({
    url: `/users`,
    method: 'get',
  })
}

export function userById(id) {
  return request({
    url: `/users/${id}`,
    method: 'get',
  })
}

export function userByPage(page) {
  return request({
    url: `/users/?page=${page}`,
    method: 'get',
  })
}
