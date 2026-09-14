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
    <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent>

        </CardContent>
        <CardFooter>

        </CardFooter>
    </Card>

   )

}