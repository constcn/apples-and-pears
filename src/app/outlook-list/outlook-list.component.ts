import { Component, OnDestroy } from '@angular/core';
import { ApplesStatsType, ApplesRecordType, ApplesKeyType, applesKeys } from '../apples-year';
import { ApplesOutlookService } from "../apples-outlook.service";
import { Subscription } from 'rxjs';
import { ReloadDetectorService } from '../reload-detector.service';

@Component({
  selector: 'app-outlook-list',
  templateUrl: './outlook-list.component.html',
  styleUrls: ['./outlook-list.component.css']
})

export class OutlookListComponent {
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
    //dataProvider.subscribe((data) => this.renderOutlook(data));
    dataProvider.subscribe((data) => this.renderOutlook(data));
  }

  renderOutlook(outlook: ApplesRecordType[]) {
    this.outlook = outlook;
    //this.years = outlook.map(obj => obj.year);
    //this.values = outlook as ApplesStatsType[];
  }

  saveOutlook() {
    this.applesOutlookService.saveOutlook(this.outlook);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
