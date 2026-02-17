import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { StarRating } from '@/components/reviews/StarRating';

export function ReviewBoxSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">User Reviews</CardTitle>
              <CardDescription className="text-base">
                See what our community thinks about AirHealth
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <StarRating rating={5} max={5} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
