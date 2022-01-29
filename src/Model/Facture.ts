import {User} from './User';
import {Fournisseur} from './Fournisseur';


export class Facture {
  id: string;
  etatPayement: string;
  total: string;
  typeFacture: string;
  user: User;
  fournisseur: Fournisseur;
}
