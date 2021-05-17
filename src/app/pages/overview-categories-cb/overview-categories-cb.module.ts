import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { OverviewCategoriesCbPageRoutingModule } from './overview-categories-cb-routing.module';

import { OverviewCategoriesCbPage } from './overview-categories-cb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    OverviewCategoriesCbPageRoutingModule
  ],
  declarations: [OverviewCategoriesCbPage]
})
export class OverviewCategoriesCbPageModule {}
