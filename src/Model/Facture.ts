import {User} from './User';
import {Fournisseur} from './Fournisseur';


export class Facture {
  idFacture: number;
  typeFacture: string;
   etatPayement: string;
   Tatal: string;
   points: number;
   user: User;
   fournisseur: Fournisseur;
}
