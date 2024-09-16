"use client";

import { useRenameModal } from "@/store/use-rename-model";
import { 
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "../ui/dialog";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const RenameModal = () => {
    const {
        isOpen, 
        onClose,
        initialValues,
    } = useRenameModal()
    const [title, setTitle] = useState(initialValues.title);
    const {mutate, pending} = useApiMutation(api.board.update)

    useEffect(()=>{
        setTitle(initialValues.title);
    }, [initialValues.title])

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        mutate({
            id: initialValues.id,
            title,
        })
            .then(()=>{
                toast.success("Board Renamed");
                onClose();
            })
            .catch(()=> {
                toast.error("Failed to Rename Board")
            })
    };
    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Edit Board Title
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Enter a new title for this board
                </DialogDescription>
                <form onSubmit={onSubmit} className="space-y-4">
                    <Input 
                        disabled={pending}
                        required
                        maxLength={60}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Board Title"

                    />
                </form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button disabled={pending}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
