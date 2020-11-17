import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(private http:HttpClient) { }


  forgotPwd(data:{email:string})
  {
    return this.http.post("http://localhost:8080/forgot",data)
  }

  forgotPwd2(data:{password:string,confirmPassword:string,token:string})
  {
    return this.http.post("http://localhost:8080/reset-password",data)
  }

  
}
