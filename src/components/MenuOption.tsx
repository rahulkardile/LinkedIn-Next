import { BookMarked, Code, Copy, EyeOff, Pencil, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
} from "@/components/ui/dialog"
import toast, { Toaster } from "react-hot-toast"
import { DeletePost } from "@/lib/serverAction"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function MenuOption({ hide, setHide, id, user }: { hide: boolean, setHide: any, id?: any, user: boolean }) {

    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleTrash = async (id: string) => {
        if (loading) return;

        setLoading(true);
        const res: { message: string, success: boolean } = await DeletePost(id);
        if (res.success === true) {

            toast.success(res.message, { duration: 4000 });
            setLoading(false);
            setHide(false);
            setTimeout(() => {
                router.refresh();
            }, 500);
        } else {
            toast.error(res.message);
            setLoading(false);
            setTimeout(() => {
                router.refresh();
            }, 1000);
            setHide(false);
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

                            <button onClick={() => handleTrash(id)} className="flex gap-2 p-3 cursor-pointer rounded-lg hover:bg-slate-200 w-full px-4 items-start">
                                <Trash />
                                <span>Delete</span>
                            </button>
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
