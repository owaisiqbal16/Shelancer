import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptOfferPageRoutingModule } from './accept-offer-routing.module';

import { AcceptOfferPage } from './accept-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptOfferPageRoutingModule
  ],
  declarations: [AcceptOfferPage]
})
export class AcceptOfferPageModule {}
