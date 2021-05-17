import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewDetailsPartnersCbPageRoutingModule } from './overview-details-partners-cb-routing.module';

import { OverviewDetailsPartnersCbPage } from './overview-details-partners-cb.page';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewDetailsPartnersCbPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc7HjT92K2wZr6aeLqbuCOSaPUz3Mky-8'
    })
  ],
  declarations: [OverviewDetailsPartnersCbPage]
})
export class OverviewDetailsPartnersCbPageModule {}
