import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wind, Factory, Car, Flame, AlertTriangle } from 'lucide-react';

export function WhatIsAQISection() {
  return (
    <section id="what-is-aqi" className="py-16 md:py-24 scroll-mt-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">What is the Air Quality Index?</h2>
          <p className="text-lg text-muted-foreground">
            The Air Quality Index (AQI) is a standardized indicator that tells you how clean or polluted your air is, and what associated health effects might be a concern.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Wind className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-xl">What It Measures</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                AQI measures five major air pollutants: ground-level ozone, particle pollution, carbon monoxide, sulfur dioxide, and nitrogen dioxide.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-warning mb-2" />
              <CardTitle className="text-xl">Why It Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Higher AQI values indicate greater levels of air pollution and greater health concerns. Understanding AQI helps you make informed decisions about outdoor activities.
              </p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="flex gap-2 mb-2">
                <Factory className="h-6 w-6 text-muted-foreground" />
                <Car className="h-6 w-6 text-muted-foreground" />
                <Flame className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardTitle className="text-xl">Common Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Air pollution comes from vehicle emissions, industrial facilities, wildfires, power plants, and other combustion sources.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>Understanding the Scale</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The AQI runs from 0 to 500. The higher the AQI value, the greater the level of air pollution and the greater the health concern. An AQI value of 100 generally corresponds to the national air quality standard for the pollutant.
            </p>
            <p className="text-sm text-muted-foreground">
              Values below 100 are generally considered satisfactory. When AQI values are above 100, air quality is considered unhealthy—at first for certain sensitive groups, then for everyone as AQI values increase.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
