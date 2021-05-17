import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewPartnersCbPageRoutingModule } from './overview-partners-cb-routing.module';

import { OverviewPartnersCbPage } from './overview-partners-cb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPartnersCbPageRoutingModule
  ],
  declarations: [OverviewPartnersCbPage]
})
export class OverviewPartnersCbPageModule {}
