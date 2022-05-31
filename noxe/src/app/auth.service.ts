import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDAte=new BehaviorSubject(null)
  constructor(private _httpclient:HttpClient, private _router:Router) {
    if(localStorage.getItem("userToken")!=null) {
      this.saveUserDate()
    }
   }
   logout(){
     localStorage.removeItem("userToken");
     this.userDAte.next(null);
     this._router.navigate(["login"])
   }
  saveUserDate(){
    let decoded=JSON.stringify(localStorage.getItem("userToken")) ;
   this.userDAte.next(jwtDecode(decoded))

  }
  register(data:any):Observable<any>{
     return this._httpclient.post("https://route-egypt-api.herokuapp.com/signup", data);
  }
  login(data:any):Observable<any>{
    return this._httpclient.post("https://route-egypt-api.herokuapp.com/signin", data);
 }
  
}
