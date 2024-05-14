import { toast } from "@/components/ui/use-toast";
import { LoginInputsType } from "@/features/auth/hooks/use-login-form";
import { axios } from "@/lib/axios";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  return async function (formData: LoginInputsType) {
    await axios.get("../sanctum/csrf-cookie");
    axios.post("/login", formData)
    .then(() => {
      toast({description: "ログインしました"})
      return navigate("/")  
    })
    .catch((err: AxiosError) => {
      if (err.response?.status == 403) {
        toast({
          variant: "destructive",
          description: "パスワードもしくはメールアドレスが異なります"
        })
      }
    });
  }
}