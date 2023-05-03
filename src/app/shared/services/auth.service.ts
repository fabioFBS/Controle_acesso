import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: string) {
    this.http.get<Users>(environment.apiUrl + "users" + credentials).subscribe(res => {
      if(res != null){
        localStorage.setItem('currentUser',res.name)
      }
    })
  }

  createLogin(credentials: Users){
    this.http.post<Users>(environment.apiUrl + "users", credentials).subscribe((res: Users) => {return res})
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
  }
}
