import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPartnerPage } from './details-partner.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPartnerPageRoutingModule {}
