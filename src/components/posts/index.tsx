"use client";

import { LoaderCircle } from "lucide-react";
import { usePosts } from "@/hooks/queries/posts/usePosts";
import PostsList from "./posts-list";
import { usePagination } from "@/hooks/usePagination";
import PostsListSkeleton from "./posts-skeleton/posts-list-skeleton";
import { Button } from "../ui/button";

import PaginationComponent from "../pagination";

const Posts = () => {
  const { page, limit, setPage, setLimit, isLoading } = usePagination({ shallow: false });

  const { data, refetch, isFetching } = usePosts({
    page,
    limit,
    enabled: false,
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button onClick={() => refetch()} disabled={isFetching} className="flex gap-1">
          {isFetching ? <LoaderCircle className="animate-spin size-4" /> : null}
          <span>Refresh</span>
        </Button>
      </div>

      {(isLoading && !data?.data) || isFetching ? <PostsListSkeleton /> : <PostsList data={data?.data} />}

      <PaginationComponent
        page={page}
        limit={limit}
        setPage={setPage}
        setLimit={setLimit}
        totalPages={data?.meta.totalPages ?? 1}
        disabled={isFetching || isLoading}
      />
    </div>
  );
};

export default Posts;
