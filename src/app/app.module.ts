import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './komponen/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './komponen/footer/footer.component';
import { ProdukUtamaComponent } from './komponen/produk-utama/produk-utama.component';
import { ProdukDetailComponent } from './komponen/produk-detail/produk-detail.component';
import { HalamanOrderComponent } from './komponen/halaman-order/halaman-order.component';
import { HalamanKeranjangComponent } from './komponen/halaman-keranjang/halaman-keranjang.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdukUtamaComponent,
    ProdukDetailComponent,
    HalamanKeranjangComponent,
    HalamanOrderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
