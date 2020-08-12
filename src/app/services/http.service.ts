import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
  })
  export class HttpService {
    constructor(
      private http: HttpClient,
      private storageService: StorageService
      ) {}
  
    auth(serviceName: string, data: any) {
      const headers = new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type':  'application/json'
      });
      const options = { headers: headers, withCredintials: false };
      const url = environment.apiUrl + serviceName;
  
      return this.http.post(url, JSON.stringify(data), options);
    }

    post(serviceName: string, data: any, token: any) {
      const headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +token
      });
      const options = { headers: headers, withCredintials: false };
      const url = environment.apiUrl + serviceName;
  
      return this.http.post(url, JSON.stringify(data), options);
    }

    postMultipart(serviceName: string, data: any, token: any) {
      const headers = new HttpHeaders({ 
        'Content-Type': 'application/octet-stream ------WebKitFormBoundaryC7tPtloOBsnaPLDB',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' +token
      });
      
      const options = { headers: headers, responseType: 'blob'};
      const url = environment.apiUrl + serviceName;
  
      //return this.http.post(url, JSON.stringify(data), options);
      return this.http.post(url, data, { headers, responseType: 'blob' as 'json'});
    }

  
    get(serviceName: string, token: any){
      const headers = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      });
      const options = { headers: headers, withCredintials: true };
      const url = environment.apiUrl + serviceName;
  
      return this.http.get(url, options);
    }

    getCallApiOverView(serviceName: string){
      const headers = new HttpHeaders({ 
        'Content-Type': 'application/json'
      });
      const options = { headers: headers, withCredintials: false };
      const url = environment.apiOverView + serviceName;
  
      return this.http.get(url, options);
    }

    postCallApiOverView(serviceName: string, data: any){
      const headers = new HttpHeaders({ 
        'Content-Type': 'application/json'
      });
      const options = { headers: headers, withCredintials: false };
      const url = environment.apiOverView + serviceName;
  
      return this.http.post(url, JSON.stringify(data), options);
    }

  }