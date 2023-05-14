import { ChevronDown, Library, Search } from "lucide-react"
import NavItem from "../NavItem"
import LibraryItem from "../LibraryItem"

const LibraryNav = () =>
    <nav className='bg-zinc-900 p-4 flex flex-col gap-1 flex-1'>
        <div className="flex justify-between">
            <NavItem Icon={Library} title="Your Library" />
            <span className="group px-3 pb-1 hover:bg-zinc-950 hover:rounded-full transition-all">
                <a href="#" className="text-lg text-zinc-400 group-hover:text-zinc-100">+</a>
            </span>
        </div>

        <div className="flex gap-1 mt-3 mb-3">
            <a href="#" className="py-1 px-2 bg-zinc-600 rounded-full hover:bg-zinc-700 transition-all">
                Playlists
            </a>
            <a href="#" className="py-1 px-2 bg-zinc-600 rounded-full hover:bg-zinc-700 transition-all">
                Artists
            </a>
            <a href="#" className="py-1 px-2 bg-zinc-600 rounded-full hover:bg-zinc-700 transition-all">
                Albums
            </a>
        </div>

        <div className="flex justify-between text-lg">
            <span className="group p-2 hover:bg-zinc-950 hover:rounded-full transition-all">
                <Search className="text-zinc-400 hover:text-zinc-100" />
            </span>
            <span className="flex gap-2 items-center justify-center text-zinc-400 hover:text-zinc-100">
                Recents <ChevronDown />
            </span>
        </div>

        <ul className="overflow-y-scroll max-h-96">
            <LibraryItem title="Liked songs" description="Playlist • 367 songs" imageSrc="/assets/liked-songs.jpg" isPinned />
            <LibraryItem title="I Love My '90s Hip-Hop" description="Playlist • Spotify" imageSrc="/assets/playlist-1.jpg" />
            <LibraryItem title="Coding Mode" description="Playlist • Spotify" imageSrc="/assets/playlist-2.jpg" />
            <LibraryItem title="Today's Top Hits" description="Playlist • Spotify" imageSrc="/assets/playlist-5.jpg" />
            <LibraryItem title="Discover Weekly" description="Playlist • Spotify" imageSrc="/assets/discover-weekly.jpg" />
            <LibraryItem title="The Cure" description="Artists" imageSrc="/assets/playlist-3.jpg" />
            <LibraryItem title="U2" description="Artists" imageSrc="/assets/playlist-4.jpg" />

        </ul>
    </nav>

export default LibraryNav
