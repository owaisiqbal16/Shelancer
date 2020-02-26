import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceCategoryPage } from './service-category.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceCategoryPageRoutingModule {}
