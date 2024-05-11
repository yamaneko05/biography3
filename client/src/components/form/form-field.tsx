import { FieldError } from "react-hook-form"

export default function ({children, label, error}: {
  children: React.ReactNode,
  label: string,
  error?: FieldError;
}) {
  return (
    <div className="space-y-1">
      <div className={error && "text-red-500"}>{label}</div>
      {children}
      {error && <div className="text-red-500">{error?.message}</div>}
    </div>
  )
}