import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import useLike from "@/features/posts/api/like";
import useUnlike from "@/features/posts/api/unlike";
import { PostType } from "@/features/posts/types"
import { Heart, MessageSquareMore } from "lucide-react";
import { Link } from "react-router-dom";

export default function ({post}: {
  post: PostType;
}) {
  const like = useLike();
  const unlike = useUnlike();

  return (
    <div className="">
      <Link to={`/posts/${post.id}`}>
        <div className="flex justify-between">
          <div className="font-bold">
            {post.user.name}・
            <span className="text-sm">{post.created_at}</span>
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