import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Info } from 'lucide-react';
import { aqiCategories } from '@/content/aqiCategories';

export function AQIGuide() {
  const [selectedCategory, setSelectedCategory] = useState(aqiCategories[0].id);
  const category = aqiCategories.find(c => c.id === selectedCategory) || aqiCategories[0];

  return (
    <div className="space-y-6">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          This guide is for educational purposes only. Always follow local air quality advisories and consult healthcare professionals for personalized medical advice.
        </AlertDescription>
      </Alert>

      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-2 bg-transparent">
          {aqiCategories.map((cat) => (
            <TabsTrigger
              key={cat.id}
              value={cat.id}
              className="data-[state=active]:bg-card data-[state=active]:shadow-sm border-2 data-[state=active]:border-primary"
              style={{
                borderLeftColor: cat.color,
                borderLeftWidth: '4px'
              }}
            >
              <span className="text-xs md:text-sm font-medium">{cat.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {aqiCategories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <CardTitle className="text-2xl mb-2">{cat.name}</CardTitle>
                    <CardDescription className="text-base">{cat.description}</CardDescription>
                  </div>
                  <Badge 
                    className="text-lg px-4 py-2"
                    style={{ 
                      backgroundColor: cat.color,
                      color: 'white'
                    }}
                  >
                    AQI {cat.range}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: cat.color }} />
                    Health Risk Level
                  </h4>
                  <p className="text-muted-foreground">{cat.healthRisk}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Recommended Actions</h4>
                  <ul className="space-y-2">
                    {cat.actions.map((action, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
