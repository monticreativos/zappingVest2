import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewCategoriesPageRoutingModule } from './overview-categories-routing.module';

import { OverviewCategoriesPage } from './overview-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewCategoriesPageRoutingModule
  ],
  declarations: [OverviewCategoriesPage]
})
export class OverviewCategoriesPageModule {}
