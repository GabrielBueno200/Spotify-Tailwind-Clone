import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import Image from 'next/image'
import Sidebar from './components/Sidebar'
import MixCard from './components/MixCard'
import Player from './components/Player'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-6 mt-4">
            <MixCard title="Liked Songs" imageSrc="/assets/liked-songs.jpg" />
            <MixCard title="Daily Mix 1" imageSrc="/assets/daily-mix-1.jpg" />
            <MixCard title="Daily Mix 2" imageSrc="/assets/daily-mix-2.jpg" />
            <MixCard title="Daily Mix 3" imageSrc="/assets/daily-mix-3.jpg" />
            <MixCard title="Daily Mix 4" imageSrc="/assets/daily-mix-4.jpg" />
            <MixCard title="Daily Mix 5" imageSrc="/assets/daily-mix-5.jpg" />
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Gabriel Bueno</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10">
              <Image width={128} height={128} className='w-full' src="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10">
              <Image width={128} height={128} className='w-full' src="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10">
              <Image width={128} height={128} className='w-full' src="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10">
              <Image width={128} height={128} className='w-full' src="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10">
              <Image width={128} height={128} className='w-full' src="/album.jpg" alt="Capa do álbum Wasting Light da banda Foo Fighters" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <Player />
    </div>
  )
}
