import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { AuthGuardService } from './services/auth-guard.service'
import { HttpClientModule } from '@angular/common/http' // <---

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'details-partner',
    loadChildren: () =>
      import('./pages/details-partner/details-partner.module').then(
        (m) => m.DetailsPartnerPageModule,
      ),
  },
  {
    path: 'take-photo',
    loadChildren: () =>
      import('./pages/take-photo/take-photo.module').then(
        (m) => m.TakePhotoPageModule,
      ),
  },
  {
    path: 'notifications',
    loadChildren: () =>
      import('./pages/notifications/notifications.module').then(
        (m) => m.NotificationsPageModule,
      ),
  },
  {
    path: 'invite-friend',
    loadChildren: () =>
      import('./pages/invite-friend/invite-friend.module').then(
        (m) => m.InviteFriendPageModule,
      ),
  },
  {
    path: 'info',
    loadChildren: () =>
      import('./pages/info/info.module').then((m) => m.InfoPageModule),
  },
  {
    path: 'overview-categories-cds',
    loadChildren: () =>
      import('./pages/overview-categories-cds/overview-categories.module').then(
        (m) => m.OverviewCategoriesPageModule,
      ),
  },
  {
    path: 'overview-partners-cds',
    loadChildren: () =>
      import('./pages/overview-partners-cds/overview-partners.module').then(
        (m) => m.OverviewPartnersPageModule,
      ),
  },
  {
    path: 'overview-details-partners-cds',
    loadChildren: () =>
      import(
        './pages/overview-details-partners-cds/overview-details-partners.module'
      ).then((m) => m.OverviewDetailsPartnersPageModule),
  },
  {
    path: 'overview-choose',
    loadChildren: () =>
      import('./pages/overview-choose/overview-choose.module').then(
        (m) => m.OverviewChoosePageModule,
      ),
  },
  {
    path: 'overview-categories-cb',
    loadChildren: () =>
      import(
        './pages/overview-categories-cb/overview-categories-cb.module'
      ).then((m) => m.OverviewCategoriesCbPageModule),
  },
  {
    path: 'overview-partners-cb',
    loadChildren: () =>
      import('./pages/overview-partners-cb/overview-partners-cb.module').then(
        (m) => m.OverviewPartnersCbPageModule,
      ),
  },
  {
    path: 'overview-details-partners-cb',
    loadChildren: () =>
      import(
        './pages/overview-details-partners-cb/overview-details-partners-cb.module'
      ).then((m) => m.OverviewDetailsPartnersCbPageModule),
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
