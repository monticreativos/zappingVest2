import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [

  { path: '', 
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'details-partner',
    loadChildren: () => import('./pages/details-partner/details-partner.module').then( m => m.DetailsPartnerPageModule)
  },
  {
    path: 'take-photo',
    loadChildren: () => import('./pages/take-photo/take-photo.module').then( m => m.TakePhotoPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'invite-friend',
    loadChildren: () => import('./pages/invite-friend/invite-friend.module').then( m => m.InviteFriendPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'overview-categories',
    loadChildren: () => import('./pages/overview-categories/overview-categories.module').then( m => m.OverviewCategoriesPageModule)
  },
  {
    path: 'overview-partners',
    loadChildren: () => import('./pages/overview-partners/overview-partners.module').then( m => m.OverviewPartnersPageModule)
  },
  {
    path: 'overview-details-partners',
    loadChildren: () => import('./pages/overview-details-partners/overview-details-partners.module').then( m => m.OverviewDetailsPartnersPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
