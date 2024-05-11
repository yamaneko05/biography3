import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/features/auth/components/login-form";

export default function () {
  return (
    <div className="grid place-items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Card className="border-none rounded-none w-[320px] shadow-lg shadow-slate-500">
        <CardHeader>
          <CardTitle>ログイン</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}