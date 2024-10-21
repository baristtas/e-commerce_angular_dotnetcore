import { Component, OnInit } from '@angular/core';
import { ApplicationSpinners, BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrl: './baskets.component.scss'
})
export class BasketsComponent extends BaseComponent implements OnInit{
  constructor(spinnerService : NgxSpinnerService){
    super(spinnerService)
  }

  ngOnInit(): void {
    this.showSpinner(ApplicationSpinners.BallClipRotate);
  }


}
