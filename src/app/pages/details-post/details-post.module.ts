import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { DetailsPostPageRoutingModule } from './details-post-routing.module'

import { DetailsPostPage } from './details-post.page'

import { AgmCoreModule } from '@agm/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsPostPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc7HjT92K2wZr6aeLqbuCOSaPUz3Mky-8',
    }),
  ],
  declarations: [DetailsPostPage],
})
export class DetailsPostPageModule {}
