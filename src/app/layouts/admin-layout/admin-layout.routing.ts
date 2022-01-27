import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../Facture/table-list.component';
import { TypographyComponent } from '../../Contact/typography.component';
import {FormulaireComponent} from '../../formulaire/formulaire.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'Facture',     component: TableListComponent },
    { path: 'Contact',     component: TypographyComponent },
  { path: 'AddFacture',  component: FormulaireComponent},


];
