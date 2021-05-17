import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewPartnersPage } from './overview-partners.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewPartnersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewPartnersPageRoutingModule {}
