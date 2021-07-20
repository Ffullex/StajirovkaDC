import request from '@/utils/request'

export function getDashboards() {
  return request({
    url: 'dashboards',
    method: 'get',
  })
}

export function getDashboardById(id) {
  return request({
    url: `dashboards/${id}`,
    method: 'get',
  })
}

export function createDashboard(data) {
  return request({
    url: 'dashboards',
    method: 'post',
    data,
  })
}

export function getDashboardsByPage(page) {
  return request({
    url: `dashboards/?page=${page}`,
    method: 'get',
  })
}
