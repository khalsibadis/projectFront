import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Facture} from '../Model/Facture';
import {Observable} from 'rxjs';
import {Fournisseur} from '../Model/Fournisseur';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class FournisserService {

  constructor(private http: HttpClient) {
  }

  url = environment.url + '/Fournisseur';

  getListFournisser() {
    return this.http.get<Fournisseur[]>(this.url + '/List');
  }
  afficherFacturebyFournisseur( idFournisseur:number){
    return this.http.get<Facture[]>(this.url+'/affichierFactureByFournisseur/'+idFournisseur)
  }

}
