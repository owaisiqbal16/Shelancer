import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidPage } from './bid.page';

const routes: Routes = [
  {
    path: '',
    component: BidPage
  },
  {
    path: 'make-offer',
    loadChildren: () => import('./make-offer/make-offer.module').then( m => m.MakeOfferPageModule)
  },
  {
    path: 'accept-offer',
    loadChildren: () => import('./accept-offer/accept-offer.module').then( m => m.AcceptOfferPageModule)
  },  {
    path: 'confirmed',
    loadChildren: () => import('./confirmed/confirmed.module').then( m => m.ConfirmedPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidPageRoutingModule {}
