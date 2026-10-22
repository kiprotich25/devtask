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
import ThemeToggle from "./ThemeToggle"

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
      <div className=" flex items-center gap-2">
    
        {userRole && (
          <span className={`px-2 py-1 rounded text-xs font-medium 
            ${userRole === "admin"
              ?'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              :'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
             }`
          }>
          {userRole.charAt(0).toUpperCase() + userRole.splice(1)}
          </span>
        )}
        <ThemeToggle/>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
    
          </DropdownMenuTrigger>
        </DropdownMenu>

      </div>

    </nav>

  );

}