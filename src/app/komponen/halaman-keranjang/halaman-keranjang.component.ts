import { produk } from './../../komponen/produk-utama/produkmodal';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-halaman-keranjang',
  templateUrl: './halaman-keranjang.component.html',
  styleUrls: ['./halaman-keranjang.component.css']
})
export class HalamanKeranjangComponent implements OnInit {

  showproduct: any = [];
  public totalHarga: number = 0;
  public ongkir: number = 0;
  public finalHarga: number = 0;
  public formAlamat = false;
  public kirimHarga: number = 0;
  myform: FormGroup | any;
  public cartitems: number = 0;


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.produk().subscribe(res => {
      this.showproduct = res;
      this.cartitems = res.length;
      this.totalHarga = this.api.hitungHarga();
      console.log("Total harganya adalah :", this.totalHarga)
      // Ditambah ongkir 10.000
      this.ongkir = 10000;
      console.log(this.ongkir, "adalah ongkirnya")

      this.finalHarga = this.ongkir + this.totalHarga;
      // Total Harga Final
      this.kirimHarga = this.finalHarga
      this.api.jumlahHargaAkhir(this.kirimHarga);
    })

    //Form
    this.myform = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      paymentMethod: new FormControl('', Validators.required),

    })
  }

  hapusDiKeranjang2(item: produk) {
    this.api.hapusProdukDiKeranjang(item)
  }

  async hapusDiKeranjang(item: produk) {
    const result = await Swal.fire({
      title: 'Apakah Anda yakin?',
      text: "Anda tidak akan bisa mengembalikannya!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!'
    });

    if (result.isConfirmed) {
      try {
        await this.api.hapusProdukDiKeranjang(item);
        Swal.fire(
          'Terhapus!',
          'Produk Anda telah dihapus.',
          'success'
        );
      } catch (error) {
        Swal.fire(
          'Kesalahan!',
          'Gagal menghapus produk.',
          'error'
        );
      }
    }
  }

  kosong() {
    this.api.hapusSemuaProdukDiKeranjang();
  }

  batal() {
    this.formAlamat = false;
    this.myform.reset();
    localStorage.removeItem('ecomdata')
  }

  onsubmit() {
    this.myform.value;
    console.log(this.myform.value)
    localStorage.setItem('ecomdata', JSON.stringify(this.myform.value.name));
  }


}
