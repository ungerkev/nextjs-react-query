import React, { Suspense } from "react";
import { SearchParams } from "nuqs/parsers";
import PostsSkeleton from "@/components/posts/posts-skeleton";
import PostsLoader from "./posts-loader";

type Props = {
  searchParams: SearchParams;
};

const Posts = async ({ searchParams }: Props) => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold leading-none tracking-tight absolute top-[32px]">Posts</h1>

      <Suspense fallback={<PostsSkeleton />}>
        <PostsLoader searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default Posts;
