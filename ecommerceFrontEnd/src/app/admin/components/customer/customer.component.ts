import { Component, OnInit } from '@angular/core';
import { ApplicationSpinners, BaseComponent } from '../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }


  ngOnInit(): void {
    this.showSpinner(ApplicationSpinners.BallAtom);
  }
}
