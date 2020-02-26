import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeOfferPage } from './make-offer.page';

const routes: Routes = [
  {
    path: '',
    component: MakeOfferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeOfferPageRoutingModule {}
