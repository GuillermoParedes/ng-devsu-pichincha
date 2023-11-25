import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss'],
})
export class BrowserComponent implements OnInit {
  schemaTable: any = [
    {
      label: 'id',
      property: 'id',
      hidden: true,
    },
    {
      label: 'Logo',
      property: 'logo',
      type: 'image',
    },
    {
      label: "Produc' name",
      property: 'name',
    },
    {
      label: 'Description',
      property: 'description',
    },
    {
      label: 'Release date',
      property: 'date_release',
      type: 'date',
    },
    {
      label: 'Revision date',
      property: 'date_revision',
      type: 'date',
    },
  ];

  data: any = []
  
  dataOriginal = [...this.data];
  public filterValue = '';
  searchQuery$ = new BehaviorSubject<string>('');


  constructor(private router: Router, private service: ProductService) {}

  ngOnInit(): void {
    this.getData();
    this.searchQuery$
    .pipe(
      debounceTime(1500),
      distinctUntilChanged(),
    )
    .subscribe(response => {
      if(response && response.length > 0) {
        this.data = this.dataOriginal.filter(item => {
          if(item.name.length >= response.length ) {
            if(item.name.toUpperCase().search(response.toUpperCase()) >= 0) {
              return item;
            } 
          } else if(item.name.length < response.length ) {
            if(response.toUpperCase().search(item.name.toUpperCase()) >= 0) {
              return item;
            } 
          }
    
        })
      } else {
        this.data = [...this.dataOriginal]
      }
      
    })
  }

  getData() {
    this.service.findAll().subscribe(response => {
      console.log('respponse', response)
      this.data = response.map(item => {
        return {
          ...item,
          dateRelease: item.date_release,
          dateRevision: item.date_revision,
        }
      });
      this.dataOriginal = [...this.data]
    })
  }

  handleEvent(event: any) {
    console.log('handleEvent', event);
    if (event == 'new') {
      this.router.navigate(['/product/new']);
    }
  }

  handleEventAction(event: any) {
    console.log('handleEventAction', event)
    if(event.type == 'edit') {

    } else if(event.type == 'remove') {

      this.service.remove('', {id: event.data.id}).subscribe(response => {
        console.log('repsonse', response)
      })
    }
  }
  onSearchUpdated(searchQuery: string) {
    this.searchQuery$.next(searchQuery);
  }
}
