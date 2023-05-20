import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodItem } from 'src/app/model/FoodItem';
import { FoodItemResponse } from 'src/app/model/FoodItemResponse';
import { FoodItemService } from 'src/app/service/fooditem.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent implements OnInit {
  restaurantName = 'My Restaurant';
  restaurantDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  foodItemResponse?: FoodItemResponse;
  restaurantId: number;
  foodItemCart: FoodItem[] = [];
  orderSummary: FoodItemResponse;

  myData: any;
  constructor(private route: ActivatedRoute, private foodItemService: FoodItemService,
    private router: Router) {

  }


  ngOnInit() {

    this.route.data.subscribe(data => {
      this.myData = data;
    });

    this.foodItemResponse = this.myData.myData;
    this.route.paramMap.subscribe(params => {
      this.restaurantId = +params.get('id');
    });

    /*   this.getFoodItemsByRestaurant(this.restaurantId); */
  }
  foodList = [
    { name: 'Food A', price: 10.99, imageUrl: 'https://via.placeholder.com/150', count: 0 },
    { name: 'Food B', price: 8.99, imageUrl: 'https://via.placeholder.com/150', count: 0 },
    { name: 'Food C', price: 12.99, imageUrl: 'https://via.placeholder.com/150', count: 0 },
    { name: 'Food D', price: 7.99, imageUrl: 'https://via.placeholder.com/150', count: 0 },
  ];

  addToCart(food: any): void {
    food.count++;
  }

  increment(food: any) {
    food.count++;
    const index = this.foodItemCart.findIndex(item => item.id === food.id);
    if (index === -1) {
      // If record does not exist, add it to the array
      this.foodItemCart.push(food);
    } else {
      // If record exists, update it in the array
      this.foodItemCart[index] = food;
    }
  }

  decrement(food: any) {
    if (food.count > 0) {
      food.count--;

      const index = this.foodItemCart.findIndex(item => item.id === food.id);
      if (this.foodItemCart[index].count == 0) {
        this.foodItemCart.splice(index, 1);
      } else {
        // If record exists, update it in the array
        this.foodItemCart[index] = food;
      }

    }
  }

  onCheckOut() {
    this.foodItemCart;
    this.orderSummary = {
      foodItems: [],
      restaurant: null
    }
    this.orderSummary['foodItems'] = this.foodItemCart;;
    this.orderSummary.restaurant = this.foodItemResponse.restaurant;
    this.router.navigate(['/orderSummary'], { queryParams: { data: JSON.stringify(this.orderSummary) } });
  }


  getFoodItemsByRestaurant(restaurant: number) {
    this.foodItemService.getFoodItemsByRestaurant(this.restaurantId).subscribe(
      data => {
        this.foodItemResponse = data;
      }
    )
  }
}
