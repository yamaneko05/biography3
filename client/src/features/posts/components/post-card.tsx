import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { STORAGE_URL } from "@/constants";
import useLike from "@/features/posts/api/like";
import useUnlike from "@/features/posts/api/unlike";
import { PostType } from "@/features/posts/types"
import { Ellipsis, Heart, MessageSquareMore } from "lucide-react";
import { Link } from "react-router-dom";

export default function ({post}: {
  post: PostType;
}) {
  const like = useLike();
  const unlike = useUnlike();

  return (
    <div>
      <Link to={`/posts/${post.id}`}>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src={STORAGE_URL+post.user.icon_file} className="rounded-full w-8 h-8" alt="" />
            <div className="font-bold">
              {post.user.name}・
              <span className="text-sm">{post.created_at}</span>
            </div>
          </div>
          <div className="">
            <Ellipsis />
          </div>
        </div>
        <div>{post.text}</div>
      </Link>
      <div className="flex gap-4">
        <div className="flex items-center">
          <Button variant="ghost" className="h-8 px-2">
            <Heart
            width={16}
            color="red"
            fill={post.likes_exists ? "red" : "transparent"}
            onClick={post.likes_exists ? () => unlike(post.id) : () => like(post.id)}
            />
          </Button>
          <span>{post.likes_count}</span>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" className="h-8 px-2">
            <MessageSquareMore width={18} />
          </Button>
          <span>{post.children_count}</span>
        </div>
      </div>
    </div>
  )
}