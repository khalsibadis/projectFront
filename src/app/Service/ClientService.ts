import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

import {Fournisseur} from '../Model/Fournisseur';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {
  }

  url = environment.url + '/User';

  getListUser() {
    return this.http.get<Fournisseur[]>(this.url + '/ListClient');
  }

}
