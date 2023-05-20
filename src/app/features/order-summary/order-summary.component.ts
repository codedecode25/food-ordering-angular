import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodItemResponse } from '../../model/FoodItemResponse';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {

  orderSummary?: FoodItemResponse;
  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) { }
  total?: any;
  obj: any;
  showDialog: boolean = false;

  ngOnInit() {
    const data = this.route.snapshot.queryParams['data'];
    this.obj = JSON.parse(data);
    this.orderSummary = this.obj;

    this.total = this.orderSummary.foodItems.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.count * currentValue.price);
    }, 0);

  }

  calculateTotal() {
    this.total = this.orderSummary.foodItems.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.count * currentValue.price);
    }, 0);
  }

  
  saveOrder() {
    this.orderService.saveOrder(this.orderSummary)
      .subscribe(
        response => {
            this.showDialog = true;
        },
        error => {
          console.error('Failed to save data:', error);
        }
      );
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']); // Replace '/home' with the actual route for your home page
  }

}
