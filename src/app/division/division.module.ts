import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisionViewComponent } from './pages/division-view/division-view.component';
import { DivisionTableComponent } from './components/division-table/division-table.component';



@NgModule({
  declarations: [
    DivisionViewComponent,
    DivisionTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DivisionModule { }
