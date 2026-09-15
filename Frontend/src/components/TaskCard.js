import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrashIcon, CheckCircleIcon } from "@heroicons/react/16/solid";
import {Button} from "@/components/ui/button"

export default function TaskCard ({onDelete, onToggle, task}) {
   return(
    <Card className = {`relative animation-fade ${task.completed ? "opacity-70" : ""}`}>
        <CardHeader>
          <CardTitle className={`font-semibold text-lg ${task.completed ? "line-through text-zinc-400" : ""}`}>
            {task.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-sm ">{task.description}</p>

        </CardContent>
        <CardFooter>

        </CardFooter>
    </Card>

   )

}