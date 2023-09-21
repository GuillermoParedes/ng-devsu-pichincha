import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { ProductService } from './product.service';
import { Observable, catchError, delay, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdValidator implements AsyncValidator{

  constructor(private service: ProductService) { 
  }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    
    return of(control.value).pipe(
      delay(500),
      switchMap((id) => {
        return this.service.validationId(id)
          .pipe(
            map((response) => {
              return response ? { idExists: true} : null
            }), catchError(() => of(null))
          )
      })
    )

  }

}
