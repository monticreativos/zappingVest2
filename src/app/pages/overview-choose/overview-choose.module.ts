import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewChoosePageRoutingModule } from './overview-choose-routing.module';

import { OverviewChoosePage } from './overview-choose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewChoosePageRoutingModule
  ],
  declarations: [OverviewChoosePage]
})
export class OverviewChoosePageModule {}
