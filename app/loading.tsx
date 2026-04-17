function SkeletonBlock({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-2xl bg-white/6 ${className}`} />;
}

export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          <SkeletonBlock className="h-8 w-40" />
          <SkeletonBlock className="h-16 w-full max-w-3xl" />
          <SkeletonBlock className="h-24 w-full max-w-2xl" />
          <div className="flex gap-4">
            <SkeletonBlock className="h-12 w-40" />
            <SkeletonBlock className="h-12 w-44" />
          </div>
        </div>
        <SkeletonBlock className="h-[24rem] w-full" />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <SkeletonBlock className="h-[28rem] w-full" />
        <SkeletonBlock className="h-[28rem] w-full" />
      </div>
    </div>
  );
}
