import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { ApplicationSpinners, BaseComponent } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyOptions, AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent implements OnInit {
  @Output() productCreated : EventEmitter<Create_Product> = new EventEmitter();

  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertifyService: AlertifyService) {
    super(spinner);
  }

  ngOnInit(): void {

  }

  on_create_clicked(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    const product_to_Create: Create_Product = new Create_Product();
    product_to_Create.Name = name.value;
    product_to_Create.Stock = parseInt(stock.value);
    product_to_Create.Price = parseFloat(price.value);

    this.showSpinner(ApplicationSpinners.BallAtom);

    this.productService.create(product_to_Create, () => {
      this.hideSpinner(ApplicationSpinners.BallAtom);
      this.alertifyService.message("Ürün başarıyla eklendi.", {
        messageType: MessageType.Success,
        position: Position.TopRight,
        dismissOthers: true
      });
      this.productCreated.emit(product_to_Create);
    }, (errorMessage: any) =>
    {
      this.hideSpinner(ApplicationSpinners.BallAtom);
      this.alertifyService.message(errorMessage,{
        messageType : MessageType.Error,
        position:Position.TopRight
      })
    })
  }

}
