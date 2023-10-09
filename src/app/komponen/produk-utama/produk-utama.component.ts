import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { produk } from './produkmodal';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-produk-utama',
  templateUrl: './produk-utama.component.html',
  styleUrls: ['./produk-utama.component.css']
})
export class ProdukUtamaComponent implements OnInit {

  //Loader variable default true before page load
  loader = true;
  data: any | produk[]
  public cartitems: number = 0;

  constructor(private api: ApiService, private loaderService: ApiService, private router: Router) {
    // Mengatur perubahan rute untuk mengatur status loader (saat loading)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loaderService.isLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.loaderService.isLoading = false;
      }
    });
  }

  ngOnInit(): void {
    this.api.produk().subscribe(res => {
      this.cartitems = res.length;
      this.tampilProduk();
      localStorage.removeItem("ecomdata");
      //Loader variable set false after page load
      setTimeout(() => {
        this.loader = false;
      }, 1000);
    });
  }

  tampilProduk() {
    this.api.getProduk().subscribe(res => {
      this.data = res;
      console.log(res)
    })
  }

  tambahKeranjang(item: produk) {
    this.api.tambahKeranjang(item);
  }

  hapusKeranjang(item: produk) {
    this.api.hapusProdukDiKeranjang(item);
  }

}
