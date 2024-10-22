import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl : string) {

  }

  get<T>(controller:string,action?:string, id?:string) {
    let url : string = "";

    url = '${this.baseUrl}/${controller}/${action}';

    this.httpClient.get();
  }

  post<T>() {

  }

  put<T>() {

  }

  delete<T>() {

  }

}

export class RequestParameters{
  controller?:string;
  action?:string;
  headers?:HttpHeaders;
}