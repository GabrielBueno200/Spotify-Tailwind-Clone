import { ChevronLeft, ChevronRight, } from 'lucide-react'
import Image from 'next/image'

const Header = () =>
  <div className="flex justify-between mr-4">
    <div className="flex items-center gap-4">
      <button className='rounded-full bg-black/40 p-1'>
        <ChevronLeft />
      </button>
      <button className='rounded-full bg-black/40 p-1'>
        <ChevronRight />
      </button>
    </div>

    <div className="relative group flex w-20 justify-center">
      <div className="invisible text-xs font-semibold h-6 w-28 p-4 rounded-md flex justify-center items-center bg-zinc-900 text-white absolute top-0 -mt-7 group-hover:visible">
        <span>Gabriel Bueno</span>
      </div>
      <Image
        width={34}
        height={34}
        className="rounded-full border-4 border-black cursor-pointer"
        src="https://avatars.githubusercontent.com/u/56837996?v=4"
        alt="Gabriel Bueno"
      />
    </div>
  </div>

export default Header