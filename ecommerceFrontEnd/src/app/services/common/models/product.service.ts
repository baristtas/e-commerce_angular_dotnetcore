import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from '../../../contracts/list_product';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  create(ProductToCreate: Create_Product, successCallback?: () => void, errorCallback?: (errorMessage: string) => void) {
    this.httpClientService.post({ controller: "products" }, ProductToCreate).subscribe(result => {
      if (successCallback) successCallback();
    }, (errorResponse: HttpErrorResponse) => {
      const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
      let message = "";
      _error.forEach((v, index) => {
        v.value.forEach((_v, _index) => {
          message += `${_v}<br>`;
        })
      });
      if (errorCallback) errorCallback(message);
    }
    );
  };

  async read(page: number = 0, size: number = 5, successCallback?: () => void, errorCallback?: (errorMessage: string) => void): Promise<{ totalCount: number, datas: List_Product[] } | undefined> {
    const promiseData: Promise<{ totalCount: number, datas: List_Product[] } | undefined> = this.httpClientService.get<{ totalCount: number, datas: List_Product[] }>({
      controller: "products",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => {
      if (successCallback) successCallback();
    }
    ).catch((errorResponse: HttpErrorResponse) => {
      if (errorCallback) errorCallback(errorResponse.message);
    });
    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "products"
    }, id);

    var a = await firstValueFrom(deleteObservable);
    console.log(a.message);
  }
}