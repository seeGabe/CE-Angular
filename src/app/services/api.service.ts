import { Injectable } from '@angular/core';
import axios, { Axios, AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private _axios: AxiosInstance;
  constructor() {
    this._axios = axios.create({
      baseURL: 'https://api.github.com/',
      timeout: 3000
    })
   }

   public async get(opts:any): Promise<any> {

      let response = await this._axios.request({
        method: 'GET',
        url: opts.url,
        params:opts.params
      });

      return response.data;
   }
}
