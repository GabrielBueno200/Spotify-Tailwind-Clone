import {
  Heart,
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  PictureInPicture,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

const Player = () => (
  <footer className="flex fixed bottom-0 h-20 w-full bg-zinc-950 items-center justify-between border-t border-zinc-800 px-6 py-3">
    <div className="flex items-center gap-3">
      <Image
        width={60}
        height={60}
        className="rounded-md"
        src="/assets/player-song.jpg"
        alt="Back On Road"
      />
      <div className="flex flex-col">
        <strong className="font-normal">Back on Road</strong>
        <span className="text-xs text-zinc-400">Gucci Mane, Drake</span>
      </div>
      <Heart size={16} className="text-zinc-200" />
      <PictureInPicture size={16} className="text-zinc-200" />
    </div>

    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-6">
        <Shuffle size={20} className="text-zinc-200 hidden md:block" />
        <SkipBack size={20} className="text-zinc-200 hidden md:block" />

        <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-zinc-950 fill-zinc-950">
          <Play className="fill-zinc-950" />
        </button>

        <SkipForward size={20} className="text-zinc-200 hidden md:block" />
        <Repeat size={20} className="text-zinc-200 hidden md:block" />
      </div>

      <div className="hidden md:flex items-center gap-2">
        <div className="text-xs text-zinc-400">0:31</div>
        <div className="h-1 rounded-full w-96 bg-zinc-600">
          <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
        </div>
        <div className="text-xs text-zinc-400">2:14</div>
      </div>
    </div>

    <div className="hidden md:flex items-center gap-2">
      <Mic2 size={20} />
      <LayoutList size={20} />
      <Laptop2 size={20} />
      <div className="flex items-center gap-2">
        <Volume className="fill-zinc-800" />
        <div className="h-1 rounded-full w-24 bg-zinc-600">
          <div className="bg-zinc-200 w-8 h-1 rounded-full"></div>
        </div>
      </div>
      <Maximize2 size={20} />
    </div>
  </footer>
);

export default Player;
