import { DEFAULT_LIMIT } from "@/config/limit";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const posts = [
  { title: "Post Title 1", subtitle: "Post Subtitle 1" },
  { title: "Post Title 2", subtitle: "Post Subtitle 2" },
  { title: "Post Title 3", subtitle: "Post Subtitle 3" },
  { title: "Post Title 4", subtitle: "Post Subtitle 4" },
  { title: "Post Title 5", subtitle: "Post Subtitle 5" },
  { title: "Post Title 6", subtitle: "Post Subtitle 6" },
  { title: "Post Title 7", subtitle: "Post Subtitle 7" },
  { title: "Post Title 8", subtitle: "Post Subtitle 8" },
  { title: "Post Title 9", subtitle: "Post Subtitle 9" },
  { title: "Post Title 10", subtitle: "Post Subtitle 10" },
  { title: "Post Title 11", subtitle: "Post Subtitle 11" },
  { title: "Post Title 12", subtitle: "Post Subtitle 12" },
];

const handler = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || `${DEFAULT_LIMIT}`, 10);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedPosts = posts.slice(startIndex, endIndex);

  const foundRefetchedPost = posts.find((post) => post.title.includes("Refetch"));
  if (!foundRefetchedPost) {
    // add post to the first place in array
    posts.unshift({ title: `Refetch-${uuidv4()}`, subtitle: "Refetched post" });
  }

  return NextResponse.json({
    data: paginatedPosts,
    meta: {
      currentPage: page,
      totalPages: Math.ceil(posts.length / limit),
      totalPosts: posts.length,
    },
  });
};

export { handler as GET };
