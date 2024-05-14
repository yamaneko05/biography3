import useUpdateIconFile from "@/features/users/api/update-icon-file";
import { UpdateIconInputsType } from "@/features/users/types";
import { SubmitHandler, useForm } from "react-hook-form";

export default function useUpdateIconFileForm (userId: string) {
  const updateIconFile = useUpdateIconFile(userId);

  const onSubmit: SubmitHandler<UpdateIconInputsType> = (formData) => {
    updateIconFile.mutate(formData)
  }

  return {...useForm<UpdateIconInputsType>(), onSubmit}
}