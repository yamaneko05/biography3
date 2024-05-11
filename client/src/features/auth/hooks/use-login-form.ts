import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("正しいメールアドレスを入力してください"),
  password: z.string().min(1, "パスワードを入力してください")
})

export type LoginInputsType = z.infer<typeof formSchema>

export default function () {
  return useForm<LoginInputsType>({
    resolver: zodResolver(formSchema)
  })
}