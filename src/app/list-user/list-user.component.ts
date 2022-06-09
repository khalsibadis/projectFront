import { Component, OnInit } from '@angular/core';
import {FactureServiceService} from '../Service/facture-service.service';
import {Facture} from '../Model/Facture';
import {Observable} from 'rxjs';
import {FournisserService} from '../Service/FournisserService';
import {TypeFactureService} from '../Service/type-facture.service';
import {AuthService} from '../Service/auth.service';
import {Fournisseur} from '../Model/Fournisseur';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private fournisserService:FournisserService,private typeFacture:TypeFactureService,private authService:AuthService) { }
  ListFacture:Facture[]
  token:any;
  ngOnInit(): void {
    this.token = localStorage.getItem('ID');


    this.fournisserService.afficherFactureCreditbyFournisseur(this.token).subscribe(
      (data) => this.ListFacture = data);
  }



}
