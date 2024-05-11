import { UserType } from "@/features/users/types"

export type PostType = {
  id: number,
  text: string,
  user: UserType,
  created_at: string,
  updated_at: string,
  likes_exists: boolean
}