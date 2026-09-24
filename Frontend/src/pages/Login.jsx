import {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
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
            localStorage.setItem("token", res.data.token)
            navigate("dashboard")
            
            if (!res.data?.token) return alert("Token not found")
            
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
                    <CardTitle>login</CardTitle>
                </CardHeader>
                <CardContent>
                    <Input/>
                    <Input/>
                </CardContent>
                <CardFooter>
                    
                </CardFooter>
            </Card>
        </div>
    )
 

}