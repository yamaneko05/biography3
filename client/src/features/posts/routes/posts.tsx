import usePosts from "@/features/posts/api/get-posts";
import CreatePostForm from "@/features/posts/components/create-post-form";
import PostsList from "@/features/posts/components/posts-list";

export default function () {
  const { data: posts } = usePosts();

  return (
    <>
      <CreatePostForm />
      {posts && <PostsList posts={posts} />}
    </>
  )
}