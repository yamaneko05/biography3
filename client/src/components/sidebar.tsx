import { buttonVariants } from "@/components/ui/button"
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
    <div className="sticky top-0 h-screen p-2 w-[240px] flex flex-col justify-between">
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
    </div>
  )
}