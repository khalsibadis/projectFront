import {Component, OnInit} from '@angular/core';
import {FactureServiceService} from '../Service/facture-service.service';
import {Facture} from '../../Model/Facture';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css']
})
export class ListFactureComponent implements OnInit {

  constructor(private  factureService: FactureServiceService) {
  }

  lisfFactures: any;

  ngOnInit(): void {
    this.factureService.getListFacture().subscribe(
      (data) => this.lisfFactures = data);
  }

  deleteFacture(facture: Facture) {
     this.factureService.deleteFactureService(facture.id);
    const i = this.lisfFactures.indexOf(facture);
    this.factureService.deleteFactureService(facture.id).subscribe(
      () => this.lisfFactures.splice(i, 1)
    );
  }

}
