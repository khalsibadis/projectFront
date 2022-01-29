import {User} from './User';
import {Fournisseur} from './Fournisseur';


export class Facture {
  id: string;
  typeFacture: string;
  etatPayement: string;
  nbrPoint: number;
  total: number;
  user: User;
  fournisseur: Fournisseur;
}
