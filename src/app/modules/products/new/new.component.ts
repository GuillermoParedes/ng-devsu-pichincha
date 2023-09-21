import { Component, OnInit } from '@angular/core';
import { SchemaProduct } from '../product.schema';
import { ProductService } from '../product.service';
import { IdValidator } from '../id-validator.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  title: string = 'New Product'
  returnToBack: string = '/'
  schemaForm = SchemaProduct;

  constructor(private readonly idValidator: IdValidator, private readonly service: ProductService) {}

  ngOnInit(): void {
    this.schemaForm = this.schemaForm.map((item: any) => {

      if(item.property == 'id') {
        item.customValidation = this.idValidator;
      }

      return item;
    })
  }

  saveProduct(data: any) {
    console.log('saveProduct', data)
    this.service.save({...data,
      date_release: data.dateRelease,
      date_revision: data.dateRevision,
    }).subscribe(response => {
      console.log('response', response)
    })
  }
}
