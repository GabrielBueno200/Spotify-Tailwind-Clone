import LibraryNav from "../LibraryNav";
import OptionsNav from "../OptionsNav";

const Sidebar = () => (
  <aside className="hidden w-96 bg-zinc-950 p-2 md:flex flex-col gap-3">
    <OptionsNav />
    <LibraryNav />
  </aside>
);

export default Sidebar;
