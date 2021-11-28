import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/apis/product/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllTodo().subscribe((result) => {
      console.log(result);
    });
  }
}
