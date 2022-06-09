import {Component, OnInit} from '@angular/core';
import {FactureServiceService} from '../Service/facture-service.service';
import {Facture} from '../Model/Facture';


import swal from 'sweetalert';
import {FournisserService} from '../Service/FournisserService';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css']
})
export class ListFactureComponent implements OnInit {

  constructor(private  factureService: FactureServiceService,private fournisserService:FournisserService) {
  }

  lisfFactures: Facture[];
  token:string;
  ngOnInit(): void {
    this.token = localStorage.getItem('ID');

    this.fournisserService.getListFactureByFournisser(this.token).subscribe(
      (data) =>{this.lisfFactures =data,console.log(data)});
  }

  deleteFacture(facture: Facture) {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this product!',
      icon: 'warning',
      buttons: ['Cancel', 'Confirm'],
      dangerMode: true,
    })
      .then((willDelete) => {

        if (willDelete) {
          this.factureService.deleteFactureService(String(facture.id));
          let i = this.lisfFactures.indexOf(facture);
          console.log(facture.id);
          this.factureService.deleteFactureService(String(facture.id)).subscribe(
            () => this.lisfFactures.splice(i, 1)
          );
          swal('Product has been deleted!', {
            icon: 'success',
          });
        }/* else {
          swal('Product  is safe!');
        }*/
      });
  }
}
