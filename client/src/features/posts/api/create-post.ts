import { toast } from "@/components/ui/use-toast";
import { CreatePostInputsType } from "@/features/posts/hooks/use-create-post-form";
import { PostType } from "@/features/posts/types";
import { axios } from "@/lib/axios";
import { queryClient } from "@/lib/query-client";
import { useMutation } from "@tanstack/react-query";

function createPost(formData: CreatePostInputsType): Promise<PostType> {
  return axios.post(`/posts`, formData);
}

export default function useCreatePost () {
  return useMutation({
    mutationFn: (formData: CreatePostInputsType) => createPost(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['posts']})
      toast(
        {description: "投稿しました"}
      )
    }
  })
}