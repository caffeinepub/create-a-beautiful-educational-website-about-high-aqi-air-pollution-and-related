import { Home, Wind, Flame, AlertTriangle, Gauge, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const actionAreas = [
  {
    icon: Wind,
    title: 'Ventilation Strategy',
    description: 'Smart ventilation balances fresh air intake with pollution protection.',
    actions: [
      'Open windows when outdoor AQI is Good (0-50)',
      'Keep windows closed during high pollution days',
      'Use exhaust fans in bathrooms and kitchens',
      'Consider mechanical ventilation systems with filters',
      'Create cross-ventilation when air quality permits',
    ],
  },
  {
    icon: Home,
    title: 'Air Filtration Systems',
    description: 'Effective filtration removes harmful particles from indoor air.',
    actions: [
      'Use HEPA air purifiers in main living areas',
      'Replace HVAC filters every 3 months (or monthly during high pollution)',
      'Choose purifiers sized appropriately for room square footage',
      'Run purifiers continuously during poor outdoor air quality',
      'Consider whole-house filtration for comprehensive protection',
    ],
  },
  {
    icon: Flame,
    title: 'Cooking & Combustion',
    description: 'Indoor cooking and burning can significantly impact air quality.',
    actions: [
      'Always use exhaust fans when cooking',
      'Avoid burning candles, incense, or wood indoors',
      'Use electric stoves instead of gas when possible',
      'Keep kitchen well-ventilated during and after cooking',
      'Clean cooking surfaces regularly to prevent smoke buildup',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Wildfire & Smoke Events',
    description: 'Special precautions during wildfire season and smoke events.',
    actions: [
      'Seal windows and doors with weather stripping',
      'Create a "clean room" with air purifier running',
      'Avoid activities that increase indoor pollution',
      'Stay informed about air quality alerts',
      'Have N95 masks available for necessary outdoor trips',
    ],
  },
  {
    icon: Gauge,
    title: 'Indoor Air Monitoring',
    description: 'Track your indoor air quality to ensure your strategies are working.',
    actions: [
      'Use indoor air quality monitors to track PM2.5 levels',
      'Monitor CO2 levels to ensure adequate ventilation',
      'Check humidity levels (ideal: 30-50%)',
      'Test for radon in basements and lower levels',
      'Keep records to identify patterns and problem areas',
    ],
  },
  {
    icon: CheckCircle2,
    title: 'Daily Maintenance',
    description: 'Consistent habits that maintain clean indoor air.',
    actions: [
      'Remove shoes at the door to reduce tracked-in pollutants',
      'Vacuum with HEPA filter at least twice weekly',
      'Dust surfaces regularly with damp cloth',
      'Wash bedding weekly in hot water',
      'Keep indoor plants (some help filter air naturally)',
    ],
  },
];

const quickWins = [
  'Check outdoor AQI before opening windows',
  'Run kitchen exhaust fan while cooking',
  'Change HVAC filters on schedule',
  'Keep one room as a "clean air refuge"',
  'Avoid indoor smoking and burning',
];

export function IndoorAirActionPlanSection() {
  return (
    <section id="indoor-air-action-plan" className="py-16 md:py-24 scroll-mt-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Indoor Air Quality Action Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take control of the air you breathe at home with this comprehensive action plan. Since we spend up to 90% of our time indoors, maintaining clean indoor air is one of the most effective ways to protect your health.
          </p>
        </div>

        <Alert className="mb-12 max-w-4xl mx-auto border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
          <AlertDescription className="text-blue-900 dark:text-blue-100">
            <strong>Pro Tip:</strong> Indoor air can be 2-5 times more polluted than outdoor air. Implementing even a few of these strategies can significantly improve your indoor air quality and overall health.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {actionAreas.map((area) => {
            const Icon = area.icon;
            return (
              <Card key={area.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </div>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Quick Wins: Start Today</CardTitle>
              <CardDescription>
                These simple actions require minimal effort but provide immediate benefits for your indoor air quality.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {quickWins.map((win, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-sm font-medium">{win}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Alert>
            <AlertDescription>
              <strong>Budget-Friendly Options:</strong> You don't need expensive equipment to improve indoor air quality. Start with free actions like proper ventilation timing, regular cleaning, and eliminating indoor pollution sources. Add filtration systems as your budget allows.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
