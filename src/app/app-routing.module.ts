import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FoodItemsComponent } from './features/food-items/food-items.component';
import { MyResolver } from './service/myresolver.service';
import { OrderSummaryComponent } from './features/order-summary/order-summary.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';

const routes: Routes = [{ path: 'login', component: UserDetailsComponent },
{ path: '', component: DashboardComponent },
{
  path: 'food-items/:id', component: FoodItemsComponent, resolve: {
    myData: MyResolver
  }
}, {
  path: 'orderSummary', component: OrderSummaryComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
