import { Component, OnInit } from '@angular/core';
import {Container} from '@angular/compiler/src/i18n/i18n_ast';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  RouteDashbord() {
    this.router.navigate(['/dashboard']);

  }
}
