import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then((m) => m.InfoModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'catalog/:category',
    component: CatalogComponent,
  },
  {
    path: 'catalog/search/:searchString',
    component: CatalogComponent,
  },
  {
    path: 'catalog/:category/products',
    component: ProductComponent,
  },
  {
    path: 'catalog/product/:id',
    component: ProductComponent,
  },
  {
    path: 'catalog/:category/product/:productId',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
