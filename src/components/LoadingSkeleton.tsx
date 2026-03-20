import { Skeleton } from "@/components/ui/skeleton";

export const CardSkeleton = () => (
  <div className="bg-card border border-border rounded-xl p-6 space-y-4">
    <Skeleton className="h-10 w-10 rounded-lg" />
    <Skeleton className="h-5 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
    <Skeleton className="h-10 w-full rounded-md" />
  </div>
);

export const DepartmentCardSkeleton = () => (
  <div className="bg-card border border-border rounded-xl p-6 space-y-4">
    <Skeleton className="h-12 w-12 rounded-lg" />
    <Skeleton className="h-5 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-4 w-1/3" />
  </div>
);

export const TableRowSkeleton = () => (
  <tr>
    <td className="p-4"><Skeleton className="h-4 w-24" /></td>
    <td className="p-4"><Skeleton className="h-4 w-40" /></td>
    <td className="p-4"><Skeleton className="h-4 w-28" /></td>
    <td className="p-4 text-right"><Skeleton className="h-4 w-20 ml-auto" /></td>
  </tr>
);

export const GridSkeleton = ({ count = 6, type = "card" }: { count?: number; type?: "card" | "department" }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) =>
      type === "department" ? <DepartmentCardSkeleton key={i} /> : <CardSkeleton key={i} />
    )}
  </div>
);
