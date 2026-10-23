import { useState, useEffect} from "react";
import { toast } from "sonner";
import TaskCard from "@/components/TaskCard";
import TaskDialog from "@/components/TaskDialog";
import Navbar from "@/components/Navbar"
import {API} from "@/services/api"

export default function DeveloperDashboard () {
    const [tasks, setTasks] = usestate([]);

    const load = async () => {
        const res = await API.get('/tasks/me')
        setTasks(res.data)
    } 
    useEffect(() => {load()}, [])
    const createTask = async (payload) => {
        const res = await API.post('/tasks', payload)
        setTasks(prev => [res.data, ...prev])
        toast("Task created successfully")

    }

}