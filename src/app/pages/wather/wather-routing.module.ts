import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { WatherPage } from './wather.page'

const routes: Routes = [
  {
    path: '',
    component: WatherPage,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatherPageRoutingModule {}
