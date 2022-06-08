import {Fournisseur} from './Fournisseur';
import {TypeFacture} from './TypeFacture';


export class Facture {
  id: number;
  typeFacture: TypeFacture;
  etatPayement: string;
  nbrPoint: number;
  total: number;
  user: string;
  fournisseur: Fournisseur;
}
