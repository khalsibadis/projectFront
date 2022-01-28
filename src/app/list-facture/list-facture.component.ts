import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FactureServiceService} from '../Service/facture-service.service';
import {Facture} from '../../Model/Facture';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css']
})
export class ListFactureComponent implements OnInit {

  constructor(/*private  factureService: FactureServiceService*/) { }
  //@Input() lisfFactures: Facture[];
  ngOnInit(): void {
   // this.factureService.getListFacture().subscribe(
   //   (data) => {
        //this.lisfFactures = data;
       // console.log(data);
   //   }
   // );
  }

}
