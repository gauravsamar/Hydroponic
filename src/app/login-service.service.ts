import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './config'
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  googleSignIn(token:any)
  {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${config.API_URL}`
    ,{
      postBody:`id_token=${token}&providerId=google.com`,requestUri:'http://localhost:4200',returnIdpCredential:true,returnSecureToken:true
    });
  }
}
