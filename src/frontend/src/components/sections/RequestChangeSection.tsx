import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useSubmitChangeRequest } from '../../hooks/useSubmitChangeRequest';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';

const sections = [
  'Hero',
  'What is AQI',
  'AQI Categories',
  'Health Impacts',
  'Symptoms',
  'Prevention',
  'At-Risk Groups',
];

export function RequestChangeSection() {
  const [message, setMessage] = useState('');
  const [relatedSection, setRelatedSection] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutate: submitRequest, isPending, error } = useSubmitChangeRequest();
  const { identity, login, loginStatus } = useInternetIdentity();

  const isAuthenticated = !!identity;
  const isLoggingIn = loginStatus === 'logging-in';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      return;
    }

    if (!isAuthenticated) {
      return;
    }

    // Concatenate optional fields into the content
    let fullContent = message.trim();
    
    if (relatedSection) {
      fullContent = `[Related Section: ${relatedSection}]\n\n${fullContent}`;
    }
    
    if (contactInfo.trim()) {
      fullContent = `${fullContent}\n\n[Contact: ${contactInfo.trim()}]`;
    }

    submitRequest(
      { content: fullContent },
      {
        onSuccess: () => {
          setMessage('');
          setRelatedSection('');
          setContactInfo('');
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 5000);
        },
      }
    );
  };

  return (
    <section id="request-change" className="py-16 scroll-mt-16">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Request a Change
          </h2>
          <p className="text-lg text-muted-foreground">
            Help us improve this resource by suggesting corrections, updates, or additional information.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Submit Your Suggestion</CardTitle>
            <CardDescription>
              {isAuthenticated 
                ? 'Share your feedback to help us maintain accurate and helpful information.'
                : 'Please log in to submit a change request.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isAuthenticated ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  You need to be logged in to submit a change request.
                </p>
                <Button 
                  onClick={login} 
                  disabled={isLoggingIn}
                  size="lg"
                >
                  {isLoggingIn ? 'Logging in...' : 'Log In'}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {showSuccess && (
                  <Alert className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-800 dark:text-green-200">
                      Thank you! Your suggestion has been submitted successfully.
                    </AlertDescription>
                  </Alert>
                )}

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      {error instanceof Error 
                        ? error.message 
                        : 'Failed to submit your request. Please try again.'}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Your Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Describe the change you'd like to suggest..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="resize-none"
                    disabled={isPending}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="section">Related Section (Optional)</Label>
                  <Select value={relatedSection} onValueChange={setRelatedSection} disabled={isPending}>
                    <SelectTrigger id="section">
                      <SelectValue placeholder="Select a section if applicable" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.map((section) => (
                        <SelectItem key={section} value={section}>
                          {section}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Information (Optional)</Label>
                  <Input
                    id="contact"
                    type="text"
                    placeholder="Email or other contact method"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    disabled={isPending}
                  />
                  <p className="text-xs text-muted-foreground">
                    Provide contact info if you'd like us to follow up with you.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isPending || !message.trim()}
                >
                  {isPending ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Request
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
