import { Component,OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit{
  constructor(private spinner : NgxSpinnerService)
  {

  }

  ngOnInit() : void{
    this.spinner.show();
  }
}
