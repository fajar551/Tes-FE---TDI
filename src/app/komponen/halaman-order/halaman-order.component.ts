import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-halaman-order',
  templateUrl: './halaman-order.component.html',
  styleUrls: ['./halaman-order.component.css']
})
export class HalamanOrderComponent implements OnInit {
  public finalHargaAkhir: number = 0;
  public totalHarga: number = 0;
  public userdata: any;
  public username: any;
  public paymentMethod: any;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["/"])
      this.api.hapusSemuaProdukDiKeranjang();
    }, 5000);


    // totalHarga coming from api
    this.totalHarga = this.api.hitungHarga();

    // recieving data between components getting data
    this.finalHargaAkhir = this.api.jumlahAkhirProduk()
    //alert(this.data)

    //getting item from localstorage
    let localdata = localStorage.getItem('ecomdata')
    this.userdata = localdata;
    this.username = JSON.parse(this.userdata)
  }

}
