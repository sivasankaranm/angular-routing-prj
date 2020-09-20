import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list.component';
import { PageNotFoundComponent } from './page-not-found.component'

const routes: Routes = [
  {path:'',redirectTo:'header',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'product',component:ProductComponent},
  {path:'productlist',component:ProductListComponent},
  {path:'**',component:PageNotFoundComponent}
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }