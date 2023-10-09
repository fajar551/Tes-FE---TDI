import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';


  //Loader variable default true before page load
  loader = true;

  ngOnInit(): void {

    //Loader variable set false after page load
   setTimeout(()=>{
     this.loader = false;
 }, 1000);
 }
}
