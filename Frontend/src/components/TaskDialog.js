import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Textarea} from "@components/ui/textarea";
import {Button} from "@components/ui/button"
import { useState } from "react";
import { DialogClose } from "@base-ui/react";

export default function TaskDialog ({onSubmit}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    onSubmit({title, description})
    setTitle("")
    setDescription("")

  };


  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
        </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new task</DialogTitle>
          <DialogDescription> Add title and description to create task</DialogDescription>
        </DialogHeader>
        <Input placeholder="Enter name of the task" value={title} onChange={e => setTitle(e.Target.value)}/>
        <Textarea placeholder="Enter task description" className="mt-2" value={description} onChange={e => setDescription(e.Target.value)} />
        <DialogFooter>
         <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
         </DialogClose>
         <Button onClick = {handleCreate}>Create Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )

}