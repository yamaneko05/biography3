import { PostType } from "@/features/posts/types";
import { axios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

function getPosts(parentId?: string): Promise<PostType[]> {
  return axios.get("/posts" + (parentId ? `?parent_id=${parentId}` : ""));
}

export default function usePosts(parentId?: string) {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(parentId)
  })
}