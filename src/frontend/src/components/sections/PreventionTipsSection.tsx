import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Wind, Shield, Activity, Smartphone, Users } from 'lucide-react';

export function PreventionTipsSection() {
  return (
    <section id="prevention" className="py-16 md:py-24 scroll-mt-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Protection & Prevention Tips</h2>
          <p className="text-lg text-muted-foreground">
            Practical steps you can take to reduce your exposure to air pollution and protect your health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Home className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Indoor Air Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Use HEPA air purifiers in main living areas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Keep windows closed on high pollution days</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Avoid indoor smoking and burning candles</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Maintain proper ventilation when cooking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Change HVAC filters regularly</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Wind className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Outdoor Precautions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Check daily AQI before outdoor activities</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Limit outdoor time when AQI is unhealthy</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Avoid busy roads and high-traffic areas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Plan outdoor activities for early morning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Stay away from active construction sites</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Masks & Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Use N95 or KN95 masks during high pollution</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Ensure proper mask fit for effectiveness</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Replace masks according to guidelines</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Consider masks for vulnerable individuals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Cloth masks offer minimal protection from pollution</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Activity className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Exercise & Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Exercise indoors when AQI is elevated</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Reduce intensity during poor air quality</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Choose routes away from traffic</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Stay hydrated to help your body cope</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Listen to your body and stop if symptoms occur</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Smartphone className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Stay Informed</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Download air quality monitoring apps</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Sign up for local air quality alerts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Follow weather and pollution forecasts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Learn about pollution sources in your area</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Stay updated on wildfire and smoke conditions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Community Action</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Support clean air policies and initiatives</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Use public transportation when possible</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Reduce personal vehicle emissions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Plant trees and support green spaces</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Educate others about air quality</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
