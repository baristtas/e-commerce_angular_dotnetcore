import { Component ,OnInit} from '@angular/core';
import { AlertifyOptions, AlertifyService, MessageType } from '../../../services/admin/alertify.service';
import { ApplicationSpinners, BaseComponent } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
declare var $ : any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent implements OnInit{
  constructor(private alertifyService:AlertifyService, spinnerService:NgxSpinnerService){
    super(spinnerService);
  }

  ngOnInit(): void {
    this.showSpinner(ApplicationSpinners.BallAtom);
  }

  a(){
    $.get('https://localhost:7255/api/Products', (data: any) => {
      console.log('Response from API:', data);
    }).fail((error: any) => {
      console.error('Error:', error);
    });
    // this.alertifyService.message("Test",{messageType : MessageType.Success,
    //   delay : 5
    // });
  }

}
