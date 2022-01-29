import {User} from './User';
import {Fournisseur} from './Fournisseur';


export class Facture {
  id: string;
  typeFacture: string;
  etatPayement: string;
  nbrPoint: string;
  total: string;
  user: User;
  fournisseur: Fournisseur;
}
