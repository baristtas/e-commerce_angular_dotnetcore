import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { ProductService } from '../../../../services/common/models/product.service';
import { ApplicationSpinners, BaseComponent } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent extends BaseComponent implements OnInit, AfterViewInit {

  constructor(private productService: ProductService, private spinnerService: NgxSpinnerService, private alertifyService: AlertifyService) {
    super(spinnerService);
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['Name', 'stock', 'price', 'createdDate', 'updatedDate'];
  dataSource: MatTableDataSource<List_Product> = new MatTableDataSource();

  async ngOnInit(): Promise<void> {

  }

  async ngAfterViewInit() {
    const values = await this.GetProducts();
    this.dataSource = new MatTableDataSource<List_Product>(values?.datas);
    this.dataSource.paginator = this.paginator;
  }

  async GetProducts(): Promise<{totalCount : number, datas :List_Product[]} | undefined> {
    this.showSpinner(ApplicationSpinners.BallAtom);

    return this.productService.read(this.paginator ? this.paginator.pageIndex : 5, this.paginator.pageSize, () => {
      this.hideSpinner(ApplicationSpinners.BallAtom);
      this.alertifyService.message("Başarılı", {
        messageType: MessageType.Success,
        position: Position.TopRight,
        dismissOthers: true
      });
    }, (message: string) => {
      this.hideSpinner(ApplicationSpinners.BallAtom);
      this.alertifyService.message(message, {
        dismissOthers: true,
        position: Position.TopRight,
      });
    });
  }

  FormatDateTimeString(dateTimeAsString?: string): string {
    if (!dateTimeAsString) return "";

    const dateStr = dateTimeAsString;
    const date = new Date(dateStr ? dateStr : "");

    const formattedDate = date.toLocaleString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    return formattedDate;
  }

}
//x.Id,
//x.Name,
//x.Stock,
//x.Price,
//x.CreatedDate,
//x.UpdatedDate