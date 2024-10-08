import { Injectable } from '@angular/core';
import { ApplesYear } from './apples-year';
import { ReloadDetectorService } from './reload-detector.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'text/plain'})
  };

  constructor(
    private http: HttpClient,
    private reloadDetectorService: ReloadDetectorService) { }

  // TODO: convert below methods to use http observable instead of fetch promise. 
  getOutlook(): Observable<ApplesYear[]> {
    console.log("launching http request to", this.host + this.getJson);
    return this.http.get<ApplesYear[]>(this.host + this.getJson);
  }

  setOutlook(body: string): Observable<any> {
    // TODO: maybe verify size of content to only send reasonable size to server
    console.log("ApplesOutlookService.setOutlook: content of local file:");
    console.log(body);
    console.log("ApplesOutlookService.setOutlook: starting transfer of file to server");
    const response = this.http.post<String>(this.host + this.putCsv, body, this.httpOptions);
    response.subscribe((reply) => this.reloadDetectorService.sendMessage());
    return response;
  }

}
