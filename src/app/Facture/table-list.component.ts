import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FactureServiceService} from '../Service/facture-service.service';
import {Facture} from '../../Model/Facture';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private router: Router,private  factureService: FactureServiceService) { }

@Input() lisfFactures: Facture[];
  ngOnInit() {
    this.factureService.getListFacture().subscribe(
      (data) => {
        this.lisfFactures = data;
        console.log(data);
      }
    );
  }
Route() {
  this.router.navigate(['/AddFacture']);
}
}
