export interface StateAQIData {
  state: string;
  aqi: number;
  aqiCategory: string;
  forecast: string;
  lastUpdated: string;
  isEstimated?: boolean;
}

export const stateAQIData: Record<string, StateAQIData> = {
  'Delhi': {
    state: 'Delhi',
    aqi: 287,
    aqiCategory: 'Very Unhealthy',
    forecast: 'Air quality is expected to remain poor due to vehicular emissions and construction dust. Sensitive groups should avoid outdoor activities.',
    lastUpdated: 'Today, 2:00 PM'
  },
  'Maharashtra': {
    state: 'Maharashtra',
    aqi: 142,
    aqiCategory: 'Unhealthy for Sensitive Groups',
    forecast: 'Moderate pollution levels expected. Coastal winds may improve conditions by evening. Sensitive individuals should limit prolonged outdoor exertion.',
    lastUpdated: 'Today, 1:45 PM'
  },
  'Karnataka': {
    state: 'Karnataka',
    aqi: 98,
    aqiCategory: 'Moderate',
    forecast: 'Air quality is acceptable. However, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
    lastUpdated: 'Today, 1:30 PM'
  },
  'Tamil Nadu': {
    state: 'Tamil Nadu',
    aqi: 76,
    aqiCategory: 'Moderate',
    forecast: 'Generally acceptable air quality. Sea breeze helps maintain moderate levels. Outdoor activities are safe for most people.',
    lastUpdated: 'Today, 2:15 PM'
  },
  'Uttar Pradesh': {
    state: 'Uttar Pradesh',
    aqi: 215,
    aqiCategory: 'Very Unhealthy',
    forecast: 'High pollution levels due to industrial emissions and crop burning. Everyone should reduce prolonged outdoor exertion.',
    lastUpdated: 'Today, 1:50 PM'
  },
  'West Bengal': {
    state: 'West Bengal',
    aqi: 134,
    aqiCategory: 'Unhealthy for Sensitive Groups',
    forecast: 'Moderate to unhealthy air quality. Industrial areas show higher pollution. Sensitive groups should take precautions.',
    lastUpdated: 'Today, 2:05 PM'
  },
  'Gujarat': {
    state: 'Gujarat',
    aqi: 118,
    aqiCategory: 'Unhealthy for Sensitive Groups',
    forecast: 'Air quality is acceptable for most but may pose a concern for sensitive individuals. Industrial emissions contribute to moderate pollution.',
    lastUpdated: 'Today, 1:40 PM'
  },
  'Rajasthan': {
    state: 'Rajasthan',
    aqi: 156,
    aqiCategory: 'Unhealthy',
    forecast: 'Dust storms and vehicular pollution contribute to unhealthy air. Everyone may begin to experience health effects.',
    lastUpdated: 'Today, 2:10 PM'
  },
  'Punjab': {
    state: 'Punjab',
    aqi: 198,
    aqiCategory: 'Unhealthy',
    forecast: 'Poor air quality due to agricultural burning and industrial emissions. Reduce outdoor activities, especially for sensitive groups.',
    lastUpdated: 'Today, 1:55 PM'
  },
  'Haryana': {
    state: 'Haryana',
    aqi: 203,
    aqiCategory: 'Very Unhealthy',
    forecast: 'Very unhealthy air quality. Stubble burning and vehicular emissions are major contributors. Avoid prolonged outdoor exposure.',
    lastUpdated: 'Today, 2:00 PM'
  }
};

// Export all states that have AQI data
export const states = Object.keys(stateAQIData).sort();

/**
 * Compute AQI category based on numeric AQI value
 * Based on standard AQI ranges
 */
export function computeAQICategory(aqi: number): string {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Moderate';
  if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
  if (aqi <= 200) return 'Unhealthy';
  if (aqi <= 300) return 'Very Unhealthy';
  return 'Hazardous';
}

/**
 * Generate deterministic fallback AQI data for states/UTs not in curated dataset
 */
function generateFallbackAQI(stateName: string): StateAQIData {
  // Use state name to generate a deterministic but varied AQI value
  const hash = stateName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const baseAQI = 60 + (hash % 120); // Range: 60-179
  const aqi = Math.round(baseAQI);
  const aqiCategory = computeAQICategory(aqi);
  
  // Generate appropriate forecast based on category
  let forecast = '';
  if (aqiCategory === 'Good') {
    forecast = 'Air quality is satisfactory, and air pollution poses little or no risk. Outdoor activities are safe for everyone.';
  } else if (aqiCategory === 'Moderate') {
    forecast = 'Air quality is acceptable. However, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.';
  } else if (aqiCategory === 'Unhealthy for Sensitive Groups') {
    forecast = 'Members of sensitive groups may experience health effects. The general public is less likely to be affected. Sensitive individuals should consider limiting prolonged outdoor exertion.';
  } else if (aqiCategory === 'Unhealthy') {
    forecast = 'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects. Everyone should reduce prolonged outdoor exertion.';
  } else if (aqiCategory === 'Very Unhealthy') {
    forecast = 'Health alert: The risk of health effects is increased for everyone. Everyone should avoid prolonged outdoor exertion; sensitive groups should avoid all outdoor exertion.';
  } else {
    forecast = 'Health warning of emergency conditions: everyone is more likely to be affected. Everyone should avoid all outdoor exertion.';
  }
  
  return {
    state: stateName,
    aqi,
    aqiCategory,
    forecast,
    lastUpdated: 'Estimated',
    isEstimated: true
  };
}

/**
 * Robust lookup function that always returns valid StateAQIData
 * Returns curated data if available, otherwise generates fallback
 */
export function getStateAQIData(stateName: string): StateAQIData {
  const curatedData = stateAQIData[stateName];
  if (curatedData) {
    // Ensure category matches AQI value for curated data
    const computedCategory = computeAQICategory(curatedData.aqi);
    return {
      ...curatedData,
      aqiCategory: computedCategory,
      isEstimated: false
    };
  }
  
  // Generate fallback for missing states
  return generateFallbackAQI(stateName);
}

export function getAQICategoryColor(category: string): string {
  switch (category) {
    case 'Good':
      return 'text-green-600 dark:text-green-400';
    case 'Moderate':
      return 'text-yellow-600 dark:text-yellow-400';
    case 'Unhealthy for Sensitive Groups':
      return 'text-orange-600 dark:text-orange-400';
    case 'Unhealthy':
      return 'text-red-600 dark:text-red-400';
    case 'Very Unhealthy':
      return 'text-purple-600 dark:text-purple-400';
    case 'Hazardous':
      return 'text-rose-900 dark:text-rose-400';
    default:
      return 'text-muted-foreground';
  }
}

export function getAQICategoryBgColor(category: string): string {
  switch (category) {
    case 'Good':
      return 'bg-green-100 dark:bg-green-950';
    case 'Moderate':
      return 'bg-yellow-100 dark:bg-yellow-950';
    case 'Unhealthy for Sensitive Groups':
      return 'bg-orange-100 dark:bg-orange-950';
    case 'Unhealthy':
      return 'bg-red-100 dark:bg-red-950';
    case 'Very Unhealthy':
      return 'bg-purple-100 dark:bg-purple-950';
    case 'Hazardous':
      return 'bg-rose-100 dark:bg-rose-950';
    default:
      return 'bg-muted';
  }
}
