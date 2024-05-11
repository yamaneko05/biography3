import FormField from "@/components/form/form-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/features/auth/api/login";
import useLoginForm from "@/features/auth/hooks/use-login-form";

export default function () {
  const { register, handleSubmit, formState: {errors} } = useLoginForm();

  const login = useLogin();

  return (
    <form onSubmit={handleSubmit(login)} className="space-y-8">
      <FormField label="メールアドレス" error={errors.email}>
        <Input type="email" {...register("email")} />
      </FormField>
      <FormField label="パスワード" error={errors.password}>
        <Input type="password" {...register("password")} />
      </FormField>
      <Button>ログイン</Button>
    </form>
  )
}