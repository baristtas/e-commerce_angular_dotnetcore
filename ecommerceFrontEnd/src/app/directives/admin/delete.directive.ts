import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductsComponent } from '../../admin/components/products/products.component';
import { ProductService } from '../../services/common/models/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApplicationSpinners } from '../../base/base.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;

@Directive({
  selector: '[appDelete]',
  standalone: true
})
export class DeleteDirective {

  constructor(private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService,
    private ngxSpinnerService: NgxSpinnerService,
    private alertifyService : AlertifyService,
    public dialog: MatDialog) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "/assets/delete.png");
    img.setAttribute("style", "cursor:pointer;"); //Hoverda parmak gösterir.
    img.width = 24;
    img.height = 24;
    _renderer.appendChild(element.nativeElement, img);
  }

  @Input() id!: string;
  @Input() controller!: string;
  @Output() completionCallback: EventEmitter<any> = new EventEmitter();

  @HostListener("click")
  async onClicked() {
    this.openDialog(async () => {
      this.ngxSpinnerService.show(ApplicationSpinners.BallAtom);
      const td: HTMLTableCellElement = this.element.nativeElement;
      this.httpClientService.delete<any>({
          controller: this.controller
      },this.id).subscribe(data =>
        {
          $(this.element.nativeElement.parentElement).animate({
            opacity : 0,
            left : "+=50",
            height:"toogle"
          },700,() =>
          {
            this.completionCallback.emit();
            this.alertifyService.message(data.message,{
              position:Position.TopRight,
              messageType:MessageType.Success
            })
          });
        },(errorResponse : HttpErrorResponse) =>
        {
          this.ngxSpinnerService.hide(ApplicationSpinners.BallAtom);
          this.alertifyService.message(errorResponse.message,{
            position:Position.TopRight,
            messageType:MessageType.Error
          })
        })
      //fadeOut(1500, () => {
      //  this.completionCallback.emit();
      //})
    });
  }

  openDialog(afterClosedCallback: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result == DeleteState.Yes) {
        console.log("Yes");
        afterClosedCallback();
      }
    });
  }

}
