import { UpdateIconInputsType } from "@/features/users/types";
import { axios } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

function updateIconFile(userId: string, formData: UpdateIconInputsType) {
  return axios.post(`/users/${userId}/update_icon_file`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}

export default function useUpdateIconFile(userId: string) {
  return useMutation({
    mutationFn: (formData: UpdateIconInputsType) => updateIconFile(userId, formData)
  })
}