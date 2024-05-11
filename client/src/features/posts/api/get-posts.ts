import { PostType } from "@/features/posts/types";
import { axios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

function getPosts(): Promise<PostType[]> {
  return axios.get("/posts");
}

export default function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts
  })
}