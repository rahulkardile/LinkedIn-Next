import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import ProfileImg from "./shared/ProfileImg"
import { CalendarDays, GalleryHorizontal, ImagePlus, PartyPopper } from "lucide-react"
import { ChangeEvent, useRef, useState } from "react"
import { readFileAsUrl } from "@/lib/utils"
import Image from "next/image"

export function InputDialog({ open, setOpen, src, fullName }: { open: boolean, setOpen: any, src: string, fullName: string }) {

    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<string>("");

    const fileHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const dataUrl = await readFileAsUrl(file);
            setSelectedFile(dataUrl);
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
                        {"  Make changes from bottem. Click Submit when you're done."}
                    </DialogDescription>
                </DialogHeader>
                <form action="">
                    <div className="flex flex-col justify-center items-center m-auto gap-4 py-4 w-full">
                        <textarea placeholder="What do you want to talk about?" rows={8} cols={8} className="w-[90%] outline-none " />

                        <div className="w-[500px] p-4 bg-zinc-200 h-[300px] overflow-hidden rounded-xl">
                            {
                                selectedFile.length &&  (
                                    <Image src={selectedFile} alt="preview image" width={500} height={500}
                                        className="w-full h-full rounded-xl object-contain"
                                    />
                                ): ""
                            }
                        </div>
                        <input type="file" ref={inputRef} onChange={fileHandler} accept="image/*" name="image" className="hidden" />
                    </div>

                    <div className="flex flex-row gap-9">
                        <div onClick={() => inputRef.current?.click()} className="p-2 flex flex-col items-center cursor-pointer duration-500 hover:scale-105 ">
                            <ImagePlus />
                            <span>Add media</span>
                        </div>

                        <div onClick={() => inputRef.current?.click()} className="p-2 flex flex-col items-center cursor-pointer duration-500 hover:scale-105 ">
                            <CalendarDays />
                            <span>Add Event</span>
                        </div>

                        <div onClick={() => inputRef.current?.click()} className="p-2 flex flex-col items-center cursor-pointer duration-500 hover:scale-105 ">
                            <PartyPopper />
                            <span>Celebrate</span>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Submit changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}
