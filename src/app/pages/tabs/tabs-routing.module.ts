import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TabsPage } from './tabs.page'

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'tabs1/info',
        loadChildren: () =>
          import('../info/info.module').then((m) => m.InfoPageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'tabs2/listSubCategory',
        loadChildren: () =>
          import('../list-subcategorias/listsubcategorias.module').then(
            (m) => m.ListSubCategoriasPageModule,
          ),
      },
      {
        path: 'tabs2/listCategory',
        loadChildren: () =>
          import('../partner/partner.module').then((m) => m.PartnerPageModule),
      },
      {
        path: 'tabs2/listCategory/detailsPartner',
        loadChildren: () =>
          import('../details-partner/details-partner.module').then(
            (m) => m.DetailsPartnerPageModule,
          ),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../take-photo/take-photo.module').then(
            (m) => m.TakePhotoPageModule,
          ),
      },
      {
        path: 'tab4',
        loadChildren: () =>
          import('../notifications/notifications.module').then(
            (m) => m.NotificationsPageModule,
          ),
      },
      {
        path: 'tab5',
        loadChildren: () =>
          import('../invite-friend/invite-friend.module').then(
            (m) => m.InviteFriendPageModule,
          ),
      },
      {
        path: 'tab6',
        loadChildren: () =>
          import('../tab4/tab4.module').then((m) => m.Tab4PageModule),
      },
      {
        path: 'tab7',
        loadChildren: () =>
          import('../tab4/tab4.module').then((m) => m.Tab4PageModule),
      },
      {
        path: 'tab6/detailsPost',
        loadChildren: () =>
          import('../details-post/details-post.module').then(
            (m) => m.DetailsPostPageModule,
          ),
      },
      {
        path: 'forecast',
        loadChildren: () =>
          import('../wather/wather.module').then((m) => m.WatherPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
      {
        path: 'tab8',
        loadChildren: () =>
          import('../tab5/tab5.module').then((m) => m.Tab5PageModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
