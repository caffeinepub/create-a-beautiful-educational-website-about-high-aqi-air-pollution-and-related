import { useState } from 'react';
import { MapPin, Wind, Calendar, List, Info, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { getStateAQIData, getAQICategoryColor, getAQICategoryBgColor } from '../../content/stateAqiForecast';
import { getAllStateNames, getDistrictsByState, indiaStatesDistricts } from '../../content/indiaStatesDistricts';

export function AQIForecastSection() {
  const [selectedState, setSelectedState] = useState<string>('Delhi');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');

  const allStates = getAllStateNames();
  const districts = getDistrictsByState(selectedState);
  const data = getStateAQIData(selectedState);

  // Reset district when state changes
  const handleStateChange = (newState: string) => {
    setSelectedState(newState);
    setSelectedDistrict('');
  };

  return (
    <section id="aqi-forecast" className="py-16 scroll-mt-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            AQI & Forecast
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check current air quality index and forecast for your state. Data is updated regularly to help you plan your outdoor activities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* State and District Selectors */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label htmlFor="state-select" className="font-semibold text-lg flex items-center gap-2 min-w-fit">
                <MapPin className="h-5 w-5 text-primary" />
                Select State/UT:
              </label>
              <Select value={selectedState} onValueChange={handleStateChange}>
                <SelectTrigger id="state-select" className="w-full sm:flex-1">
                  <SelectValue placeholder="Choose a state or union territory" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px] overflow-y-auto">
                  {allStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label htmlFor="district-select" className="font-semibold text-lg flex items-center gap-2 min-w-fit">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                Select District:
              </label>
              <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                <SelectTrigger id="district-select" className="w-full sm:flex-1">
                  <SelectValue placeholder="Choose a district" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px] overflow-y-auto">
                  {districts.map((district) => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* View All Coverage Button */}
            <div className="flex justify-center mt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <List className="h-4 w-4" />
                    View All States & Districts Coverage
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Complete India Coverage</DialogTitle>
                    <DialogDescription>
                      All {indiaStatesDistricts.filter(s => s.type === 'State').length} States and{' '}
                      {indiaStatesDistricts.filter(s => s.type === 'Union Territory').length} Union Territories with their districts
                    </DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-6">
                      {indiaStatesDistricts.map((stateData, idx) => (
                        <div key={stateData.name}>
                          <div className="mb-3">
                            <h3 className="font-semibold text-lg flex items-center gap-2">
                              {stateData.name}
                              <span className="text-xs font-normal text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
                                {stateData.type}
                              </span>
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {stateData.districts.length} {stateData.districts.length === 1 ? 'district' : 'districts'}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                            {stateData.districts.map((district) => (
                              <div
                                key={district}
                                className="text-sm px-3 py-2 rounded-md bg-muted/50 hover:bg-muted transition-colors"
                              >
                                {district}
                              </div>
                            ))}
                          </div>
                          {idx < indiaStatesDistricts.length - 1 && <Separator className="mt-6" />}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* District-level data notice */}
          {selectedDistrict && (
            <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-900">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <AlertDescription className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Note:</strong> District-level AQI data is not yet available. The values shown below are for <strong>{selectedState}</strong> state/UT level.
              </AlertDescription>
            </Alert>
          )}

          {/* Estimated data notice */}
          {data.isEstimated && (
            <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <AlertDescription className="text-sm text-amber-900 dark:text-amber-100">
                <strong>Estimated Data:</strong> The AQI values shown for <strong>{selectedState}</strong> are estimated for demonstration purposes. For real-time and official air quality information, please consult your local environmental protection agency.
              </AlertDescription>
            </Alert>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* AQI Card */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-primary" />
                  Current AQI
                </CardTitle>
                <CardDescription>Air Quality Index for {data.state}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center py-6">
                  <div className="text-6xl font-bold mb-2">{data.aqi}</div>
                  <div className={`inline-block px-4 py-2 rounded-full font-semibold ${getAQICategoryBgColor(data.aqiCategory)} ${getAQICategoryColor(data.aqiCategory)}`}>
                    {data.aqiCategory}
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {data.isEstimated ? (
                      <span>
                        <strong>Estimated</strong> - Sample data for demonstration
                      </span>
                    ) : (
                      <span>Last updated: {data.lastUpdated}</span>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Forecast Card */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Forecast
                </CardTitle>
                <CardDescription>Air quality outlook for {data.state}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  {data.forecast}
                </p>
                {data.isEstimated && (
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    This forecast is generated based on typical air quality patterns and is for educational purposes only.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <Alert className="mt-8">
            <AlertDescription className="text-sm">
              <strong>Note:</strong> This data is for educational purposes only. AQI values are currently shown at State/UT level. For real-time and official air quality information, please consult your local environmental protection agency or government air quality monitoring services.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
