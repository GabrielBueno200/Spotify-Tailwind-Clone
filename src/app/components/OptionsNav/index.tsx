import { Home, Search } from "lucide-react"
import NavItem from "../NavItem"

const OptionsNav = () =>
  <nav className="space-y-5  bg-zinc-900 p-4">
    <NavItem Icon={Home} title="Home" />
    <NavItem Icon={Search} title="Search" />
  </nav>

export default OptionsNav
