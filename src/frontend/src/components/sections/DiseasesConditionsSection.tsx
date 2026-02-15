import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { ConditionCard } from '@/components/diseases/ConditionCard';
import { healthConditions } from '@/content/conditions';

export function DiseasesConditionsSection() {
  return (
    <section id="diseases" className="py-16 md:py-24 scroll-mt-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Health Impacts & Related Conditions</h2>
          <p className="text-lg text-muted-foreground">
            Air pollution can trigger or worsen various health conditions. Understanding these connections helps you take appropriate precautions.
          </p>
        </div>

        <Alert className="mb-8 max-w-4xl mx-auto border-destructive/50 bg-destructive/5">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertTitle className="text-destructive">Important Medical Disclaimer</AlertTitle>
          <AlertDescription>
            This information is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. If you experience severe breathing difficulty, chest pain, or other emergency symptoms, call emergency services immediately. Always consult with qualified healthcare professionals regarding your health.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthConditions.map((condition) => (
            <ConditionCard key={condition.id} condition={condition} />
          ))}
        </div>
      </div>
    </section>
  );
}
