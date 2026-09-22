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

    }




    return(

    )

}
  