import {Component, OnInit, ViewChild} from '@angular/core';
import {TypeFacture} from '../Model/TypeFacture';
import {Fournisseur} from '../Model/Fournisseur';
import {TypeFactureService} from '../Service/type-facture.service';
import {AuthService} from '../Service/auth.service';

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
    this.up=0;
  }

  getUser(){
    this.authService.GetUser().subscribe(
      (data)=> {this.fournisseur=data
      }
    )
  }


  up:number=0;
  Update (type:TypeFacture){
  this.up=1;
  this.typeFactureService.getTypeFactureById(type.id).subscribe(
    (data)=>(this.typeFacture=data,console.log(data))
  )
  }

  getListTypeFacture(){
    this.token = localStorage.getItem('ID');
    this.typeFactureService.getListTypeFacture(this.token).subscribe(
      (data)=>(this.ListTypeFacture=data,console.log(data))
    )
  }

  onSubmit(){
    if (this.up==0){
    this.typeFactureService.AddTypeFacture(this.typeFacture,String(this.fournisseur.id)).subscribe();
    this.ListTypeFacture.push(this.typeFacture);
    }
    else{
      this.typeFactureService.Update(this.typeFacture).subscribe();
      this.up=0;
    }
  }
  deleteTF(typeFacture:TypeFacture){

    let i = this.ListTypeFacture.indexOf(typeFacture);

    this.typeFactureService.DeleteTypeFacture(typeFacture.id).subscribe(
      () => this.ListTypeFacture.splice(i, 1)
    );
  }
  //@ViewChild('successModal') public successModal: ModalDirective;

}
