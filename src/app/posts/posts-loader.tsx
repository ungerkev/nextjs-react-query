import React from "react";
import { SearchParams } from "nuqs/parsers";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { searchParamsCache } from "@/app/posts/search-params";
import Posts from "@/components/posts";
import { queries } from "@/hooks/queries";
import { api } from "@/lib/api";

type Props = {
  searchParams: SearchParams;
};

const PostsLoader = async ({ searchParams }: Props) => {
  const { getPosts } = api();

  const { page, limit } = searchParamsCache.parse(searchParams);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queries.posts.getPosts(page, limit).queryKey,
    queryFn: () => getPosts(page, limit),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  );
};

export default PostsLoader;
