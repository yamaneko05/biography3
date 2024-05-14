import Spinner from "@/components/spinner";
import usePost from "@/features/posts/api/get-post";
import PostCard from "@/features/posts/components/post-card";
import { useParams } from "react-router-dom";

export default function () {
  const { postId } = useParams();
  const { data: post } = usePost(postId!);

  return post ? (
    <>
      <PostCard post={post} />
    </>
  ) : <Spinner />
}