import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewPartnersCbPage } from './overview-partners-cb.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewPartnersCbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewPartnersCbPageRoutingModule {}
