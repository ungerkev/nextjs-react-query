import React from "react";
import { Pagination, PaginationContent } from "../ui/pagination";
import { Skeleton } from "../ui/skeleton";

const PaginationSkeleton = () => {
  return (
    <Pagination>
      <PaginationContent className="space-x-2">
        <Skeleton className="w-[86px] h-[36px] rounded-md" />
        <Skeleton className="w-[61px] h-[36px] rounded-md" />

        <Skeleton className="w-[65px] h-[36px] rounded-md" />
        <Skeleton className="w-[65px] h-[36px] rounded-md" />
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationSkeleton;
