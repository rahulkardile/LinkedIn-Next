import { BookMarked, Code, Copy, EyeOff, Pencil, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import toast from "react-hot-toast"
import { DeletePost } from "@/lib/serverAction"

export function MenuOption({ hide, setHide, id, user }: { hide: boolean, setHide: any, id?: any, user: boolean }) {

    const handleTrash = async (id: string) => {

        const { success, message } = await DeletePost(id);

        if (success) {
            toast.success(message);
        } else {
            toast.success(message);
        }
    }

    return (
        <Dialog open={hide}>
            <DialogContent onInteractOutside={() => setHide(false)} className="sm:max-w-md">
                <div className="flex items-center flex-col gap-3">
                    {
                        user ? <>
                            <div className="flex gap-2 p-3 cursor-pointer rounded-lg hover:bg-slate-200 w-full px-4 items-start">
                                <Pencil />
                                <span>Edit</span>
                            </div>

                            <div onClick={() => handleTrash(id)} className="flex gap-2 p-3 cursor-pointer rounded-lg hover:bg-slate-200 w-full px-4 items-start">
                                <Trash />
                                <span>Delete</span>
                            </div>
                        </>
                            : ""
                    }

                    <div className="flex gap-2 p-3 cursor-pointer rounded-lg hover:bg-slate-200 w-full px-4 items-start">
                        <BookMarked />
                        <span>Save</span>
                    </div>
                    <div className="flex gap-2 p-3 cursor-pointer rounded-lg hover:bg-slate-200 w-full px-4 items-start">
                        <EyeOff />
                        <span>{"I don't want to see this"}</span>
                    </div>
                    <div className="flex gap-2 p-3 cursor-pointer rounded-lg hover:bg-slate-200 w-full px-4 items-start">
                        <Code />
                        <span>Copy link to post</span>
                    </div>

                </div>
                <DialogFooter className="sm:justify-center">
                    <DialogClose onClick={() => setHide(false)} asChild>
                        <Button type="button" variant="default" className="my-2 px-16">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
