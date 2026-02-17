import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Phone } from 'lucide-react';

export function SymptomsHelpSection() {
  return (
    <section id="symptoms" className="py-16 md:py-24 bg-muted/30 scroll-mt-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Recognizing Symptoms & When to Seek Help</h2>
          <p className="text-lg text-muted-foreground">
            Know the warning signs and understand when medical attention is necessary.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Alert className="border-destructive bg-destructive/10 dark:bg-destructive/20">
            <Phone className="h-5 w-5 text-destructive" />
            <AlertTitle className="text-destructive text-lg">Emergency Warning Signs</AlertTitle>
            <AlertDescription className="text-base text-foreground">
              <p className="mb-3 font-semibold">Call emergency services immediately if you experience:</p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-destructive">•</span>
                  <span>Severe difficulty breathing or shortness of breath</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">•</span>
                  <span>Chest pain or pressure</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">•</span>
                  <span>Sudden confusion or difficulty speaking</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">•</span>
                  <span>Bluish lips or face</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-destructive">•</span>
                  <span>Sudden numbness or weakness</span>
                </li>
              </ul>
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Mild to Moderate Symptoms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  These symptoms may indicate air pollution exposure. Monitor your condition and consult a healthcare provider if symptoms persist or worsen:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Eye, nose, or throat irritation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Coughing or wheezing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Headache or dizziness</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Fatigue or reduced energy</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Increased mucus production</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>When to Contact Your Doctor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule an appointment with your healthcare provider if you experience:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Symptoms that persist for several days</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Worsening of existing respiratory conditions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Increased need for rescue medications</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Difficulty performing daily activities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Concerns about air quality and your health</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Alert className="border-border">
            <AlertDescription className="text-center">
              <strong>Remember:</strong> This website provides educational information only. Always seek professional medical advice for diagnosis and treatment. Your healthcare provider can offer personalized guidance based on your specific health conditions and circumstances.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
