import request from '@/utils/request'

// 查询生成表数据
export function getInfo(query) {
  return request({
    url: '/knowledge-base-index/list',
    method: 'get',
    params: query
  })
}