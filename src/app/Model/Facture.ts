import {User} from './User';
import {Fournisseur} from './Fournisseur';


export class Facture {
  id: number;
  typeFacture: string;
  etatPayement: string;
  nbrPoint: number;
  total: number;
  user: User;
  fournisseur: Fournisseur;
}
