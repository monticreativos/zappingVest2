import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPartnerPageRoutingModule } from './details-partner-routing.module';

import { DetailsPartnerPage } from './details-partner.page';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPartnerPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc7HjT92K2wZr6aeLqbuCOSaPUz3Mky-8'
    })
  ],
  declarations: [DetailsPartnerPage]
})
export class DetailsPartnerPageModule {}
