import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { WatherPageRoutingModule } from './wather-routing.module'

import { WatherPage } from './wather.page'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, WatherPageRoutingModule],
  declarations: [WatherPage],
})
export class WatherPageModule {}
