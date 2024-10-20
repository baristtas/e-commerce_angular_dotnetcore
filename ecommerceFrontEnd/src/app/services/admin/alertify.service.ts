import { Injectable } from '@angular/core';
import { mergeWith } from 'rxjs';
declare var alertify: any;

export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum Position {
  TopRight = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
}

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }

  /*message(message: string, typeOfMessage: MessageType, position: Position, delay: number = 5) {
    alertify.set('notifier', 'delay', delay);
    alertify.set('notifier', 'position', position);
    alertify[typeOfMessage](message);
  }

  dismiss() {
    alertify.dismiss();
  }*/
  message(message: string, options: Partial<AlertifyOptions>) {

    alertify.set('notifier', 'delay', options.delay);
    alertify.set('notifier', 'position', options.position);
    alertify[options.messageType ?? MessageType.Notify](message);
    if (options.dismissOthers)
      alertify.dismissOthers();

  }

}

export class AlertifyOptions {
  messageType: MessageType;
  position: Position;
  delay: number;
  dismissOthers: boolean;

  constructor() {
    this.messageType = MessageType.Notify;
    this.position = Position.BottomRight;
    this.delay = 5;
    this.dismissOthers = false;
  }
}
