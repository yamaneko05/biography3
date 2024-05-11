import { CreatePostInputsType } from "@/features/posts/hooks/use-create-post-form";
import { PostType } from "@/features/posts/types";
import { axios } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

function createPost(formData: CreatePostInputsType): Promise<PostType> {
  return axios.post(`/posts`, formData);
}

export default function useCreatePost () {
  return useMutation({
    mutationFn: (formData: CreatePostInputsType) => createPost(formData),
    onSuccess: () => {
      location.reload();
    }
  })
}