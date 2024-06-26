import { Component } from '@angular/core';
//import { ApplesYear } from '../apples-year';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {
  onFileSelected(event: any) {
    console.log("onFileSelected");
    const files = event.target.files;
    const reader = new FileReader();
    reader.onload = (e) => this.onLoaded(e);
    reader.readAsText(files[0]);
  }
  
  private async onLoaded(event: any) {
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
  }

}
