import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewChoosePage } from './overview-choose.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewChoosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewChoosePageRoutingModule {}
