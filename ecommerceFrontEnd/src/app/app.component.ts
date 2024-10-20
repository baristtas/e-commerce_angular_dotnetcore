import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

declare var $:any;


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminModule,UiModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerceFrontEnd';

  constructor(private toastr : CustomToastrService){
    this.toastr.message("za","xd",ToastrMessageType.Warning, ToastrPosition.TopCenter);
  }
}

//$(document).ready(() =>
//alert("Test alert"));