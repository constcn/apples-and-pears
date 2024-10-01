import { Component } from '@angular/core';
import { ApplesOutlookService } from "../apples-outlook.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {
  private url = "https://trincot.000webhostapp.com/upload_csv.php";

  constructor(private applesOutlookService: ApplesOutlookService) {

  }

  onFileSelected(event: any) {
    console.log("onFileSelected");
    const files = event.target.files;
    const reader = new FileReader();
    reader.onload = (e) => this.onLoaded(e);
    reader.readAsText(files[0]);
  }

  private async onLoaded(event: any) {
    const reply = await this.applesOutlookService.setOutlook(event.target.result);
    // TODO: if user uploads an invalid format, the reply will have an
    //   appropriate error message. This could be displayed in a component...    
    console.log(reply);
  }

}
