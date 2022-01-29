import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Facture} from '../../Model/Facture';
import * as EventEmitter from 'events';

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

  ngOnInit() {

  }

  Route() {
    this.router.navigate(['/AddFacture']);
  }

  deleteFacture(facture: Facture) {
    this.deleteEvent.emit(facture);
  }
}
