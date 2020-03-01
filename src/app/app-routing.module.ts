import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth/step1', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import ('./authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then( m => m.SellerPageModule)
  },
  {
    path: 'navbar',
    loadChildren: () => import('./components/navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./buyer/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'service-category',
    loadChildren: () => import('./buyer/service-category/service-category.module').then( m => m.ServiceCategoryPageModule)
  },
 
  {
    path: 'buyer-profile',
    loadChildren: () => import('./buyer/buyer-profile/buyer-profile.module').then( m => m.BuyerProfilePageModule)
  },  {
    path: 'make-offer',
    loadChildren: () => import('./buyer/make-offer/make-offer.module').then( m => m.MakeOfferPageModule)
  },
  {
    path: 'post-request',
    loadChildren: () => import('./buyer/post-request/post-request.module').then( m => m.PostRequestPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
