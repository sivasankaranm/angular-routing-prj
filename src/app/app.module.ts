import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, ProductComponent, ProductListComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
