import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';
import { UapdateFactureComponent } from './uapdate-facture/uapdate-facture.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    AdminLayoutModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    FormulaireComponent,
    ListFactureComponent,
    UapdateFactureComponent,
    ListUserComponent
  ],
  providers: [],
  exports: [
    ListUserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
