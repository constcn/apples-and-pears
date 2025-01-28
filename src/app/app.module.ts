import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StaticTableComponent } from './static-table/static-table.component';
import { OutlookTableComponent } from './outlook-table/outlook-table.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { EditableCellComponent } from './editable-cell/editable-cell.component';
import { HttpClientModule } from '@angular/common/http';
import { FileDownloadComponent } from './file-download/file-download.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { OutlookListComponent } from './outlook-list/outlook-list.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    StaticTableComponent,
    OutlookTableComponent,
    FileUploadComponent,
    EditableCellComponent,
    FileDownloadComponent,
    OutlookListComponent,
    MatTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
