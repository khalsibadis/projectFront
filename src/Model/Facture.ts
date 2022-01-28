import {User} from './User';
import {Fournisseur} from './Fournisseur';


export class Facture {
  idFacture: string;
    etatPayement: string;
    Total: string;
    typeFacture: string;
   //points: string;
   user: User;
   fournisseur: Fournisseur;
}
