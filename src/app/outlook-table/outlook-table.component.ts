import { Component, OnDestroy } from '@angular/core';
import { ApplesStatsType, ApplesRecordType, ApplesKeyType, applesKeys } from '../apples-year';
import { ApplesOutlookService } from "../apples-outlook.service";
import { Subscription } from 'rxjs';
import { ReloadDetectorService } from '../reload-detector.service';

@Component({
  selector: 'app-outlook-table',
  templateUrl: './outlook-table.component.html',
  styleUrls: ['./outlook-table.component.css']
})

export class OutlookTableComponent {
  outlook: ApplesRecordType[] = [];
  //fields: string[] = [];
  //table: (number | string)[][] = [];

  years: string[] = [];
  labels: ApplesKeyType = applesKeys;
  values: ApplesStatsType[] = [];

  subscription: Subscription;

  constructor(private applesOutlookService: ApplesOutlookService,
    private reloadDetectorService: ReloadDetectorService
  ) {
    this.subscription = this.reloadDetectorService.onMessage().subscribe((source) => 
      source !== this && this.refresh()
    );
  }

  ngOnInit(): void {
    this.refresh();
  }

  private getOutlook() {
    return this.applesOutlookService.getOutlook();
  }

  private refresh() {
    const dataProvider = this.getOutlook();
    //dataProvider.subscribe((data) => this.renderOutlook(data));
    dataProvider.subscribe((data) => this.renderOutlookTransposed(data));
  }

  /*renderOutlook(outlook: ApplesYear[]) {
    this.outlook = outlook;
    this.fields = Object.keys(this.outlook[0]);
    this.table = this.outlook.map(row => Object.values(row).map(this.formatDecimal));
  }*/
  
  renderOutlookTransposed(outlook: ApplesRecordType[]) {
    this.outlook = outlook;
    this.years = outlook.map(obj => obj.year);
    this.values = outlook as ApplesStatsType[];
  }

  /*private formatDecimal(value: string | number): string {
      return typeof value == "number" ? value.toFixed(1) : value;
  }*/
  
  saveOutlook() {
    this.applesOutlookService.saveOutlook(this.outlook, this);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
