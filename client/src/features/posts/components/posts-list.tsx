import { Button } from "@/components/ui/button";
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter, Table } from "@/components/ui/table";
import useLike from "@/features/posts/api/like";
import { PostType } from "@/features/posts/types";
import { Heart } from "lucide-react";

export default function ({posts}: {
  posts: PostType[]
}) {
  const like = useLike();

  return posts ? (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>投稿者</TableHead>
          <TableHead>テキスト</TableHead>
          <TableHead>時間</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map(post => (
          <TableRow key={post.id}>
            <TableCell className="font-medium">{post.user.name}</TableCell>
            <TableCell>{post.text}</TableCell>
            <TableCell>{post.created_at}</TableCell>
            <TableCell>
              <Button variant="ghost">
                <Heart
                color="red"
                fill={post.likes_exists ? "red" : "transparent"}
                onClick={() => like(post.id)}
                />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ) : null
}