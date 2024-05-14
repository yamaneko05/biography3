import { axios } from "@/lib/axios"
import { queryClient } from "@/lib/query-client";

export default function useUnlike() {
  return async function (id: number) {
    await axios.post(`/posts/${id}/unlike`);
    queryClient.invalidateQueries({queryKey: ['posts']})
  }
}