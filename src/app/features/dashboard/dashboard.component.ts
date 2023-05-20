import { Component } from '@angular/core';
import { Restaurant } from 'src/app/model/Restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { ProductService } from 'src/app/service/productservice';
import { Product } from 'src/app/model/Product';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { DataViewLayoutOptions } from 'primeng/dataview';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  layout: string = 'list';
  restaurantList: Restaurant[];
  products: Product[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;
  constructor(private router: Router, private restaurantService: RestaurantService, private productService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    console.log("asdasdasdasda")
    this.getAllRestaurants();
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 5)));

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }



  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList = data;
      }
    )
  }

  onButtonClick(id: number) {
    this.router.navigate(['/food-items', id]);
  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  getRandomImage(): string {
    const imageCount = 8; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`; // Replace with your image filename pattern
  }

}

