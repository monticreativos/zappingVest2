import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewCategoriesPage } from './overview-categories.page';

const routes: Routes = [
  {
    path: '',
    component: OverviewCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OverviewCategoriesPageRoutingModule {}
