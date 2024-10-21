import { Component, OnInit } from '@angular/core';
import { ApplicationSpinners, BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { appConfig } from '../../../app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent implements OnInit {
  constructor(spinnerService: NgxSpinnerService) {
    super(spinnerService);
  }

  ngOnInit(): void {
      this.showSpinner(ApplicationSpinners.BallClipRotate);
  }


}
