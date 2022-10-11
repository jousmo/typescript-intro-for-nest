import axios from 'axios'

export interface HttpAdapter {
  get<T>(url: string): Promise<T>
}

export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    console.log('With Fetch')
    const response = await fetch<T>(url)
    return await response.json<T>()
  }
}

export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios

  async get<T>(url: string): Promise<T> {
    console.log('With Axios')
    const { data } = await this.axios.get<T>(url)
    return data
  }
}
