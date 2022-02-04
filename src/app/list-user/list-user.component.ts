import { Component, OnInit } from '@angular/core';
import {FactureServiceService} from '../Service/facture-service.service';
import {Facture} from '../Model/Facture';
import {Observable} from 'rxjs';
import {FournisserService} from '../Service/FournisserService';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private fournisserService:FournisserService) { }
  ListFacture:Facture[]
  ngOnInit(): void {


    this.fournisserService.afficherFacturebyFournisseur(1).subscribe(
      (data) => this.ListFacture = data);
  }

}
