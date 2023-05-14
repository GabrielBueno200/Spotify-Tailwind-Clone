import { LucideIcon } from "lucide-react"

interface INavItemProps {
    Icon: LucideIcon,
    title: string
}

const NavItem = ({ Icon, title }: INavItemProps) =>
    <a href="#" className='flex items-center gap-4
        text-lg font-semibold text-zinc-400 hover:text-zinc-100'>
        <Icon /> {title}
    </a>

export default NavItem
