import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

baseUrl=environment.apiUrl
  constructor( private _httpClient:HttpClient) {
    }


getdata( ) : Observable<any> {

  return this._httpClient.get(`${this.baseUrl}posts`)
}

GetPostByid(id): Observable<any> {

  return this._httpClient.get(`${this.baseUrl}posts/${id}`)
}

Updatedata(id,body) : Observable<any> {

  return this._httpClient.put(`${this.baseUrl}posts/${id}`,body)
}

  // delete post
  deletePost(id): Observable<any> {
    return this._httpClient.delete(`${this.baseUrl}posts/${id}`);
  }

}
