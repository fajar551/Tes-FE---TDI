import { produk } from './../../komponen/produk-utama/produkmodal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-produk-detail',
  templateUrl: './produk-detail.component.html',
  styleUrls: ['./produk-detail.component.css']
})
export class ProdukDetailComponent implements OnInit {
  productdata: any | produk[];
  showadd: boolean = true;
  showremove: boolean = false;
  public cartitems: number = 0;


  constructor(private api: ApiService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.produk().subscribe(res => {
      this.cartitems = res.length;
    });

    let productid = this.activatedroute.snapshot.paramMap.get('productid');
    console.log("Produk Id nya adalah :", productid)
    productid && this.api.getProdukById(productid).subscribe((res) => {
      this.productdata = res;
      console.log(res)
    })
  }

  tambahKeranjang(productdata: produk) {
    this.showadd = false;
    this.showremove = true;
    this.api.tambahKeranjang(productdata)
  }

  hapusKeranjang(productdata: produk) {
    this.showadd = true;
    this.showremove = false;
  }

}
