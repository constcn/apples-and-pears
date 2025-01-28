import { Component, OnDestroy } from '@angular/core';
import { ApplesStatsType, ApplesRecordType, ApplesKeyType, applesKeys } from '../apples-year';
import { ApplesOutlookService } from "../apples-outlook.service";
import { Subscription } from 'rxjs';
import { ReloadDetectorService } from '../reload-detector.service';
import { applesAllKeys } from '../apples-year';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
    selector: 'app-mat-table',
    templateUrl: './mat-table.component.html',
    styleUrls: ['./mat-table.component.css'],
  })
  export class MatTableComponent {
  columnSchema = applesAllKeys;
  displayedColumns =  this.columnSchema.map((col) => col.name);
  
  outlook: ApplesRecordType[] = [];

  years: string[] = [];
  labels: ApplesKeyType = applesKeys;
  values: ApplesStatsType[] = [];

  subscription: Subscription;

  constructor(private applesOutlookService: ApplesOutlookService,
    private reloadDetectorService: ReloadDetectorService
  ) {
    this.subscription = this.reloadDetectorService.onMessage().subscribe(() => this.refresh());
  }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh() {
    const dataProvider = this.applesOutlookService.getOutlook();
    dataProvider.subscribe((data) => this.renderOutlook(data));
  }

  renderOutlook(outlook: ApplesRecordType[]) {
    this.outlook = outlook;
  }

  saveOutlook() {
    this.applesOutlookService.saveOutlook(this.outlook);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}

