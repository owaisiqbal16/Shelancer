import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyerProfilePageRoutingModule } from './buyer-profile-routing.module';

import { BuyerProfilePage } from './buyer-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyerProfilePageRoutingModule
  ],
  declarations: [BuyerProfilePage]
})
export class BuyerProfilePageModule {}
