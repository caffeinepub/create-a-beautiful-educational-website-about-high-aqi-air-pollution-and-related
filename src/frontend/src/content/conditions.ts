export interface HealthCondition {
  id: string;
  name: string;
  icon: string;
  linkToPollution: string;
  symptoms: string[];
  protectiveSteps: string[];
}

export const healthConditions: HealthCondition[] = [
  {
    id: 'asthma',
    name: 'Asthma',
    icon: '🫁',
    linkToPollution: 'Air pollution can trigger asthma attacks and worsen symptoms. Particulate matter and ozone irritate airways, causing inflammation and making breathing difficult.',
    symptoms: [
      'Wheezing and shortness of breath',
      'Chest tightness or pain',
      'Coughing, especially at night',
      'Difficulty sleeping due to breathing problems'
    ],
    protectiveSteps: [
      'Monitor daily AQI and limit outdoor activity when levels are high',
      'Keep rescue inhaler accessible at all times',
      'Use air purifiers with HEPA filters indoors',
      'Follow your asthma action plan',
      'Avoid outdoor exercise during high pollution days'
    ]
  },
  {
    id: 'copd',
    name: 'COPD (Chronic Obstructive Pulmonary Disease)',
    icon: '🫁',
    linkToPollution: 'Long-term exposure to air pollution accelerates lung function decline in COPD patients. Pollutants cause inflammation and exacerbations, leading to hospitalizations.',
    symptoms: [
      'Chronic cough with mucus',
      'Shortness of breath during daily activities',
      'Frequent respiratory infections',
      'Fatigue and reduced exercise tolerance',
      'Wheezing'
    ],
    protectiveSteps: [
      'Stay indoors on high pollution days',
      'Use prescribed medications consistently',
      'Maintain good indoor air quality',
      'Get vaccinated against flu and pneumonia',
      'Quit smoking and avoid secondhand smoke'
    ]
  },
  {
    id: 'cardiovascular',
    name: 'Cardiovascular Disease',
    icon: '❤️',
    linkToPollution: 'Fine particulate matter can enter the bloodstream, causing inflammation and increasing risk of heart attacks, strokes, and irregular heart rhythms.',
    symptoms: [
      'Chest pain or discomfort',
      'Shortness of breath',
      'Irregular heartbeat',
      'Fatigue and weakness',
      'Dizziness or lightheadedness'
    ],
    protectiveSteps: [
      'Monitor AQI and avoid outdoor exertion on poor air quality days',
      'Take prescribed heart medications as directed',
      'Maintain a heart-healthy diet',
      'Control blood pressure and cholesterol',
      'Recognize warning signs and seek immediate help if needed'
    ]
  },
  {
    id: 'bronchitis',
    name: 'Chronic Bronchitis',
    icon: '🫁',
    linkToPollution: 'Air pollutants irritate bronchial tubes, causing persistent inflammation and excess mucus production. This leads to chronic cough and breathing difficulties.',
    symptoms: [
      'Persistent cough lasting weeks or months',
      'Production of mucus (clear, white, yellow, or green)',
      'Shortness of breath',
      'Chest discomfort',
      'Frequent respiratory infections'
    ],
    protectiveSteps: [
      'Avoid exposure to air pollution and irritants',
      'Use a humidifier to ease breathing',
      'Stay hydrated to thin mucus',
      'Practice breathing exercises',
      'Avoid cold air which can trigger symptoms'
    ]
  },
  {
    id: 'stroke',
    name: 'Stroke Risk',
    icon: '🧠',
    linkToPollution: 'Studies show that exposure to high levels of air pollution increases stroke risk. Fine particles cause blood vessel inflammation and promote blood clot formation.',
    symptoms: [
      'Sudden numbness or weakness in face, arm, or leg',
      'Sudden confusion or trouble speaking',
      'Sudden trouble seeing in one or both eyes',
      'Sudden trouble walking or loss of balance',
      'Sudden severe headache'
    ],
    protectiveSteps: [
      'Control blood pressure and diabetes',
      'Limit outdoor exposure during high pollution',
      'Maintain healthy lifestyle habits',
      'Know stroke warning signs (act F.A.S.T.)',
      'Seek immediate emergency care if symptoms occur'
    ]
  },
  {
    id: 'lung-cancer',
    name: 'Lung Cancer Risk',
    icon: '🫁',
    linkToPollution: 'Long-term exposure to air pollution, particularly fine particulate matter and diesel exhaust, increases lung cancer risk even in non-smokers.',
    symptoms: [
      'Persistent cough that worsens over time',
      'Coughing up blood',
      'Chest pain that worsens with breathing or coughing',
      'Unexplained weight loss',
      'Shortness of breath and hoarseness'
    ],
    protectiveSteps: [
      'Minimize exposure to air pollution',
      'Avoid smoking and secondhand smoke',
      'Use air purifiers indoors',
      'Get regular health screenings if at high risk',
      'Maintain overall healthy lifestyle'
    ]
  }
];
