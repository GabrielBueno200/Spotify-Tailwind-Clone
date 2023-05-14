import Image from "next/image"

interface IPlaylistCard {
    title: string,
    artists: string,
    imageSrc: string
}

const PlaylistCard = ({ title, artists, imageSrc }: IPlaylistCard) =>
    <a href="#" className="bg-white/5 p-2 rounded flex flex-col gap-2 hover:bg-white/10">
        <Image width={150} height={150} className='w-full' src={imageSrc} alt={title} />
        <strong className="font-semibold">{title}</strong>
        <span className="text-sm text-zinc-400">{artists}</span>
    </a>

export default PlaylistCard