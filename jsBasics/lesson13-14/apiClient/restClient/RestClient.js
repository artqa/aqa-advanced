import axios from "axios"

export default class RestClient{
  constructor(baseUrl, configOverrides){
    this.baseUrl =  baseUrl
    this.axiosInstance = axios.create({baseURL: this.baseUrl, ...configOverrides});
  }

  async sendGet({url, requestHeaders, params, additionalConfigs}){
    return this.#sendRequest({url, method: 'GET', requestHeaders, params, additionalConfigs})
  }

  async sendPost({url, data, requestHeaders, params, additionalConfigs}){
    return this.#sendRequest({url, method: 'POST', data, requestHeaders, params, additionalConfigs})
  }

  async sendPut({url, data, requestHeaders, params, additionalConfigs}){
    return this.#sendRequest({url, method: 'PUT', data, requestHeaders, params, additionalConfigs})
  }

  async sendPatch({url, data, requestHeaders, params, additionalConfigs}){
    return this.#sendRequest({url, method: 'PATCH', data, requestHeaders, params, additionalConfigs})
  }

  async sendDelete({url, requestHeaders, params, additionalConfigs}){
    return this.#sendRequest({url, method: 'DELETE', requestHeaders, params, additionalConfigs})
  }

  async #sendRequest({url, method, data, requestHeaders, params, additionalConfigs}) {
    try{
      return this.axiosInstance.request({url, method, data, requestHeaders, params, additionalConfigs})
    } catch(error) {
      throw new Error(`Error upon execution of call to ${this.baseUrl}${this.url}, error: ${error.stack}`);
    }
  }
}