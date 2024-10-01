import { Injectable } from '@angular/core';
import { ApplesYear } from './apples-year';
import { ReloadDetectorService } from './reload-detector.service';

@Injectable({
  providedIn: 'root'
})

export class ApplesOutlookService {
  /* Other URL that could be used:
   *     http://209.38.232.224:8080/csv/upload
   */
  private host = "http://localhost:3000/";
  private getJson = "outlook.json";
  private putCsv = "upload_csv";

  constructor(private reloadDetectorService: ReloadDetectorService) { }

  // TODO: convert below methods to use http observable instead of fetch promise. 

  async getOutlook(): Promise<ApplesYear[]> {
    console.log("launching http request to", this.host + this.getJson);
    const response = await fetch(this.host + this.getJson, {cache: "no-cache"});
    const data = await response.json();
    console.log("Getting this data from server:");
    console.log(data);
    return data ?? [];
  }

  async setOutlook(body: string) {
    // TODO: maybe verify size of content to only send reasonable size to server
    console.log("ApplesOutlookService.setOutlook: content of local file:");
    console.log(body);
    console.log("ApplesOutlookService.setOutlook: starting transfer of file to server");
    const response = await fetch(this.host + this.putCsv, {
        method: "POST",
        body
    });
    const reply = await response.text();
    this.reloadDetectorService.sendMessage();
    return reply;
  }

}
