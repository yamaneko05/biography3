import Layout from "@/components/layout";
import Login from "@/features/auth/routes/login";
import Post from "@/features/posts/routes/post";
import Posts from "@/features/posts/routes/posts";
import useLoginUser from "@/features/users/api/get-login-user";
import Profile from "@/features/users/routes/profile";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <>register</>
  },
  {
    element: <Protected />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <>home</>
          },
          {
            path: "/profile",
            element: <Profile />
          },
          {
            path: "/posts",
            element: <Posts />
          },
          {
            path: "/posts/:postId",
            element: <Post />
          },
        ]
      }
    ]
  }
])

function Protected () {
  const { data: user, isFetched } = useLoginUser();
  
  return isFetched ? user ? <Outlet /> : <Navigate to="/login" /> : null
}