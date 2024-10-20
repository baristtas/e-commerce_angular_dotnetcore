import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  message(message: string, title: string, messageType: ToastrMessageType, position: ToastrPosition) {
    this.toastr[messageType](message, title,{positionClass : position,timeOut : 12000});
  }
}

export enum ToastrMessageType {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning"
}

export enum ToastrPosition {
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "tast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center"

}