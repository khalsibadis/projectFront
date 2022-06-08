import {Component, OnInit} from '@angular/core';
import {FournisserService} from '../Service/FournisserService';
import {Fournisseur} from '../Model/Fournisseur';
import {ClientService} from '../Service/ClientService';
import {FactureServiceService} from '../Service/facture-service.service';
import {Facture} from '../Model/Facture';
import { Router} from '@angular/router';
import {AuthService} from '../Service/auth.service';
import {TypeFacture} from '../Model/TypeFacture';
import {TypeFactureService} from '../Service/type-facture.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private typeFacture:TypeFactureService,private authService:AuthService,private fournisserService:FournisserService,private clientService:ClientService,private factureServiceService:FactureServiceService,private router:Router) {
  }
  factures = new Facture();
  listFournisser:Fournisseur[];
  ListClient:Fournisseur[];
  ListTypeFacture:TypeFacture[];
  fournisseur:Fournisseur;
  idFournisser:any;

  //idUser:string;


  ngOnInit(): void {
   /* this.fournisserService.getListFournisser().subscribe(
      (data)=>{this.listFournisser=data,console.log(data)});
     this.clientService.getListUser().subscribe(
     (data)=>{this.ListClient=data,console.log(data)});
*/
   //private typeFacture:TypeFactureService,private authService:AuthService
  // ListTypeFacture:TypeFacture[];

    this.authService.GetUser().subscribe(
       (data)=> {this.fournisseur=data,
         this.typeFacture.getListTypeFacture(String(this.fournisseur.id)).subscribe(
           (data)=>{this.ListTypeFacture=data, console.log(this.ListTypeFacture)}
         )

       }
     )


  }
  idType:string
  onSubmit(){
    this.factureServiceService.addFactureService(this.factures,String(this.fournisseur.id),this.idType).subscribe();
    this.factureServiceService.getListFacture();
    this.router.navigate(['Facture']);

  }

}
