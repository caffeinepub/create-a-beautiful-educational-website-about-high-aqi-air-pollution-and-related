import React from 'react';

export function CreatorCredit() {
  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
      <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 shadow-sm">
        <p className="text-xs text-muted-foreground font-medium">
          made by <span className="text-foreground">Saharsh UNIYAL</span>
        </p>
      </div>
    </div>
  );
}
