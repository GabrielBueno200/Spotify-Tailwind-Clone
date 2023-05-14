import { Play } from "lucide-react"
import Image from "next/image"

interface IMixCardProps {
    title: string,
    imageSrc: string,
}

const MixCard = ({ title, imageSrc }: IMixCardProps) =>
    <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
        <Image
            width={84}
            height={84}
            src={imageSrc}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
        />
        {title}
        <button className="w-14 h-14 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible">
            <Play className="fill-zinc-800" />
        </button>
    </a>

export default MixCard