import { API_KEY, API_URL } from '@env'
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios'

const request = <T>(config: AxiosRequestConfig): AxiosPromise<T> => {
  return axios.request<T>({
    url: `${API_URL}/${config.url}?api-key=${API_KEY}`
  })
}

const get = <T>(config: AxiosRequestConfig): AxiosPromise<T> => {
  return request({ ...config, method: 'GET' })
}

export { get }
