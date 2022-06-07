import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ListSubCategoriasPage } from './listsubcategorias.page'
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module'

import { ListSubCategoriasPageRoutingModule } from './listsubcategorias-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ListSubCategoriasPageRoutingModule,
  ],
  declarations: [ListSubCategoriasPage],
})
export class ListSubCategoriasPageModule {}
