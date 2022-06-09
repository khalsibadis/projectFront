import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TypeFacture} from '../Model/TypeFacture';

@Injectable({
  providedIn: 'root'
})
export class TypeFactureService {
  url = environment.url + '/TypeFacture';
  constructor(private http:HttpClient ) { }
  getListTypeFacture(idf:string) {
    return this.http.get<TypeFacture[]>(this.url + '/Get/'+idf);
  }

  getTypeFactureById(idf:string) {
    return this.http.get<TypeFacture>(this.url + '/GetById/'+idf);
  }
  AddTypeFacture(typeF:TypeFacture,idF:string){
    return this.http.post(this.url+'/Post/'+idF,typeF);
  }
  DeleteTypeFacture(idTF:string){
    return this.http.delete(this.url+'/Delete/'+idTF);
  }
  Update (type: TypeFacture){
    return this.http.put<TypeFacture>(this.url+'/Put',type);
  }


}
