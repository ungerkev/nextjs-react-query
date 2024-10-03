import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Skeleton } from "@/components/ui/skeleton";
import { DEFAULT_LIMIT } from "@/config/limit";

const PostsListSkeleton = () => {
  return (
    <>
      {Array.from({ length: DEFAULT_LIMIT }).map(() => (
        <div key={uuidv4()}>
          <Skeleton className="h-[90px] w-full rounded-xl" />
        </div>
      ))}
    </>
  );
};

export default PostsListSkeleton;
