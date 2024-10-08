import { Component, OnDestroy } from '@angular/core';
import { ApplesYear } from '../apples-year';
import { ApplesOutlookService } from "../apples-outlook.service";
import { Subscription } from 'rxjs';
import { ReloadDetectorService } from '../reload-detector.service';

@Component({
  selector: 'app-outlook-table',
  templateUrl: './outlook-table.component.html',
  styleUrls: ['./outlook-table.component.css']
})

export class OutlookTableComponent {
  outlook: ApplesYear[] = [];
  fields: string[] = [];
  table: (number | string)[][] = [];

  years: string[] = [];
  labels: string[] = [];
  values: string[][] = [];

  subscription: Subscription;

  constructor(private applesOutlookService: ApplesOutlookService,
    private reloadDetectorService: ReloadDetectorService
  ) {
    this.subscription = this.reloadDetectorService.onMessage().subscribe(() => {
      console.log("I WAZ HERE");
      this.refresh();
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh() {
    this.getOutlook().then(() => this.getOutlookTransposed());
  }

  async getOutlook() {
    //this.outlook = await this.applesOutlookService.getOutlook();
    this.applesOutlookService.getOutlook().subscribe(
      (outlook: ApplesYear[]) => {
        this.outlook = outlook;
        this.fields = Object.keys(this.outlook[0]);
        this.table = this.outlook.map(row => Object.values(row).map(this.formatDecimal));
      }
    )
  }
  
  async getOutlookTransposed() {
    this.applesOutlookService.getOutlook().subscribe(
      (outlook: ApplesYear[]) => {
        this.labels = Object.keys(outlook[0]).slice(1);
        this.years = outlook.map(obj => obj.year);
        this.values = this.transpose(
          outlook.map(obj => 
            // Skip year, format numbers with 1 decimal
            Object.values(obj).slice(1).map(this.formatDecimal)
          )
        );
      }
    );
  }

  private formatDecimal(value: string | number): string {
      return typeof value == "number" ? value.toFixed(1) : value;
  }
  
  private transpose(matrix: string[][]): string[][] {
    return matrix[0]?.map((_, i) => matrix.map(row => row[i])) ?? [];
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
