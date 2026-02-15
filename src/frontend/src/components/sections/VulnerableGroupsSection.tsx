import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Baby, Users, Heart, Briefcase, Info, Activity } from 'lucide-react';

export function VulnerableGroupsSection() {
  return (
    <section id="vulnerable" className="py-16 md:py-24 bg-muted/30 scroll-mt-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Vulnerable & At-Risk Groups</h2>
          <p className="text-lg text-muted-foreground">
            Certain populations are more susceptible to the health effects of air pollution and need to take extra precautions.
          </p>
        </div>

        <Alert className="mb-8 max-w-4xl mx-auto">
          <Info className="h-4 w-4" />
          <AlertDescription>
            If you or someone you care for belongs to a vulnerable group, pay close attention to daily air quality reports and take protective measures even when pollution levels are moderate.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Baby className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Children</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Children's lungs are still developing, and they breathe more air per pound of body weight than adults. They're also more active outdoors.
              </p>
              <div>
                <h4 className="font-semibold text-sm mb-2">Protective Guidance:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Limit outdoor play on high pollution days</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Schedule outdoor activities when AQI is lower</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Keep schools and daycare informed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Watch for symptoms like coughing or wheezing</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Older Adults</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Older adults are more likely to have existing heart or lung diseases, making them more vulnerable to air pollution's effects.
              </p>
              <div>
                <h4 className="font-semibold text-sm mb-2">Protective Guidance:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Monitor AQI daily and plan accordingly</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Stay indoors with air conditioning on poor air days</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Keep medications readily available</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Maintain regular check-ups with healthcare providers</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>People with Heart or Lung Disease</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Those with asthma, COPD, heart disease, or other cardiopulmonary conditions are at higher risk for pollution-related health effects.
              </p>
              <div>
                <h4 className="font-semibold text-sm mb-2">Protective Guidance:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Follow your treatment plan consistently</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Avoid outdoor exertion when AQI is elevated</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Keep rescue medications accessible</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Contact doctor if symptoms worsen</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Baby className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Pregnant Women</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Air pollution exposure during pregnancy may affect fetal development and increase risks of complications.
              </p>
              <div>
                <h4 className="font-semibold text-sm mb-2">Protective Guidance:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Minimize exposure to high pollution areas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Use air purifiers at home</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Discuss concerns with your healthcare provider</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Maintain prenatal care appointments</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Briefcase className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Outdoor Workers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                People who work outdoors have prolonged exposure to air pollution and may face higher health risks.
              </p>
              <div>
                <h4 className="font-semibold text-sm mb-2">Protective Guidance:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Take breaks in indoor or shaded areas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Use appropriate respiratory protection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Stay hydrated throughout the day</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Report concerns to employers about air quality</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Activity className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Active Individuals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                People who exercise vigorously outdoors breathe more deeply and rapidly, inhaling more pollutants.
              </p>
              <div>
                <h4 className="font-semibold text-sm mb-2">Protective Guidance:</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Check AQI before outdoor workouts</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Move workouts indoors on high pollution days</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Exercise during early morning hours</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Reduce intensity when air quality is poor</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
