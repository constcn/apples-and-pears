const applesStatsTemplate = {
    "Area (1000 ha)": 0,
    "Yield (t/ha)": 0,
    "Total production": 0,
    "Losses and feed use": 0,
    "Usable production": 0,
    "Production (fresh)": 0,
    "Exports (fresh)": 0,
    "Imports (fresh)": 0,
    "Consumption (fresh)": 0,
    "per capita consumption (kg) - fresh": 0,
    "Ending stocks (fresh)": 0,
    "Change in stocks (fresh)": 0,
    "Self-sufficiency rate (fresh) %": 0,
    "Production (processed)": 0,
    "Exports (processed)": 0,
    "Imports (processed)": 0,
    "Consumption (processed)": 0,
    "per capita consumption (kg) - processed": 0,
    "Self-sufficiency rate (processed) %": 0
};

const applesRecordTemplate = {
    year: "1900",
    ...applesStatsTemplate
}

export type ApplesStatsType = typeof applesStatsTemplate;
export type ApplesRecordType = typeof applesRecordTemplate;
export type ApplesKeyType = Array<keyof ApplesStatsType>;
export type ApplesAllKeyType = Array<keyof ApplesRecordType>;
export const applesKeys = Object.keys(applesStatsTemplate) as ApplesKeyType 
export const applesAllKeys = Object.entries(applesRecordTemplate).map(([name, value]) => ({name, type: typeof value}));// as ApplesAllKeyType 
