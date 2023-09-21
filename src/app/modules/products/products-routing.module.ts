import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserComponent } from './browser/browser.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
  { path: '', component: BrowserComponent },
  { path: 'new', component: NewComponent },
  { path: 'edit/:id', component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
