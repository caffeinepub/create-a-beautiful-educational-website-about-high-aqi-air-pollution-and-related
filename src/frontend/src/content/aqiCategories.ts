export interface AQICategory {
  id: string;
  name: string;
  range: string;
  color: string;
  description: string;
  healthRisk: string;
  actions: string[];
}

export const aqiCategories: AQICategory[] = [
  {
    id: 'good',
    name: 'Good',
    range: '0-50',
    color: 'oklch(0.65 0.15 145)',
    description: 'Air quality is satisfactory, and air pollution poses little or no risk.',
    healthRisk: 'None',
    actions: [
      'Enjoy outdoor activities',
      'No restrictions for any group',
      'Ideal conditions for exercise outdoors'
    ]
  },
  {
    id: 'moderate',
    name: 'Moderate',
    range: '51-100',
    color: 'oklch(0.78 0.12 85)',
    description: 'Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.',
    healthRisk: 'Acceptable for most, but sensitive individuals may experience minor effects',
    actions: [
      'Unusually sensitive people should consider limiting prolonged outdoor exertion',
      'Most people can enjoy outdoor activities normally',
      'Monitor symptoms if you are sensitive'
    ]
  },
  {
    id: 'unhealthy-sensitive',
    name: 'Unhealthy for Sensitive Groups',
    range: '101-150',
    color: 'oklch(0.72 0.15 55)',
    description: 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.',
    healthRisk: 'Sensitive groups may experience health effects',
    actions: [
      'Children, older adults, and people with lung disease should reduce prolonged outdoor exertion',
      'People with heart or lung disease should consult their doctor',
      'General public can continue normal activities'
    ]
  },
  {
    id: 'unhealthy',
    name: 'Unhealthy',
    range: '151-200',
    color: 'oklch(0.62 0.18 35)',
    description: 'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.',
    healthRisk: 'Everyone may begin to experience health effects',
    actions: [
      'Everyone should reduce prolonged outdoor exertion',
      'Sensitive groups should avoid prolonged outdoor exertion',
      'Consider moving activities indoors',
      'Keep windows closed if possible'
    ]
  },
  {
    id: 'very-unhealthy',
    name: 'Very Unhealthy',
    range: '201-300',
    color: 'oklch(0.55 0.22 25)',
    description: 'Health alert: The risk of health effects is increased for everyone.',
    healthRisk: 'Health warnings of emergency conditions',
    actions: [
      'Everyone should avoid prolonged outdoor exertion',
      'Sensitive groups should remain indoors',
      'Keep outdoor activities short',
      'Use air purifiers indoors if available'
    ]
  },
  {
    id: 'hazardous',
    name: 'Hazardous',
    range: '301-500',
    color: 'oklch(0.45 0.20 15)',
    description: 'Health warning of emergency conditions: everyone is more likely to be affected.',
    healthRisk: 'Serious health effects for everyone',
    actions: [
      'Everyone should avoid all outdoor physical activity',
      'Remain indoors with windows and doors closed',
      'Run air purifiers if available',
      'Follow local emergency guidelines',
      'Seek medical attention if experiencing symptoms'
    ]
  }
];
