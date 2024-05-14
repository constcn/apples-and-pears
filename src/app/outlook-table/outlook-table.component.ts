import { Component } from '@angular/core';
import { ApplesYear } from '../apples-year';
import { ApplesOutlookService } from "../apples-outlook.service";

@Component({
  selector: 'app-outlook-table',
  templateUrl: './outlook-table.component.html',
  styleUrls: ['./outlook-table.component.css']
})

export class OutlookTableComponent {
  outlook: ApplesYear[] = [];
  fields: String[] = [];
  table: (Number | String)[][] = [];

  years: String[] = [];
  labels: String[] = [];
  values: Number[][] = [];

  constructor(private applesOutlookService: ApplesOutlookService) {

  }

  ngOnInit(): void {
    this.getOutlook().then(() => this.getOutlookTransposed());
  }

  async getOutlook() {
    this.outlook = await this.applesOutlookService.getOutlook();
    this.fields = Object.keys(this.outlook[0]).map(this.camelToWords);
    this.table = this.outlook.map(row => Object.values(row));
  }
  
  async getOutlookTransposed() {
    const outlook = await this.applesOutlookService.getOutlook();
    this.labels = Object.keys(outlook[0]).slice(1).map(this.camelToWords);
    this.years = outlook.map(obj => obj.year);
    this.values = this.transpose(
      outlook.map(obj => 
        // Skip year, format numbers with 1 decimal
        Object.values(obj).slice(1).map(val => val.toFixed(1))
      )
    );
  }
  
  private transpose(matrix: number[][]): number[][] {
    return matrix[0]?.map((_, i) => matrix.map(row => row[i])) ?? [];
  }

  private camelToWords(camel: string) {
    return camel.replace(/.[a-z]*/g, word => word[0].toUpperCase() + word.slice(1) + " ").trim();
  }
}
