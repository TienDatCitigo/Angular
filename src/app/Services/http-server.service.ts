import { Students } from './../model/Student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {

  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM_USER = 'https://randomuser.me/api/?results=';
  //tên domain lấy data
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //Authorization: 'my-auth-token'
    }),
  };

  constructor(private httpClient: HttpClient) { }

    // Get data từ một trang web
  public getComments(): Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getStudents(): Observable<any>{
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public addStudents(data: Students): Observable<any>{
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient.post<any>(url, data, this.httpOptions);
  }

  public postComments(payload: any): Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    console.log('PostComment:' + url);
    console.log('PostComment: payload', payload);
    return this.httpClient.post<any>(url, payload , this.httpOptions);
  }

  public getRandomUser(users: number = 1): Observable<any>{
    const url = `${this.REST_API_SERVER_RANDOM_USER}` + users;
    console.log(url);
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
