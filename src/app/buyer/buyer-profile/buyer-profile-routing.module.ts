import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyerProfilePage } from './buyer-profile.page';

const routes: Routes = [
  {
    path: '',
    component: BuyerProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyerProfilePageRoutingModule {}
