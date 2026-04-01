import { ClipboardList, LayoutDashboard, type LucideIcon, Package, Settings } from "lucide-react"
import Link from "next/link"

interface NavLinkProps {
    href: string
    label: string
    icon: LucideIcon
    isActive: boolean
}

const menuItems = [
    { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
    { label: "Comenzi", to: "/orders", icon: ClipboardList },
    { label: "Produse", to: "/catalog", icon: Package },
    { label: "Setari", to: "/dashboard/settings", icon: Settings },
]

const NavLink = ({ href, label, icon: Icon, isActive }: NavLinkProps) => {
    return (
        <Link
            href={href}
            className={`relative flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                isActive
                    ? "bg-[#FE5F00]/10 after:absolute after:top-0 after:bottom-0 after:left-0 after:block after:h-full after:w-0.5 after:bg-[#FE5F00]"
                    : "opacity-70 hover:bg-gray-50 hover:opacity-100"
            }`}
        >
            <Icon size={18} className={isActive ? "text-[#FE5F00]" : "text-black"} />
            <span
                className={`font-nunito text-sm ${
                    isActive ? "font-semibold text-[#FE5F00]" : "font-medium text-black"
                }`}
            >
                {label}
            </span>
        </Link>
    )
}

export const Sidebar = () => {
    return (
        <aside className="h-[calc(100vh-32px)] w-full max-w-87">
            <div className="h-full rounded-2xl bg-white">
                <nav className="">
                    {menuItems.map((item) => (
                        <NavLink
                            href={item.to}
                            key={item.to}
                            {...item}
                            isActive={"/dashboard" === item.to}
                        />
                    ))}
                </nav>
            </div>
        </aside>
    )
}
