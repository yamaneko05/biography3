import FormField from "@/components/form/form-field";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { STORAGE_URL } from "@/constants";
import useLoginUser from "@/features/users/api/get-login-user"
import useUpdateIconFileForm from "@/features/users/hooks/use-update-icon-file-form";

export default function () {
  const {data: user} = useLoginUser();

  return user ? (
    <>
      <div className="">アイコン</div>
      <div className="">
        {user.icon_file ? (
          <img src={STORAGE_URL + user.icon_file} alt="" />
        ) : "アイコン未設定"}
      </div>
      <UpdateIconDialog userId={user.id} />
    </>
  ) : <Spinner />
}

function UpdateIconDialog({userId}: {
  userId: string
}) {
  const { register, onSubmit, handleSubmit, formState: {errors} } = useUpdateIconFileForm(userId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>アイコンを変更する</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>アイコンを変更する</DialogTitle>
        </DialogHeader>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormField label="新しいアイコン" error={errors.file}>
              <Input type="file" {...register("file")} />
            </FormField>
            <Button>保存</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}