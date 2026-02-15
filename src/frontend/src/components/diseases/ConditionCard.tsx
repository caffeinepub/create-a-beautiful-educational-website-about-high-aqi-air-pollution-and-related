import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { type HealthCondition } from '@/content/conditions';

interface ConditionCardProps {
  condition: HealthCondition;
}

export function ConditionCard({ condition }: ConditionCardProps) {
  return (
    <Card className="h-full hover:shadow-soft transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 flex items-center gap-2">
              <span className="text-2xl">{condition.icon}</span>
              {condition.name}
            </CardTitle>
            <CardDescription className="text-base">
              {condition.linkToPollution}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
            Common Symptoms
          </h4>
          <ul className="space-y-1.5">
            {condition.symptoms.map((symptom, idx) => (
              <li key={idx} className="flex gap-2 text-sm">
                <span className="text-primary mt-0.5">•</span>
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
            Protective Steps
          </h4>
          <ul className="space-y-1.5">
            {condition.protectiveSteps.slice(0, 3).map((step, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
