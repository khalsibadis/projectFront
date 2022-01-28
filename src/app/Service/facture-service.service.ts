import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Facture} from '../../Model/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureServiceService {

  constructor(private http: HttpClient) { }
  url = environment.url+'/Facture';
  getListFacture() {
    return this.http.get<Facture[]>(this.url+'/AfficherList');
  }
}
