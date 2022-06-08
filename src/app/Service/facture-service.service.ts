import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Facture} from '../Model/Facture';
import {Observable} from 'rxjs';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class FactureServiceService {

  constructor(private http: HttpClient) {
  }

  url = environment.url + '/Facture';

  getListFacture() {
    return this.http.get<Facture[]>(this.url + '/AfficherList');
  }

  deleteFactureService(id: string) {
    return this.http.delete(this.url + '/supprimerFacture/'+id);
  }
  addFactureService(facture: Facture,idFournisseur:string,idType:string):Observable<any>{
    return this.http.post(this.url+'/ajouterFacture/'+idFournisseur+'/'+idType , facture);
  }

  modifierFacture(facture: Object,idT:string){
    return this.http.put<Facture>(this.url+'/modifierFacture/'+idT,facture);
  }

  getFactureById(id: number){
    return this.http.get<Facture>(this.url+'/afficherFacture/'+id);
  }


}
