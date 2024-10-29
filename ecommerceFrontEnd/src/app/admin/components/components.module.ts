import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerModule } from './customer/customer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrderModule } from './order/order.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CustomerModule,
    DashboardModule,
    OrderModule
  ]
})
export class ComponentsModule { }
