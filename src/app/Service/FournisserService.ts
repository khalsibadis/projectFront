import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Facture} from '../Model/Facture';
import {Fournisseur} from '../Model/Fournisseur';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class FournisserService {

  constructor(private http: HttpClient) {
  }

  url = environment.url + '/User';

  getListFournisser() {
    return this.http.get<Fournisseur[]>(this.url + '/ListFournisseur');
  }
  afficherFacturebyFournisseur( idFournisseur:number){
    return this.http.get<Facture[]>(this.url+'/affichierFactureByFournisseur/'+idFournisseur)
  }
  afficherFournisseurById( id:number){
    return this.http.get<Fournisseur>(this.url+'/FournisseurById/'+id)
}

}
