import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerPage } from './seller.page';

const routes: Routes = [
  {
    path: '',
    component: SellerPage
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'bid',
    loadChildren: () => import('./bid/bid.module').then( m => m.BidPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerPageRoutingModule {}
