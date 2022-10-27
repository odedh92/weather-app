import { Injectable } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { ApiError } from '../model/apierror.model';
import { ApiResponse } from '../model/apiresponse.model';

interface GetOptions {
  url:string,
  params?: {[key:string] : any},
  data?:any
}

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private axiosClient : AxiosInstance ;
  constructor() {
    this.axiosClient = axios.create({
      timeout:3000
    })
  }

  public async get<T>(options:GetOptions) : Promise<ApiResponse<T>> {
    try {
      let axiosResponse = await this.axiosClient.request<T>({
        method:'get',
        ...options
      })
      return { data: axiosResponse.data, error: null}
    } catch(error : any) {
      return { error : error, data:null }
    }
  }
}
