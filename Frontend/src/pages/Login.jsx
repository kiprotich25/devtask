import {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {API} from "@/services/api";
import {Input} from "@/components/ui/input"

export default function Login () {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!password || !email ) return alert("Email and password is required")
        setLoading(true)

        try {
            const res = await API.post("/auth/login" , {email, password})
            if (!res.data?.token) return alert("Token not found")
            localStorage.setItem("token", res.data.token)
            navigate("/dashboard")
            
            
            
        } catch (error) {
            alert (error.response?.data ?.message|| "Login failed" )
        } finally {
           setLoading(false)
        }
        
    }
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="font-bold ">login page</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input 
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange= {e => setEmail(e.target.value)}/>
                    <Input
                    type ="password"
                    value={password}
                    placeholder="password"
                    onChange= {e => setPassword(e.target.value)}/>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button className="w-full" disabled={loading} onClick={handleLogin}>
                     {loading ? "logging in...." : "Log in"}
                    </Button>
                    
                </CardFooter>
                <p className = "text-sm text-zinc-600 text-center dark:text-zinc-300 mt-4">
                        Don't have an account {" "}
                        <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
                </p>
            </Card>
        </div>
    )
 

}