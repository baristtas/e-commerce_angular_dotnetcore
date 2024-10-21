import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

export class BaseComponent {

  constructor(private spinner: NgxSpinnerService) {

  }

  showSpinner(spinnerTypeName : ApplicationSpinners){
    this.spinner.show(spinnerTypeName);

    setTimeout(() => {
      this.hideSpinner(spinnerTypeName);
    }, 1000);
  }

  hideSpinner(spinnerTypeName:ApplicationSpinners)
  {
    this.spinner.hide(spinnerTypeName);
  }

}

export enum ApplicationSpinners{ //app.component.html içerisinde s1 s2 diye belirtildi.
  BallAtom = "s2",
  BallClipRotate = "s1"
}