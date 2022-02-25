import { DivisionModule } from './division/division.module';
import { SharedModule } from './shared/shared.module';
import { LocationModule } from './location/location.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppBarComponent } from './shared/app-bar/app-bar.component';
import { LocationViewComponent } from './location/pages/location-view/location-view.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocationModule,
    DivisionModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
