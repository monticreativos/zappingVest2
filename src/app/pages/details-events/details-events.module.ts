import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsEventsPageRoutingModule } from './details-events-routing.module';

import { DetailsEventsPage } from './details-events.page';
import { AgmCoreModule } from '@agm/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsEventsPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc7HjT92K2wZr6aeLqbuCOSaPUz3Mky-8',
    }),
  ],
  declarations: [DetailsEventsPage]
})
export class DetailsEventsPageModule {}
