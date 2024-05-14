import { PostType } from "@/features/posts/types";
import { axios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

function getPost(postId: string): Promise<PostType> {
  return axios.get(`/posts/${postId}`);
}

export default function usePost(postId: string) {
  return useQuery({
    queryKey: ["post"],
    queryFn: () => getPost(postId)
  })
}