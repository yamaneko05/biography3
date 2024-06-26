import { axios } from "@/lib/axios"
import { queryClient } from "@/lib/query-client";

export default function useLike() {
  return function (id: number) {
    axios.post(`/posts/${id}/like`);
    queryClient.invalidateQueries({queryKey: ['posts']})
  }
}