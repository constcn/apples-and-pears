import { Component } from '@angular/core';
import { ApplesOutlookService } from '../apples-outlook.service';

@Component({
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent {
    public downloadUrl: string;
  
    constructor(applesOutlookService: ApplesOutlookService) {
        this.downloadUrl = applesOutlookService.downloadUrl;
    }
}
