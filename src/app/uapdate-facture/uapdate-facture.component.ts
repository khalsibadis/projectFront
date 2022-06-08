import { Component, OnInit } from '@angular/core';
import {FactureServiceService} from '../Service/facture-service.service';
import {Facture} from '../Model/Facture';
import {ActivatedRoute, Router} from '@angular/router';
import {FournisserService} from '../Service/FournisserService';
import {ClientService} from '../Service/ClientService';
import {Fournisseur} from '../Model/Fournisseur';
import {TypeFactureService} from '../Service/type-facture.service';
import {AuthService} from '../Service/auth.service';
import {TypeFacture} from '../Model/TypeFacture';


@Component({
  selector: 'app-uapdate-facture',
  templateUrl: './uapdate-facture.component.html',
  styleUrls: ['./uapdate-facture.component.css']
})
export class UapdateFactureComponent implements OnInit {
  constructor(private factureServiceService:FactureServiceService,
              private router:Router,private activatedRoute:ActivatedRoute,
              private fournisserService:FournisserService,
              private clientService:ClientService,
              private typeFacture:TypeFactureService,
              private authService:AuthService) { }


  Newfacture :Facture;
  listFournisser:Fournisseur[];
  ListClient:Fournisseur[];
  ListTypeFacture:TypeFacture[];
  fournisseur:Fournisseur;

  ngOnInit(): void {
    this.Newfacture=new Facture();


    //private typeFacture:TypeFactureService,private authService:AuthService
    // ListTypeFacture:TypeFacture[];

    this.authService.GetUser().subscribe(
      (data)=> {this.fournisseur=data,
        this.typeFacture.getListTypeFacture(String(this.fournisseur.id)).subscribe(
          (data)=>{this.ListTypeFacture=data, console.log(this.ListTypeFacture)}
        )

      }
    )

    this.fournisserService.getListFournisser().subscribe(
      (data)=>this.listFournisser=data);

    this.clientService.getListUser().subscribe(
      (data)=>this.ListClient=data);

    this.activatedRoute.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));

       this.factureServiceService.getFactureById(id).subscribe(
          d=>{
            this.Newfacture=d;
            console.log(this.Newfacture)
          }
        )
      }
    )

  }

  idType:string
Uapdate(){
    this.factureServiceService.modifierFacture(this.Newfacture,this.idType).subscribe(
      d=>{
        this.router.navigate(['Facture']);
      }
    );

  }
}
