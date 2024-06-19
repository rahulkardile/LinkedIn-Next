import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import ProfileImg from "./shared/ProfileImg"
import { CalendarDays, ImagePlus, PartyPopper } from "lucide-react"
import { ChangeEvent, useRef, useState } from "react"
import { readFileAsUrl } from "@/lib/utils"
import Image from "next/image"
import { createPostAction } from "@/lib/serverAction"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export function InputDialog({ open, setOpen, src, fullName }: { open: boolean, setOpen: any, src: string, fullName: string }) {

    const inputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<string>("");
    const [InputText, setInputText] = useState<string>("");
    const router = useRouter();

    const fileHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const dataUrl = await readFileAsUrl(file);
            setSelectedFile(dataUrl);
        }
    }

    const PostActionHandler = async (formData: FormData) => {
        if (loading) return;

        setLoading(true);
        const inputText = formData.get('inputText') as string;
        try {
            const data = await createPostAction(inputText, selectedFile);
            if (data !== undefined) {
                if (data.success) {
                    toast.success(data.message, { duration: 4000 });
                    setInputText("");
                    setSelectedFile("");
                    setOpen(false);
                    setLoading(false);

                    setTimeout(() => {
                        router.refresh();
                    }, 500);

                } else {
                    toast.error("Error Occur!");
                    setLoading(false);

                    setTimeout(() => {
                        router.refresh();
                    }, 500);

                }
            }

        } catch (error) {
            setLoading(false);
            console.log("Error Occured!");
            toast.error("Could not save!")
        }
    }

    return (
        <Dialog open={open}>
            <DialogContent onInteractOutside={() => setOpen(false)} className="sm:max-w-[825px] ">
                <DialogHeader>
                    <DialogTitle className="flex gap-2 items-center">
                        <ProfileImg src={src} />
                        <div className="flex flex-col">
                            <h1 className="text-sm font-normal">{fullName}</h1>
                            <p className="text-xs font-normal text-zinc-500">Post to anyone</p>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="p-2">
                        {"Start creating something you're excited about. Click on Create Post when you're done."}
                    </DialogDescription>
                </DialogHeader>
                <form action={PostActionHandler}>
                    <div className="flex flex-col justify-center items-center m-auto gap-4 py-4 w-full">
                        <textarea name="inputText" value={InputText} onChange={(e) => setInputText(e.target.value)} placeholder="What do you want to talk about?" rows={5} cols={5} className="w-[96%] outline-none " />

                        <div hidden={selectedFile.length === 0 ? true : false} className="w-[500px] p-4 bg-zinc-200 h-[300px] overflow-hidden rounded-xl">
                            {
                                selectedFile && (
                                    <Image src={selectedFile} alt="preview image" width={500} height={500}
                                        className="w-full h-full rounded-xl object-contain"
                                    />
                                )
                            }
                        </div>

                        <input type="file" ref={inputRef} onChange={fileHandler} accept="image/*" name="image" className="hidden" />

                    </div>

                    <div className="flex flex-row gap-9 select-none">
                        <div onClick={() => inputRef.current?.click()} className="p-2 flex flex-col items-center cursor-pointer duration-500 hover:scale-105 ">
                            <ImagePlus />
                            <span>Add media</span>
                        </div>

                        <div className="p-2 flex flex-col items-center cursor-wait duration-500 hover:scale-105 ">
                            <CalendarDays />
                            <span>Add Event</span>
                        </div>

                        <div className="p-2 flex flex-col items-center cursor-wait duration-500 hover:scale-105 ">
                            <PartyPopper />
                            <span>Celebrate</span>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button disabled={loading} type="submit">Create Post</Button>
                        <DialogClose disabled={loading} onClick={() => setOpen(false)} asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}
