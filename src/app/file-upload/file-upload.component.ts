import { Component, Inject } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ReloadDetectorService } from '../reload-detector.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

//@Injectable({ providedIn: 'root' })

export class FileUploadComponent {
  private url = "https://trincot.000webhostapp.com/upload_csv.php";

  //constructor(private http: HttpClient) {
  constructor(private reloadDetectorService: ReloadDetectorService) {

  }

  onFileSelected(event: any) {
    console.log("onFileSelected");
    const files = event.target.files;
    const reader = new FileReader();
    reader.onload = (e) => this.onLoaded(e);
    reader.readAsText(files[0]);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/csv' })
  }
  
  private async onLoaded(event: any) {
    // TODO: convert code to use http observable instead of fetch promise. 
    // return this.http.post(this.url, event.target.result, this.httpOptions);

    // TODO: maybe verify size of content to only send reasonable size to server
    const response = await fetch("https://trincot.000webhostapp.com/upload_csv.php", {
        method: "POST",
        body: event.target.result
    });
    // TODO: refresh components that display the data
    const reply = await response.text();
    // TODO: if user uploads an invalid format, the reply will have an
    //   appropriate error message. This could be displayed in a component...
    console.log(reply);
    this.reloadDetectorService.sendMessage();
  }

}
