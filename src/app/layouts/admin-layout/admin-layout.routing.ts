import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ListFactureComponent } from '../../list-facture/list-facture.component';
import { TypographyComponent } from '../../Contact/typography.component';
import {FormulaireComponent} from '../../formulaire/formulaire.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'Facture',     component: ListFactureComponent },
    { path: 'Contact',     component: TypographyComponent },
  { path: 'Facture/AddFacture',  component: FormulaireComponent},


];
