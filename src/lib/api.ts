import xiorClient from "./xior";

export interface Post {
  title: string;
  subtitle: string;
}

interface Meta {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}

interface Response {
  data: Post[];
  meta: Meta;
}

interface Api {
  getPosts: (page: number, limit: number) => Promise<Response>;
}

export const api = (): Api => {
  return {
    getPosts,
  };
};

const getPosts = async (page: number, limit: number): Promise<Response> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const baseUrl = `http://localhost:3000`;
  const xiorResponse = await xiorClient.get<Response>(`${baseUrl}/api/posts?page=${page}&limit=${limit}`);

  return {
    data: xiorResponse.data.data,
    meta: xiorResponse.data.meta,
  };
};
