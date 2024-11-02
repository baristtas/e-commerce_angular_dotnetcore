import { Component, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Create_Product } from '../../../../contracts/create_product';
import { List_Product } from '../../../../contracts/list_product';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  constructor() {

  }
  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate'];
  dataSource: MatTableDataSource<List_Product> = new MatTableDataSource();;

  ngOnInit(): void {

  }


}
//x.Id,
//x.Name,
//x.Stock,
//x.Price,
//x.CreatedDate,
//x.UpdatedDate