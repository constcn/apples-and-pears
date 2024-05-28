import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  onFileSelected(event: any) {
    const files = event.target.files;
    const reader = new FileReader();
    reader.onload = this.onLoaded;
  }
  private onLoaded(event: any) {
    // TODO
  }
}
