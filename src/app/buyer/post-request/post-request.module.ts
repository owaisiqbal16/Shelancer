import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostRequestPageRoutingModule } from './post-request-routing.module';

import { PostRequestPage } from './post-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostRequestPageRoutingModule
  ],
  declarations: [PostRequestPage]
})
export class PostRequestPageModule {}
