import { toast } from "@/components/ui/use-toast"
import useCreatePost from "@/features/posts/api/create-post"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  text: z.string().min(1)
})

export type CreatePostInputsType = z.infer<typeof formSchema>

export default function useCreatePostForm () {
  const { mutate } = useCreatePost()

  function onSubmit(formData: CreatePostInputsType) {
    mutate(formData);
  }

  return {...useForm<CreatePostInputsType>({
    resolver: zodResolver(formSchema)
  }), onSubmit}
}