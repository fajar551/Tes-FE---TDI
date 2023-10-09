import { produk } from './../komponen/produk-utama/produkmodal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  isLoading: boolean = true; // Setel nilai awal menjadi true saat halaman pertama kali dibuka

  public cartitemlist: any = [];
  public produkList = new BehaviorSubject<any>([])
  public amount: number = 0;
  constructor(private http: HttpClient) { }

  getProduk() {
    return this.http.get<produk[]>("https://dummyjson.com/products")
  }

  getProdukById(id: string) {
    return this.http.get("https://dummyjson.com/products/" + id)
  }

  tambahKeranjang(data: produk) {
    this.cartitemlist.push(data);
    this.produkList.next(this.cartitemlist);
    console.log(this.cartitemlist)
  }

  produk() {
    return this.produkList.asObservable();
  }

  hapusProdukDiKeranjang(data: produk) {
    this.cartitemlist.map((a: produk, index: produk) => {
      if (data.id === a.id) {
        this.cartitemlist.splice(index, 1)
      }
    })
    this.produkList.next(this.cartitemlist)
  }

  // total calculation
  hitungHarga() {
    let total = 0;
    this.cartitemlist.map((a: any) => {
      total += a.price;
    })
    return total;
  }

  // remove all item
  hapusSemuaProdukDiKeranjang() {
    this.cartitemlist = [];
    this.produkList.next(this.cartitemlist)
  }

  // Passing data from one component amother
  jumlahHargaAkhir(data: number) {
    this.amount = data
  }

  jumlahAkhirProduk() {
    return this.amount;
  }


}
