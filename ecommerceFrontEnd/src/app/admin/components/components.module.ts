import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerModule } from './customer/customer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrderModule } from './order/order.module';
import { FileUploadComponent } from '../../services/common/fileupload/fileupload.component';



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
