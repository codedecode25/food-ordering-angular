import { FoodItem } from "./FoodItem";
import { Restaurant } from "./Restaurant";

export interface FoodItemResponse{
    foodItems:FoodItem[];
    restaurant:Restaurant;
}