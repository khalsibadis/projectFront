import {Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Facture} from '../../Model/Facture';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private router: Router) {
  }

  @Input() lisfFactures: Facture[];
  @Output() deleteEvent = new EventEmitter<Facture>();

  ngOnInit():void {

  }

  Route() {
    this.router.navigate(['Facture/AddFacture']);
  }
  routerToUapdate(){
    this.router.navigate(['Facture/UapdateFacture']);
  }


  deleteFacture(facture: Facture) {
    this.deleteEvent.emit(facture);
  }
}
