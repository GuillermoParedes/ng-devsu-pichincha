import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from 'src/app/core/services/crud.service';
import { environment } from 'src/environments/environment';
import { lastValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends CrudService<any, number> {
  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.baseUrl}/bp/products`);
  }

  validationId(id: string) {
    return this.get('verification', {id})
  }
}
