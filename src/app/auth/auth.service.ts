import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}
)
export class AuthService {

  private baseUrl = 'http://localhost:3000/api/auth';

  constructor(private http:HttpClient) { }

  register(data:{email:string,password:string}){

    return this.http.post(`${this.baseUrl}/register`,data);
  }

  login(data:{email:string,password:string}){
    return this.http.post<{token:string}>(`${this.baseUrl}/login`,data);
  }
}
