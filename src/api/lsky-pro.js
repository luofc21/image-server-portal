import { get, post } from '@/utils/request'

const serverName = 'api/v1'

/**
  * @name 获取储存策略
  * @params { keyword: string } 
  */
export const strategies = (params) => get(`/strategies`, params, { serverName })
/**
  * @name 获取相册列表
  * @params { page: string, order: string, keyword: string } 
  */
export const albums = (params) => get(`/albums`, params, { serverName })
/**
  * @name 获取图片列表
  * @params { page: string, order: string, permission: string, keyword: string, album_id: string } 
  */
export const images = (params) => get(`/images`, params, { serverName })
