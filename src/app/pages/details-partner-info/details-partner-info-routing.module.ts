import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPartnerInfoPage } from './details-partner-info.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPartnerInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPartnerInfoPageRoutingModule {}
