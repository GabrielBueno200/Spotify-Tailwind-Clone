import { Play } from "lucide-react";
import Image from "next/image";

interface IPlaylistCard {
  title: string;
  artists: string;
  imageSrc: string;
}

const PlaylistCard = ({ title, artists, imageSrc }: IPlaylistCard) => (
  <a
    href="#"
    className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10"
  >
    <div className="relative group">
      <Image
        width={150}
        height={150}
        className="w-full"
        src={imageSrc}
        alt={title}
      />
      <button className="w-14 h-14 flex items-center justify-center pl-1 rounded-full bg-green-500 text-zinc-800 ml-auto mx-2 my-1 invisible group-hover:visible absolute bottom-0 right-0 transition-all group-hover:-translate-y-2 opacity-0 group-hover:opacity-100 shadow-black/50 shadow-md">
        <Play className="fill-zinc-800" />
      </button>
    </div>
    <strong className="font-semibold">{title}</strong>
    <span className="text-sm text-zinc-400">{artists}</span>
  </a>
);

export default PlaylistCard;
