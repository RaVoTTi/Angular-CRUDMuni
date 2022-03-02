import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar/app-bar.component';
import { InputsComponent } from './inputs/inputs.component';
// import { ComponentsComponent } from './components/components.component';



@NgModule({
  declarations: [
    AppBarComponent,
    InputsComponent,

  ],
  exports:[
    AppBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
