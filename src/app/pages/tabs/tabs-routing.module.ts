import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tabs1/info',
        loadChildren: () => import('../info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tabs2/listCategory',
        loadChildren: () => import('../partner/partner.module').then(m => m.PartnerPageModule)
      },
      {
        path: 'tabs2/listCategory/detailsPartner',
        loadChildren: () => import('../details-partner/details-partner.module').then(m => m.DetailsPartnerPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../take-photo/take-photo.module').then(m => m.TakePhotoPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../invite-friend/invite-friend.module').then(m => m.InviteFriendPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
