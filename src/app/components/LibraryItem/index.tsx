import { Pin } from "lucide-react"
import Image from "next/image"

interface ILibraryItemProps {
    title: string,
    imageSrc: string,
    description: string,
    isPinned?: boolean
}

const LibraryItem = ({ title, description, isPinned, imageSrc }: ILibraryItemProps) =>
    <li className="flex gap-3 items-center hover:bg-zinc-800 p-2 rounded-md cursor-pointer">
        <Image src={imageSrc} alt={title} width={60} height={60} />
        <span>
            <strong className="font-semibold block">{title}</strong>
            <span className="text-xs text-zinc-400">
                {isPinned && <Pin className="inline text-green-500 mr-1" size={15} fill="green" />}{description}
            </span>
        </span>
    </li>

export default LibraryItem