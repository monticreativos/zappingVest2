import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPartnerInfoPageRoutingModule } from './details-partner-info-routing.module';

import { DetailsPartnerInfoPage } from './details-partner-info.page';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPartnerInfoPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc7HjT92K2wZr6aeLqbuCOSaPUz3Mky-8'
    })
  ],
  declarations: [DetailsPartnerInfoPage]
})
export class DetailsPartnerInfoPageModule {}
