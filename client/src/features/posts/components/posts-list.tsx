import Spinner from "@/components/spinner";
import usePosts from "@/features/posts/api/get-posts";
import PostCard from "@/features/posts/components/post-card";
import { Loader } from "lucide-react";

export default function () {
  const { data: posts } = usePosts();

  return posts ? (
    <div className="space-y-4">
      {posts.map(post => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  ) : <Spinner />
}