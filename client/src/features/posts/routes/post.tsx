import Spinner from "@/components/spinner";
import usePost from "@/features/posts/api/get-post";
import usePosts from "@/features/posts/api/get-posts";
import CreatePostForm from "@/features/posts/components/create-post-form";
import PostCard from "@/features/posts/components/post-card";
import { useParams } from "react-router-dom";

export default function () {
  const { postId } = useParams();
  const { data: post } = usePost(postId!);
  const { data: posts } = usePosts(postId!)
  // const { data: posts } = usePosts()

  return post ? (
    <>
      <CreatePostForm parentId={post.id} />
      <PostCard post={post} />
      <div className="pl-5">
        {posts?.map(post => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </>
  ) : <Spinner />
}