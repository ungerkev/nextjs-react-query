import React from "react";
import PostsListSkeleton from "./posts-list-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import FixSafariSuspense from "@/components/fix-safari-suspense";
import PaginationSkeleton from "@/components/pagination/pagination-skeleton";

const PostsSkeleton = () => {
  return (
    <>
      <FixSafariSuspense />

      <div className="space-y-6">
        <div className="flex justify-end">
          {/* Refresh button skeleton */}
          <Skeleton className="rounded-md w-[71px] h-[36px] " />
        </div>
        <PostsListSkeleton />
        <PaginationSkeleton />
      </div>
    </>
  );
};

export default PostsSkeleton;
