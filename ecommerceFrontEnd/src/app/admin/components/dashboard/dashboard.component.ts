import { Component } from '@angular/core';
import { AlertifyOptions, AlertifyService, MessageType } from '../../../services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private alertifyService:AlertifyService){

  }

  a(){
    
    this.alertifyService.message("Test",{messageType : MessageType.Success,
      delay : 5
    });
  }

}
