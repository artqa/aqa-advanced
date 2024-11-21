import RestClient from "../restClient/RestClient";

export default class Gadgets extends RestClient{
  constructor(){
    super('https://api.restful-api.dev');
    this.url = '/objects'
  }

  async getAllObjects(headers) {
    return this.sendGet({ url: `${this.url}`, headers });
  }

  async getObjectByID(data, headers) {
    return this.sendGet({ url: `${this.url}?id=${data[0]}&id=${data[1]}&id=${data[2]}`, headers });
  }

  async getSingleObject(id, headers) {
    return this.sendGet({ url: `${this.url}/${id}`, headers });
  }

  async addObject(data, headers) {
    return this.sendPost({ url: `${this.url}`, data, headers });
  }
}