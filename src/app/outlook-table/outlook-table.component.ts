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
  table: Number[][] = [];

  constructor(private applesOutlookService: ApplesOutlookService) {

  }

  ngOnInit(): void {
    this.getOutlook();
  }

  getOutlook() {
    this.outlook = this.applesOutlookService.getOutlook();
    this.fields = Object.keys(this.outlook[0]);
    this.table = this.outlook.map(row => Object.values(row));
  }
}
