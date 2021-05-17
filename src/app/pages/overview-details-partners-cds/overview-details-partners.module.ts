import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewDetailsPartnersPageRoutingModule } from './overview-details-partners-routing.module';

import { OverviewDetailsPartnersPage } from './overview-details-partners.page';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewDetailsPartnersPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc7HjT92K2wZr6aeLqbuCOSaPUz3Mky-8'
    })
  ],
  declarations: [OverviewDetailsPartnersPage]
})
export class OverviewDetailsPartnersPageModule {}
