import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

interface VideoEmbed {
  id: string;
  title: string;
  embedUrl: string;
  language: 'Hindi' | 'English';
}

const videos: VideoEmbed[] = [
  {
    id: 'hindi-1',
    title: 'वायु प्रदूषण और स्वास्थ्य प्रभाव - Dhruv Rathee',
    embedUrl: 'https://www.youtube.com/embed/Fzs5fEbT4ic',
    language: 'Hindi',
  },
  {
    id: 'hindi-2',
    title: 'ईंधन जलाने के हानिकारक प्रभाव - Khan Academy',
    embedUrl: 'https://www.youtube.com/embed/Yz482pfa7vA',
    language: 'Hindi',
  },
  {
    id: 'english-1',
    title: 'WHO: How Air Pollution Impacts Your Body',
    embedUrl: 'https://www.youtube.com/embed/GVBeY1jSG9Y',
    language: 'English',
  },
  {
    id: 'english-2',
    title: 'Health Effects of Air Pollution',
    embedUrl: 'https://www.youtube.com/embed/g4QeC008erc',
    language: 'English',
  },
];

function VideoCard({ video }: { video: VideoEmbed }) {
  const isValidUrl = video.embedUrl && video.embedUrl.trim() !== '';

  return (
    <Card className="overflow-hidden border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{video.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{video.language}</p>
      </CardHeader>
      <CardContent className="p-0">
        {isValidUrl ? (
          <div className="relative w-full bg-muted" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex items-center justify-center p-8 bg-muted border-t border-border">
            <div className="text-center">
              <AlertCircle className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Video unavailable</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function VideosSection() {
  // Deduplicate videos by both id and embedUrl to prevent duplicates
  const uniqueVideos = videos.reduce((acc, video) => {
    const isDuplicateId = acc.some((v) => v.id === video.id);
    const isDuplicateUrl = acc.some((v) => v.embedUrl === video.embedUrl);
    
    if (!isDuplicateId && !isDuplicateUrl) {
      acc.push(video);
    }
    
    return acc;
  }, [] as VideoEmbed[]);

  const hindiVideos = uniqueVideos.filter((v) => v.language === 'Hindi');
  const englishVideos = uniqueVideos.filter((v) => v.language === 'English');

  return (
    <section
      id="videos"
      className="py-16 md:py-24 scroll-mt-16 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding Pollution's Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch educational videos in Hindi and English to learn how air pollution affects our health
            and what we can do to protect ourselves.
          </p>
        </div>

        <div className="space-y-12">
          {/* Hindi Videos */}
          {hindiVideos.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                Hindi Videos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hindiVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          )}

          {/* English Videos */}
          {englishVideos.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                English Videos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {englishVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
