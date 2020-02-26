import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceCategoryPageRoutingModule } from './service-category-routing.module';

import { ServiceCategoryPage } from './service-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceCategoryPageRoutingModule
  ],
  declarations: [ServiceCategoryPage]
})
export class ServiceCategoryPageModule {}
