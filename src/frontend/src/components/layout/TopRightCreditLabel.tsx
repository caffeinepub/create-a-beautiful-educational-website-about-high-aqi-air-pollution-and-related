export function TopRightCreditLabel() {
  return (
    <div
      className="fixed bottom-4 left-4 z-40 pointer-events-none select-none max-w-[calc(100vw-2rem)]"
      aria-label="Site credit"
    >
      <p className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-primary drop-shadow-lg backdrop-blur-sm bg-background/40 dark:bg-background/60 px-3 py-1.5 rounded-lg border border-primary/20">
        Made by Saharsh UNIYAL
      </p>
    </div>
  );
}
