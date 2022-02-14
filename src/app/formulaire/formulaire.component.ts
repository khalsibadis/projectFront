import {Component, OnInit} from '@angular/core';
import {FournisserService} from '../Service/FournisserService';
import {Fournisseur} from '../Model/Fournisseur';
import {ClientService} from '../Service/ClientService';
import {FactureServiceService} from '../Service/facture-service.service';
import {Facture} from '../Model/Facture';
import { Router} from '@angular/router';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor(private fournisserService:FournisserService,private clientService:ClientService,private factureServiceService:FactureServiceService,private router:Router) {
  }
  factures = new Facture();
  listFournisser:Fournisseur[];
  ListClient:Fournisseur[];
  idFournisser:string;
  idUser:string;


  ngOnInit(): void {
    this.fournisserService.getListFournisser().subscribe(
      (data)=>this.listFournisser=data);
     this.clientService.getListUser().subscribe(
     (data)=>this.ListClient=data);
  }
  onSubmit(){
    this.factureServiceService.addFactureService(this.factures,this.idFournisser).subscribe();
    this.factureServiceService.getListFacture();
    this.router.navigate(['Facture']);

  }


}
