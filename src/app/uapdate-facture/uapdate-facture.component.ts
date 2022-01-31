import { Component, OnInit } from '@angular/core';
import {FactureServiceService} from '../Service/facture-service.service';
import {Facture} from '../../Model/Facture';
import {ActivatedRoute, Router} from '@angular/router';
import {FournisserService} from '../Service/FournisserService';
import {ClientService} from '../Service/ClientService';
import {Fournisseur} from '../../Model/Fournisseur';
import {User} from '../../Model/User';

@Component({
  selector: 'app-uapdate-facture',
  templateUrl: './uapdate-facture.component.html',
  styleUrls: ['./uapdate-facture.component.css']
})
export class UapdateFactureComponent implements OnInit {
  constructor(private factureServiceService:FactureServiceService,
              private router:Router,private activatedRoute:ActivatedRoute,
              private fournisserService:FournisserService,
              private clientService:ClientService) { }


  Newfacture :Facture;
  listFournisser:Fournisseur[];
  ListClient:User[];
  idFournisser:number;
  idUser:number;


  ngOnInit(): void {
    this.Newfacture=new Facture();
    this.fournisserService.getListFournisser().subscribe(
      (data)=>this.listFournisser=data);
    this.clientService.getListUser().subscribe(
      (data)=>this.ListClient=data);
    this.activatedRoute.paramMap.subscribe(
      d=>{
        let id =Number(d.get('id'));
       this.factureServiceService.getFactureById(id).subscribe(
          d=>{
            console.log(d)
            this.Newfacture=d;
          }
        )
      }
    )

  }


Uapdate(){
    this.Newfacture.fournisseur.id=this.idFournisser;
  this.Newfacture.user.id=this.idUser;
    this.factureServiceService.modifierFacture(this.Newfacture).subscribe(
      d=>{
        this.router.navigate(['Facture']);
      }
    );

  }
}
