import { Heart, Wind, Brain, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const healthImpacts = [
  {
    icon: Wind,
    title: 'Respiratory System Damage',
    description: 'Long-term exposure to air pollution can cause permanent damage to lung tissue, reduce lung function, and accelerate the decline in respiratory capacity that naturally occurs with aging.',
    effects: [
      'Chronic bronchitis and emphysema development',
      'Reduced lung growth in children',
      'Accelerated lung function decline in adults',
      'Increased susceptibility to respiratory infections',
    ],
  },
  {
    icon: Heart,
    title: 'Cardiovascular Disease',
    description: 'Prolonged exposure to polluted air increases the risk of heart disease, stroke, and other cardiovascular conditions through inflammation and oxidative stress.',
    effects: [
      'Atherosclerosis (hardening of arteries)',
      'Increased blood pressure',
      'Higher risk of heart attacks',
      'Irregular heart rhythms',
    ],
  },
  {
    icon: Brain,
    title: 'Neurological Effects',
    description: 'Emerging research shows that air pollution can affect brain health, potentially contributing to cognitive decline and neurological disorders.',
    effects: [
      'Increased risk of dementia and Alzheimer\'s',
      'Cognitive impairment in children and adults',
      'Potential links to Parkinson\'s disease',
      'Developmental delays in children',
    ],
  },
  {
    icon: Activity,
    title: 'Overall Life Expectancy',
    description: 'Studies indicate that chronic exposure to air pollution can reduce life expectancy by several years, particularly in heavily polluted urban areas.',
    effects: [
      'Reduced overall lifespan',
      'Increased mortality from multiple causes',
      'Higher cancer rates (especially lung cancer)',
      'Compromised immune system function',
    ],
  },
];

const protectiveStrategies = [
  {
    title: 'Monitor Air Quality Daily',
    description: 'Check AQI levels regularly and adjust outdoor activities accordingly. Use air quality apps and alerts to stay informed.',
  },
  {
    title: 'Create Clean Indoor Spaces',
    description: 'Invest in quality air purifiers with HEPA filters for your home and workplace. Maintain proper ventilation while keeping pollutants out.',
  },
  {
    title: 'Reduce Personal Exposure',
    description: 'Avoid exercising outdoors during high pollution days. Choose routes away from heavy traffic when walking or cycling.',
  },
  {
    title: 'Support Clean Air Initiatives',
    description: 'Advocate for policies that reduce emissions. Support public transportation, renewable energy, and urban green spaces.',
  },
];

export function LongTermHealthSection() {
  return (
    <section id="long-term-health" className="py-16 md:py-24 scroll-mt-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Long-Term Health Impacts of Air Pollution
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the cumulative effects of air pollution exposure over months and years is crucial for protecting your health and making informed decisions about where you live and work.
          </p>
        </div>

        <Alert className="mb-12 max-w-4xl mx-auto border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950">
          <AlertDescription className="text-amber-900 dark:text-amber-100">
            <strong>Medical Disclaimer:</strong> This information is for educational purposes only and does not constitute medical advice. Consult healthcare professionals for personalized guidance regarding air pollution exposure and your health.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {healthImpacts.map((impact) => {
            const Icon = impact.icon;
            return (
              <Card key={impact.title} className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{impact.title}</CardTitle>
                      <CardDescription className="text-base">
                        {impact.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Key Effects:
                  </h4>
                  <ul className="space-y-2">
                    {impact.effects.map((effect, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
            Protective Strategies for Long-Term Health
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {protectiveStrategies.map((strategy, idx) => (
              <Card key={idx} className="bg-background">
                <CardHeader>
                  <CardTitle className="text-lg">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            Remember: While individual actions are important, systemic change through policy and community action is essential for creating healthier air quality for everyone. Your voice and advocacy matter.
          </p>
        </div>
      </div>
    </section>
  );
}
