import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

import { DeleteDirective } from '../../../directives/admin/delete.directive';
import { DeleteDialogComponent } from '../../../dialogs/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [ProductsComponent, CreateComponent, ListComponent, DeleteDialogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    DeleteDirective,
    MatDialogModule,
    MatTableModule,
    RouterModule.forChild([
      { path: "", component: ProductsComponent }
    ])
    , MatSidenavModule],
  exports: [ProductsComponent]
})
export class ProductsModule { }
