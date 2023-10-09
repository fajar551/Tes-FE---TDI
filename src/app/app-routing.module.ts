import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdukUtamaComponent } from './komponen/produk-utama/produk-utama.component';
import { ProdukDetailComponent } from './komponen/produk-detail/produk-detail.component';
import { HalamanOrderComponent } from './komponen/halaman-order/halaman-order.component';
import { HalamanKeranjangComponent } from './komponen/halaman-keranjang/halaman-keranjang.component';

const routes: Routes = [
  { path: '', component: ProdukUtamaComponent },
  { path: 'produk-detail/:productid', component: ProdukDetailComponent },
  { path: 'halaman-keranjang', component: HalamanKeranjangComponent },
  { path: 'halaman-order', component: HalamanOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
