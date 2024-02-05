import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
// import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/auth.js'
// import { showLoading, hideLoading } from '@/utils/loading.js'
import config from '../config'
// import hjMosService from 'hjMos-service'

const { defaultApiUrl, systemIdEncode } = config

const ENV = import.meta.env

// const systemId = ENV.VITE_GLOB_APP_ID

interface Config extends AxiosRequestConfig {
  serverName?: string
  showLoading?: boolean
}

interface Response extends AxiosResponse {
  message: string
}

const service = axios.create({
  baseURL: ENV.VITE_API_URL_PREFIX,
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  },
  timeout: 100000 // 请求超时时间
})

service.interceptors.request.use(
  (axiosConfig) => {
    const config = axiosConfig as Config
    const token = getToken()
    config.headers['Authorization'] = token
    // 根据不同api服务请求不同接口
    if (config.serverName) {
      config.url = config.serverName + config.url
    }
    if (config.showLoading !== false) {
      // showLoading(config.showLoading)
    }
    return config
  },
  (error) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (responseConfig) => {
    const response = responseConfig as Response
    if (response.config.headers.showLoading !== false) {
      // hideLoading()
    }

    if (response.status !== 200) {
      // ElMessage({
      //   message: response?.message || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      return Promise.reject(new Error(response?.message || 'Error'))
    }

    const res = response.data

    const status = res.status
    // console.log('code', code)
    // n8n请求返回
    // if (!code) return res
    switch (status) {
      case true: {
        return res.data || res
      }
      default: {
        // ElMessage.error(res.message)
        return Promise.reject(response)
      }
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    // ElMessage({
    //   message: error.message || 'error',
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

// 过滤空数据包含NaN，undefined，null
const filterNull = (json: any) => {
  if (json?.constructor !== Object) {
    return json
  }
  const newJson: any = {}
  const reg = RegExp(/^(NaN|undefined|null)$/)
  for (const li in json) {
    const value = json[li] === 0 || json[li] === false ? !json[li] : json[li]
    if (value && !reg.test(value)) {
      newJson[li] = json[li]
    }
  }
  return newJson
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Options} params [附加配置，eg.后端服务名,用以替换默认, {serverName: XXX}]
 */
export function get(url: string, params: any, options: any) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params,
        ...options
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} options [options中的isNullPermit表示允许该请求传空值参数]
 */
export function post(url: string, params: any, options: any) {
  return new Promise((resolve, reject) => {
    const finalParams = options && options.isNullPermit ? params : filterNull(params)
    service
      .post(url, finalParams, options)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

/**
 * upload方法，上传文件和图片
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function upload(url: string, params: any, options: any) {
  return new Promise((resolve, reject) => {
    service
      .post(url, params, {
        ...options,
        headers: { 'content-type': 'multipart/form-data' }
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

export default { get, post, upload }
