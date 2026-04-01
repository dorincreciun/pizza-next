"use client"

import {
    ChartBarStacked,
    ClipboardList,
    LayoutDashboard,
    type LucideIcon,
    Package,
    Settings,
    Soup,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DASHBOARD_ROUTES } from "@shared/const"

const menuGroups = [
    {
        group: "General",
        items: [
            { label: "Dashboard", to: DASHBOARD_ROUTES.HOME, icon: LayoutDashboard },
            { label: "Comenzi", to: DASHBOARD_ROUTES.ORDERS, icon: ClipboardList },
        ],
    },
    {
        group: "Gestiune Catalog",
        items: [
            { label: "Produse", to: DASHBOARD_ROUTES.PRODUCTS, icon: Package },
            { label: "Categorii", to: DASHBOARD_ROUTES.CATEGORIES, icon: ChartBarStacked },
            { label: "Ingrediente", to: DASHBOARD_ROUTES.INGREDIENTS, icon: Soup },
        ],
    },
    {
        group: "Administrare",
        items: [{ label: "Setari", to: DASHBOARD_ROUTES.SETTINGS, icon: Settings }],
    },
]

interface NavLinkProps {
    href: string
    label: string
    icon: LucideIcon
    isActive: boolean
}

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
export const SidebarMenu = () => {
    const pathname = usePathname()

    const isRouteActive = (href: string) => {
        if (href === DASHBOARD_ROUTES.HOME) {
            return pathname === DASHBOARD_ROUTES.HOME
        }
        return !!pathname?.startsWith(href)
    }

    return (
        <nav className="flex-1 space-y-4 py-3">
            {menuGroups.map((menuGroup) => (
                <div key={menuGroup.group}>
                    <div className="px-4 pb-1 text-[11px] font-semibold tracking-wide text-gray-400 uppercase">
                        {menuGroup.group}
                    </div>
                    <div>
                        {menuGroup.items.map((item) => (
                            <NavLink
                                href={item.to}
                                key={item.to}
                                {...item}
                                isActive={isRouteActive(item.to)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </nav>
    )
}
