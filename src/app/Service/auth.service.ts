import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { JwtHelperService } from '@auth0/angular-jwt';
import {environment} from "../../environments/environment";
import {Fournisseur} from '../Model/Fournisseur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // private helper = new JwtHelperService();
  public id:string;
  token:string
  user:Fournisseur

constructor(private http: HttpClient) {
}

  GetUser(){
    // @ts-ignore
    this.token = localStorage.getItem('ID');
    console.log(this.token)
   // const decodedToken = this.helper.decodeToken(this.token);
   // console.log(decodedToken.sub)

    return this.http.get<Fournisseur>('http://localhost:8084/centreCommercial/User/FournisseurById/'+this.token);
  }
  getImage() {
    // @ts-ignore
    this.token = localStorage.getItem('access_token');
    console.log(this.token)

   // const decodedToken = this.helper.decodeToken(this.token);
  //  console.log(decodedToken.sub)
  //  return this.http.get<any>(environment.url  +'/api/images/'+decodedToken.sub);
  }



}
