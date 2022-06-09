import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FactureServiceService} from '../Service/facture-service.service';
import {Fournisseur} from '../Model/Fournisseur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username:string;
  pass:string;
  fournisseur:Fournisseur;
  htmlStr:number=0
  constructor(private router: Router,private factureService:FactureServiceService) { }
token:any
  ngOnInit(): void {
    this.token = localStorage.getItem('ID');
    console.log(this.token)
    this.htmlStr =0
    if(this.fournisseur!=null)
      this.RouteDashbord();
    else if (this.token!=null )
      this.RouteDashbord();
    else
      this.router.navigate(['/'])

  }

  RouteDashbord() {
    this.router.navigate(['/dashboard']);
  }

  login(){
    this.factureService.Login(this.username,this.pass).subscribe(
      (data)=>{this.fournisseur=data,console.log(data), localStorage.setItem('ID', String(this.fournisseur.id))
    if(this.fournisseur!=null){
      this.RouteDashbord()
        this.htmlStr =0}

      }

    )
  if (this.fournisseur==null)
    this.htmlStr =1;


}
}
