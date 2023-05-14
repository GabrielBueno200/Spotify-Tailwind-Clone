import OptionsNav from "../OptionsNav";
import LibraryNav from "../LibraryNav";

const Sidebar = () =>
    <aside className="w-96 bg-zinc-950 p-2 pb-0 flex flex-col gap-3">
        <OptionsNav />
        <LibraryNav />
    </aside>

export default Sidebar