import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
  next: string | null
  count: number
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0be3b48d787e4852a1537d7d832ffd1a",
  },
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }
  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + "/" + id).then(res => res.data)
  }
}

export default APIClient
