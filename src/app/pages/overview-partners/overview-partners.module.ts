import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewPartnersPageRoutingModule } from './overview-partners-routing.module';

import { OverviewPartnersPage } from './overview-partners.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPartnersPageRoutingModule
  ],
  declarations: [OverviewPartnersPage]
})
export class OverviewPartnersPageModule {}
