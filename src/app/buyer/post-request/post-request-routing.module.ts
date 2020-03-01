import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostRequestPage } from './post-request.page';

const routes: Routes = [
  {
    path: '',
    component: PostRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRequestPageRoutingModule {}
