import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Facture} from '../../Model/Facture';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() lisfFactures: Facture[];
  ngOnInit() {

  }
Route() {
  this.router.navigate(['/AddFacture']);
}
}
