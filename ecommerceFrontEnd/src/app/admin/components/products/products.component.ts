import { Component, OnInit } from '@angular/core';
import { ApplicationSpinners, BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit{

  constructor(spinnerService:NgxSpinnerService){
    super(spinnerService)

  }
  ngOnInit(): void {
    this.showSpinner(ApplicationSpinners.BallAtom);
  }

}
