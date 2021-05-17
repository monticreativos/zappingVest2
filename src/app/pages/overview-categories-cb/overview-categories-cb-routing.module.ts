import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewCategoriesCbPage } from './overview-categories-cb.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewCategoriesCbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewCategoriesCbPageRoutingModule {}
