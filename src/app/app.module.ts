import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StaticTableComponent } from './static-table/static-table.component';
import { OutlookTableComponent } from './outlook-table/outlook-table.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { EditableCellComponent } from './editable-cell/editable-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticTableComponent,
    OutlookTableComponent,
    FileUploadComponent,
    EditableCellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
