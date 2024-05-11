import { axios } from "@/lib/axios"

export default function useLike() {
  return function (id: number) {
    axios.post(`/posts/${id}/like`);
  }
}