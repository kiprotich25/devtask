import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {API} from "../services/api"

export default function Signup() {
    const [username, setUserame] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async()=> {
     if (!username || !email || !password) return alert ("All fields are required")
     setLoading(true);

     try {
        const res = await API.post("/auth/signup" , {username, email, password});
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard")
        
     } catch (err) {
        alert (err.response?.data?.message || "Sign-up failed")
        
        
     } finally {
       setLoading(false)
     }
  

    }



    return(
        <div className="flex min-h-screen  justify-center items-center bg-gray-100 dark:bg-zinc-900 px-4">
            <Card className="w-full max-w-md shadow-xl animate-fade">
              <CardHeader className="text-center text-2xl font-bold">
                <CardTitle></CardTitle>
              </CardHeader>
              
              <CardContent>
                <Input/>
                <Input/>
                <Input/>
              </CardContent>

              <CardFooter>
                <Button></Button>
              </CardFooter>

              <p>
                <Link>
                </Link>
              </p>
            </Card>
        </div>

    )

}
  