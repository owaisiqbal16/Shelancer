import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeOfferPageRoutingModule } from './make-offer-routing.module';

import { MakeOfferPage } from './make-offer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeOfferPageRoutingModule
  ],
  declarations: [MakeOfferPage]
})
export class MakeOfferPageModule {}
