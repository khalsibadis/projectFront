import {Component, OnInit, ViewChild} from '@angular/core';
import {TypeFacture} from '../Model/TypeFacture';
import {Fournisseur} from '../Model/Fournisseur';
import {TypeFactureService} from '../Service/type-facture.service';
import {AuthService} from '../Service/auth.service';
//import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-typefacture',
  templateUrl: './typefacture.component.html',
  styleUrls: ['./typefacture.component.css']
})
export class TypefactureComponent implements OnInit {
  typeFacture:TypeFacture=new TypeFacture();
  fournisseur:Fournisseur=new Fournisseur();
  ListTypeFacture:TypeFacture[];
  token:string;
  constructor(private typeFactureService:TypeFactureService,private authService:AuthService) { }

  ngOnInit(): void {
    this.getUser();
    this.getListTypeFacture();
  }

  getUser(){
    this.authService.GetUser().subscribe(
      (data)=> {this.fournisseur=data
      }
    )
  }

  getListTypeFacture(){
    this.token = localStorage.getItem('ID');
    this.typeFactureService.getListTypeFacture(this.token).subscribe(
      (data)=>(this.ListTypeFacture=data,console.log(data))
    )
  }

  onSubmit(){
    this.typeFactureService.AddTypeFacture(this.typeFacture,String(this.fournisseur.id)).subscribe();
    this.ListTypeFacture.push(this.typeFacture);
  }
  deleteTF(typeFacture:TypeFacture){

    let i = this.ListTypeFacture.indexOf(typeFacture);

    this.typeFactureService.DeleteTypeFacture(typeFacture.id).subscribe(
      () => this.ListTypeFacture.splice(i, 1)
    );
  }
  //@ViewChild('successModal') public successModal: ModalDirective;

}
