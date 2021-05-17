import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewDetailsPartnersPage } from './overview-details-partners.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewDetailsPartnersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewDetailsPartnersPageRoutingModule {}
