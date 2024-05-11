import { toast } from "@/components/ui/use-toast";
import { axios } from "@/lib/axios"

export default function useLogout() {
  return function () {
    axios.post("/logout");
    toast({
      description: "ログアウトしました"
    })
  }
}