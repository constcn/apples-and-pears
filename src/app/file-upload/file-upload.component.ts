import { Component } from '@angular/core';
import { ApplesYear } from '../apples-year';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  private keys: String[] = [
    "year",
    "area",
    "yield",
    "totalProduction",
    "losses",
    "usable",
    "freshProduction",
    "freshExports",
    "freshImports",
    "freshConsumption",
    "freshPerCapitaConsumption",
    "freshEndingStocks",
    "freshChangeInStocks",
    "freshSelfSufficiency",
    "processedProduction",
    "processedExports",
    "processedImports",
    "processedConsumption",
    "processedPerCapitaConsumption",
    "processedSelfSufficiency"
  ]
  
  onFileSelected(event: any) {
    console.log("onFileSelected");
    const files = event.target.files;
    const reader = new FileReader();
    reader.onload = (e) => this.onLoaded(e);
    reader.readAsText(files[0]);
  }
  
  private async onLoaded(event: any) {
    const response = await fetch("https://trincot.000webhostapp.com/upload_csv.php", {
        method: "POST",
        body: event.target.result
    });
  }

}
