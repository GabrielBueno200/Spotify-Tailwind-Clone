import MixCard from "../MixCard";
import PlaylistCard from "../PlaylistCard";

const Content = () => (
  <div className="mt-6 overflow-y-scroll pb-24 pr-6">
    <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

    <div className="grid grid-cols-3 gap-6 mt-4">
      <MixCard title="Liked Songs" imageSrc="/assets/liked-songs.jpg" />
      <MixCard title="Daily Mix 1" imageSrc="/assets/daily-mix-1.jpg" />
      <MixCard title="Daily Mix 2" imageSrc="/assets/daily-mix-2.jpg" />
      <MixCard title="Daily Mix 3" imageSrc="/assets/daily-mix-3.jpg" />
      <MixCard title="Daily Mix 4" imageSrc="/assets/daily-mix-4.jpg" />
      <MixCard title="Daily Mix 5" imageSrc="/assets/daily-mix-5.jpg" />
    </div>

    <div className="flex justify-between mt-10">
      <h2 className="font-semibold text-2xl">Made for Gabriel Bueno</h2>
      <a href="#" className="text-zinc-400 font-medium hover:text-zinc-100">
        Show all
      </a>
    </div>

    <div className="grid grid-cols-5 gap-4 mt-4">
      <PlaylistCard
        title="Daily Mix 1"
        artists="Gucci Mane, Future, Drake and more"
        imageSrc="/assets/daily-mix-1.jpg"
      />
      <PlaylistCard
        title="Daily Mix 2"
        artists="Kygo, The Weeknd, Galantis and more"
        imageSrc="/assets/daily-mix-2.jpg"
      />
      <PlaylistCard
        title="Daily Mix 3"
        artists="Henrique & Juliano, The Chainsmokers, Tiësto and more"
        imageSrc="/assets/daily-mix-3.jpg"
      />
      <PlaylistCard
        title="Daily Mix 4"
        artists="Ed Sheeran, Sam Smith, Fifth Harmony and more"
        imageSrc="/assets/daily-mix-4.jpg"
      />
      <PlaylistCard
        title="Daily Mix 5"
        artists="Pitbull, Bruno Mars, Calvin Harris and more"
        imageSrc="/assets/daily-mix-5.jpg"
      />
    </div>
  </div>
);

export default Content;
