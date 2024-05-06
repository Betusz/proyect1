import { Component } from '@angular/core';
import { allIcons } from 'ngx-bootstrap-icons';
import { IProduct } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Empresa ACME';
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Celular',
      productCode: 'CEL-0011',
      releaseDate: 'March 19, 2021',
      price: 1000,
      description: 'Celular de última geração',
      starRating: 4.2,
      imageUrl: 'https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770_1280.png'
    },
    {
      productId: 2,
      productName: 'Notebook',
      productCode: 'NTB-0011',
      releaseDate: 'March 18, 2021',
      price: 2000,
      description: 'Notebook de última geração',
      starRating: 4.6,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg'
    }
  ];
}
