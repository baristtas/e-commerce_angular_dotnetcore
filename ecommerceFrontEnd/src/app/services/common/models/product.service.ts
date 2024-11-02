import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from '../../../contracts/list_product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  create(ProductToCreate: Create_Product, successCallback?: () => void, errorCallback?: (errorMessage : string) => void) {
    this.httpClientService.post({ controller: "products" }, ProductToCreate).subscribe(result => {
      if(successCallback)successCallback();
    }, (errorResponse: HttpErrorResponse) => {
      const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
      let message = "";
      _error.forEach((v, index) => {
        v.value.forEach((_v, _index) => {
          message += `${_v}<br>`;
        })
      });
      if(errorCallback)errorCallback(message);
    }
    );
  };

  async read(successCallback: () => void, errorCallback : () => void): Promise<List_Product[] | undefined> {
    const promiseData: Promise<List_Product[] | undefined> = this.httpClientService.get<List_Product[]>({
      controller: "products",

    }).toPromise();

    promiseData.then().catch();

    return await promiseData;
  }

}
