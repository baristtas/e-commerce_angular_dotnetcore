import { Component, OnInit } from '@angular/core';
import { ApplicationSpinners, BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Create_Product } from '../../../contracts/create_product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinnerService: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinnerService)

  }
  ngOnInit(): void {
    this.showSpinner(ApplicationSpinners.BallAtom);
    let x : Create_Product[];

    //this.httpClientService.get<Create_Product[]>({
    //  controller: "products"
    //}).subscribe(data =>
    //  data.forEach(element => {
    //    console.log(element.Name);
    //  })
    //);


    //this.httpClientService.delete({controller : "products"}
    //  ,"b878e3f1-6afb-4652-be32-b9cd06aba496"
    //).subscribe();
    //this.httpClientService.put({controller : "products"},
    //  {
    //    id : "fc64e741-2d50-4613-8b92-4b11925fad70",
    //    name:"Renkli Kağıt",
    //    stock : 21
    //  }
    //).subscribe(data => console.log(Response.toString()));

    //this.httpClientService.post({
    //  controller : "products"
    //},{
    //  name : "Kalem",
    //  stock : 100,
    //  price : 15
    //}).subscribe();
    //
    //this.httpClientService.post({
    //  controller : "products"
    //},{
    //  name : "Kağıt",
    //  stock : 1000,
    //  price : 5
    //}).subscribe();
    //
    //this.httpClientService.post({
    //  controller : "products"
    //},{
    //  name : "Silgi",
    //  stock : 100,
    //  price : 3
    //}).subscribe();

  }

}
