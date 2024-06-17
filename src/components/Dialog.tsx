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

export function InputDialog({ open, setOpen, src, fullName }: { open: boolean, setOpen: any, src: string, fullName: string }) {
    return (
        <Dialog open={open}>
            <DialogContent onInteractOutside={() => setOpen(false)} className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex gap-2 items-center">
                        <ProfileImg src={src} />
                        <div className="flex flex-col">
                            <h1 className="text-sm font-normal">{fullName}</h1>
                            <p className="text-xs font-normal text-zinc-500">Post to anyone</p>
                        </div>
                    </DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
