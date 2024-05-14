import { buttonVariants } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import useLogout from "@/features/auth/api/logout"
import { NavLink } from "react-router-dom"

const navLinks = [
  {
    to: "/",
    title: "ホーム"
  },
  {
    to: "/profile",
    title: "プロフィール"
  },
  {
    to: "/posts",
    title: "ポスト"
  }
]

export default function () {
  return (
    <div className="sticky top-0 h-screen p-2 w-[240px] shrink-0 flex flex-col justify-between">
      <div className="flex flex-col gap-1">
        {navLinks.map((navLink, key) => (
          <NavLink to={navLink.to} key={key} className={({isActive}) => buttonVariants({
            variant: isActive ? "default" : "ghost",
            className: "!justify-normal"
          })}>
            {navLink.title}
          </NavLink>
        ))}
      </div>
      <AccountMenu />
    </div>
  )
}

function AccountMenu() {
  const logout = useLogout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={buttonVariants({
        variant: "outline",
        className: "!justify-normal"
      })}>
        open
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>ログアウト</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
