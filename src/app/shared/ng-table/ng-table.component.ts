import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

export interface ITableRow {
  label: string,
  property: string,
  type?: string,
  hidden?: boolean
}


@Component({
  selector: 'codevs-table',
  templateUrl: './ng-table.component.html',
  styleUrls: ['./ng-table.component.scss']
})
export class NgTableComponent implements OnInit, OnChanges {

  
  @Input() schema: Array<ITableRow> = [];
  @Input() data:any= [];
  @Input() limit:number = 5;
  @Output() handleEvent = new EventEmitter<any>();


  public itemsPerPage = 5;
  public currentPage = 1;

  pages: any[] = [];

  isMenuOpen:boolean = false;
  get hasNextPage() {
    return this.currentPage
  }

  get hasPreviousPage() {
    return this.currentPage > 1;
  }

  ngOnInit(): void {
    this.generatePage();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['data']) {
      const valuePrevious = changes['data'].previousValue;
      const valueCurrent = changes['data'].currentValue;
      if(JSON.stringify(valuePrevious) !== JSON.stringify(valueCurrent)) {
        this.generatePage()
      }
    }
    
  }
  generatePage() {
    this.pages = [];
    const start = (this.currentPage - 1) * this.limit;
    const end = start + this.limit;
    this.pages = this.data.slice(start, end);

  }
  backPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.generatePage();
    }
  }

  nextPage() {
    const numPaginas = Math.ceil(this.data.length / this.limit);
    if (this.currentPage < numPaginas) {
      this.currentPage++;
      this.generatePage();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  selectedMenu(type: 'edit' | 'remove') {
    console.log('selectedmenu', type)
    this.toggleMenu()
  }

  handleEventAction(item: any, type: 'edit' | 'remove') {
    console.log('handleEventAction', item)
    this.handleEvent.emit({
      data: item,
      type
    })
  }
}
