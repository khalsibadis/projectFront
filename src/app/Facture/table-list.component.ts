import {Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Facture} from '../Model/Facture';
import {TypeFactureService} from '../Service/type-facture.service';
import {AuthService} from '../Service/auth.service';
import {Fournisseur} from '../Model/Fournisseur';
import {TypeFacture} from '../Model/TypeFacture';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private router: Router,private typeFacture:TypeFactureService,private authService:AuthService) {
  }

  @Input() lisfFactures: Facture[];
  @Output() deleteEvent = new EventEmitter<Facture>();

  searchText:any;
  p :number=1;

  ListTypeFacture:TypeFacture[];
  fournisseur:Fournisseur;

  ngOnInit():void {
//private typeFacture:TypeFactureService,private authService:AuthService
    this.authService.GetUser().subscribe(
      (data)=> {this.fournisseur=data,
        this.typeFacture.getListTypeFacture(String(this.fournisseur.id)).subscribe(
          (data)=>{this.ListTypeFacture=data, console.log(this.ListTypeFacture)}
        )

      }
    )
  }

  Route() {
    this.router.navigate(['Facture/AddFacture']);
  }

  deleteFacture(facture: Facture) {
    this.deleteEvent.emit(facture);
  }
}
