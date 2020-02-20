import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidPageRoutingModule } from './bid-routing.module';

import { BidPage } from './bid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidPageRoutingModule
  ],
  declarations: [BidPage]
})
export class BidPageModule {}
