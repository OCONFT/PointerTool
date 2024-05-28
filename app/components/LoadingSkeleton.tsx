export function LoadingSkeleton() {
  return (
    <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 grow h-full ">
      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-2/3"></div>
        <div className="skeleton h-4 w-2/3"></div>

        <div className="skeleton h-4 w-2/3"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
}
