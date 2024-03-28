import request from '@/assets/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
//批量删除用户
export function batchDeleteUser() {
  return request({
    url: '/user/delete',
    method: 'post'
  })
}