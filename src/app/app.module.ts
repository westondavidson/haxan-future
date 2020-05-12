import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//custom Angular Materials import module - kitchen sink
import { MaterialSinkModule } from './material-sink/material-sink.module';

//allow jquery typing
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialSinkModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
