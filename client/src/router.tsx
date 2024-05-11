import Layout from "@/components/layout";
import Login from "@/features/auth/routes/login";
import Posts from "@/features/posts/routes/posts";
import useLoginUser from "@/features/users/api/get-login-user";
import Profile from "@/features/users/routes/profile";
import { Outlet, createBrowserRouter } from "react-router-dom";

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
          }
        ]
      }
    ]
  }
])

function Protected () {
  const { data: user } = useLoginUser();
  
  return user ? <Outlet /> : null
}