import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { queries } from "..";

type Props = {
  page: number;
  limit: number;
  enabled?: boolean;
};

export const usePosts = ({ page, limit, enabled = true }: Props) => {
  const { getPosts } = api();

  return useQuery({
    queryKey: queries.posts.getPosts(page, limit).queryKey,
    queryFn: () => getPosts(page, limit),
    enabled,
  });
};
