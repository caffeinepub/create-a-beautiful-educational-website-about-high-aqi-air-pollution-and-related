import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  max?: number;
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of ${max} stars`}>
        {Array.from({ length: max }, (_, i) => (
          <Star
            key={i}
            className={`h-8 w-8 ${
              i < rating
                ? 'fill-accent text-accent'
                : 'fill-muted text-muted-foreground'
            }`}
          />
        ))}
      </div>
      <p className="text-lg font-medium text-foreground">
        {rating} out of {max} stars
      </p>
    </div>
  );
}
