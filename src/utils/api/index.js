import request from "../request.js"
export const getLunbotu = data => {
  return request({
    method: 'GET',
    url: '/api/getlunbo',//举例
    data
  })
}
export const NewslistUrl = data => {
  return request({
    method: 'GET',
    url: '/api/getnewslist',//举例
    data
  })
}
export const NewsInfoUrl = data => {
  return request({
    method: 'GET',
    url: '/api/NewsInfoUrl',//举例
    data
  })
}