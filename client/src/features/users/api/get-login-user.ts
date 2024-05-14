import { UserType } from "@/features/users/types";
import { axios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

function getLoginUser(): Promise<UserType> {
  return axios.get(`/user`);
}

export default function useLoginUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getLoginUser,
    retry: false
  })
}