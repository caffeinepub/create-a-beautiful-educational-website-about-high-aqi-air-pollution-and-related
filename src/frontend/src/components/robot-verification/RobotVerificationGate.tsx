import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { ShieldCheck, AlertCircle } from 'lucide-react';

interface RobotVerificationGateProps {
  onVerified: () => void;
}

export function RobotVerificationGate({ onVerified }: RobotVerificationGateProps) {
  const [isNotRobot, setIsNotRobot] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Disable body scroll while gate is shown
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate checkbox
    if (!isNotRobot) {
      setError('Please check the box to confirm you are human.');
      return;
    }

    setIsSubmitting(true);

    // All checks passed
    setTimeout(() => {
      onVerified();
    }, 300);
  };

  const handleRetry = () => {
    setIsNotRobot(false);
    setError('');
    setIsSubmitting(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="verification-title"
    >
      <Card className="w-full max-w-md mx-4 shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="h-12 w-12 text-primary" />
          </div>
          <CardTitle id="verification-title" className="text-2xl">
            Verification Required
          </CardTitle>
          <CardDescription>
            Please confirm you are human to access AirHealth
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Checkbox */}
            <div className="flex items-start space-x-3 p-4 border rounded-lg bg-muted/30">
              <Checkbox
                id="not-robot"
                checked={isNotRobot}
                onCheckedChange={(checked) => setIsNotRobot(checked === true)}
                aria-label="I am human"
                disabled={isSubmitting}
              />
              <Label
                htmlFor="not-robot"
                className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                I am human
              </Label>
            </div>

            {/* Error message */}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Submit button */}
            <div className="flex gap-3">
              <Button
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Verifying...' : 'Continue'}
              </Button>
              {error && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleRetry}
                  disabled={isSubmitting}
                  aria-label="Try again"
                >
                  Try Again
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
