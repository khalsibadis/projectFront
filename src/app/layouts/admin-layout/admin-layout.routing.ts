import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ListFactureComponent } from '../../list-facture/list-facture.component';
import { ListUserComponent } from '../../list-user/list-user.component';
import {FormulaireComponent} from '../../formulaire/formulaire.component';
import {UapdateFactureComponent} from '../../uapdate-facture/uapdate-facture.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'Facture',     component: ListFactureComponent },
    { path: 'Contact',     component: ListUserComponent },
    { path: 'Facture/AddFacture',  component: FormulaireComponent},
    { path: 'Facture/UapdateFacture/:id',  component: UapdateFactureComponent },

];
