import { produk } from './../../komponen/produk-utama/produkmodal';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cartitems: number = 0;
  showproduct: any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.produk().subscribe(res => {
      this.cartitems = res.length;
      this.showproduct = res;
    })
  }

  emptycart() {
    this.api.hapusSemuaProdukDiKeranjang();
  }

  deleteitem(item: produk) {
    this.api.hapusProdukDiKeranjang(item)
  }
}
