import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

declare var $:any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminModule,UiModule,RouterModule,NgxSpinnerModule,NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerceFrontEnd';

  constructor(private toastr : CustomToastrService){

  }
}


//$(document).ready(() =>
//alert("Test alert"));