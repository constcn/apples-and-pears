import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StaticTableComponent } from './static-table/static-table.component';
import { OutlookTableComponent } from './outlook-table/outlook-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticTableComponent,
    OutlookTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
