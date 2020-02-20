import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerPageRoutingModule } from './seller-routing.module';

import { SellerPage } from './seller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerPageRoutingModule
  ],
  declarations: [SellerPage]
})
export class SellerPageModule {}
