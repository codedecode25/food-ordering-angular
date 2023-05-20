import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodItemResponse } from '../model/FoodItemResponse';
import { FoodItemService } from './fooditem.service';


@Injectable()
export class MyResolver implements Resolve<FoodItemResponse> {
  constructor(private foodItemService: FoodItemService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<FoodItemResponse> {
    const id = route.params['id'];
    return this.foodItemService.getFoodItemsByRestaurant(id);
  }
}
