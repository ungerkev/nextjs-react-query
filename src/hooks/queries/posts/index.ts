import { createQueryKeys } from "@lukemorales/query-key-factory";

export const postsKeys = createQueryKeys("posts", {
  getPosts: (page: number, limit: number) => ["getPosts", page, limit],
});
