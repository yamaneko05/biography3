import FormField from "@/components/form/form-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCreatePostForm from "@/features/posts/hooks/use-create-post-form"

export default function () {
  const { register, handleSubmit, formState: {errors}, onSubmit, setValue } = useCreatePostForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-5">
      <FormField label="テキスト" error={errors.text}>
        <Input {...register("text")} />
      </FormField>
      <Button>投稿</Button>
    </form>
  )
}
