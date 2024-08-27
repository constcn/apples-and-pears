import { Injectable } from '@angular/core';
import { ApplesYear } from './apples-year';

@Injectable({
  providedIn: 'root'
})

export class ApplesOutlookService {
  // private url = "http://localhost:3000/outlook";
  // private url = "http://209.38.232.224:8080/csv/upload";
  // private url = "https://trincot.github.io/outlook.json";
  //private url = "https://trincot.000webhostapp.com/outlook.json";
  private url = "http://localhost:3000/outlook.json";

  constructor() { }

  async getOutlook(): Promise<ApplesYear[]> {
    const response = await fetch(this.url, {cache: "no-cache"});
    const data = await response.json();
    console.log("Getting this data from server:");
    console.log(data);
    return data ?? [];
  }

}
