import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserCircleIcon } from "@heroicons/react"
import { getUserFromToken, getUserRole } from "@/utils/auth"

export default function Navbar(){

  const user = getUserFromToken()
  const userRole = getUserRole()

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = ("/login")
  }

  return(
    <nav className="glass sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-700 px-4 py-2 flex items-center justify-between">
      <Link to="/dashboard" className="font-bold text-lg">Developer Task Manager</Link>
      <div>

      </div>

    </nav>

  );

}