import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewDetailsPartnersCbPage } from './overview-details-partners-cb.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewDetailsPartnersCbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewDetailsPartnersCbPageRoutingModule {}
