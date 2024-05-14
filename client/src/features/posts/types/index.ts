import { UserType } from "@/features/users/types"

export type PostType = {
  id: string,
  text: string,
  user: UserType,
  created_at: string,
  updated_at: string,
  likes_exists: boolean,
  likes_count: number,
  children_count: number,
  children?: PostType[]
}