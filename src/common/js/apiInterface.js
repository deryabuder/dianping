import axios from 'axios'

const fetch = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

export function homeAd() {
  return fetch({
    url: '/api/homead',
    method: 'get'
  })
}

export function likeList() {
  return fetch({
    url: '/api/likelist',
    method: 'get'
  })
}

export function detailInfo() {
  return fetch({
    url: '/api/detail/info',
    method: 'get',
  })
}

export function detailComment() {
  return fetch({
    url: '/api/detail/comment',
    method: 'get'
  })
}

export function orderList(param) {
  return fetch({
    url: '/api/user/orderlist',
    method: 'get',
    params: param
  })
}
export function searchList(param) {
  return fetch({
    url: '/api/search/list',
    method: 'get',
    params: param
  })
}

export function postComment(param) {
  return fetch({
    url: '/api/submitComment', 
    method: 'post', 
    data: param
  })
}