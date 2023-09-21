import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NgTableComponent } from './ng-table/ng-table.component';
import { NgButtonComponent } from './ng-button/ng-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSearchComponent } from './ng-search/ng-search.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { NgInputComponent } from './ng-form/ng-input/ng-input.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    NgTableComponent,
    NgButtonComponent,
    NgSearchComponent,
    NgFormComponent,
    NgInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    NgTableComponent,
    NgButtonComponent,
    NgFormComponent
  ]
})
export class SharedModule { }
