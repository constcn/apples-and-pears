import { Injectable } from '@angular/core';
import { ApplesYear } from './apples-year';

@Injectable({
  providedIn: 'root'
})

export class ApplesOutlookService {
  private url = "http://localhost:3000/outlook";

  constructor() { }

  async getOutlook(): Promise<ApplesYear[]> {
    const response = await fetch(this.url);
    const data = await response.json() ?? [];
    return data.map((row: any) => this.translate(row));
  }

  private keyMap: { [key: string]: string } = {
		"year": "year",
		"Area (1000 ha)": "area",
		"Yield (t/ha)": "yield",
		"Total production": "totalProduction",
		"Losses and feed use": "losses",
		"Usable production": "usable",
		"Production (fresh)": "freshProduction",
		"Exports (fresh)": "freshExports",
		"Imports (fresh)": "freshImports",
		"Consumption (fresh)": "freshConsumption",
		"per capita consumption (kg) - fresh": "freshPerCapitaConsumption",
		"Ending stocks (fresh)": "freshEndingStocks",
		"Change in stocks (fresh)": "freshChangeInSotcks",
		"Self-sufficiency rate (fresh) %": "freshSelfSufficiency",
		"Production (processed)": "processedProduction",
		"Exports (processed)": "processedExports",
		"Imports (processed)": "processedImports",
		"Consumption (processed)": "processedConsumption",
		"per capita consumption (kg) - processed": "processedPerCapitaConsumption",
		"Self-sufficiency rate (processed) %": "processedSelfSufficiency"
  };

  private translate(row: any) {
    return Object.fromEntries(Object.entries(row).map(([key, value]) =>
      [this.keyMap[key], value]
    ));
  }
}
