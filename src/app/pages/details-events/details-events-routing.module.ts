import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsEventsPage } from './details-events.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsEventsPageRoutingModule {}
