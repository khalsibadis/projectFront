import { Component, OnInit } from '@angular/core';
import {FournisserService} from '../Service/FournisserService';
import {Fournisseur} from '../Model/Fournisseur';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
fournisseur:Fournisseur;
token:string;
  constructor(private fournisserService:FournisserService) {}

  ngOnInit() {
    this.token = localStorage.getItem('ID');

    this.fournisserService.afficherFournisseurById(Number(this.token)).subscribe(
      (data)=>this.fournisseur=data);
    ;
  }

}
