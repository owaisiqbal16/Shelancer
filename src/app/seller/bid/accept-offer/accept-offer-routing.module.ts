import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptOfferPage } from './accept-offer.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptOfferPageRoutingModule {}
