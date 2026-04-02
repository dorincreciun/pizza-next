import {
    ChartBarStacked,
    ChevronRight,
    ClipboardList,
    LayoutDashboard,
    Package,
    Settings,
    Soup,
} from "lucide-react"
import Link from "next/link"
import { PropsWithChildren } from "react"
import { cn } from "@shared/utils/cn"
import { DASHBOARD_ROUTES } from "@shared/const"
import { SidebarLogo } from "./sidebar-logo"
import { SidebarMembers } from "./sidebar-members"
import { SidebarItem } from "./sidebar-item"

const menuGroups = [
    {
        group: "General",
        items: [
            { label: "Dashboard", to: DASHBOARD_ROUTES.HOME, icon: <LayoutDashboard /> },
            { label: "Comenzi", to: DASHBOARD_ROUTES.ORDERS, icon: <ClipboardList /> },
        ],
    },
    {
        group: "Gestiune Catalog",
        items: [
            { label: "Produse", to: DASHBOARD_ROUTES.PRODUCTS, icon: <Package /> },
            { label: "Categorii", to: DASHBOARD_ROUTES.CATEGORIES, icon: <ChartBarStacked /> },
            { label: "Ingrediente", to: DASHBOARD_ROUTES.INGREDIENTS, icon: <Soup /> },
        ],
    },
    {
        group: "Administrare",
        items: [{ label: "Setari", to: DASHBOARD_ROUTES.SETTINGS, icon: <Settings /> }],
    },
]

const SidebarLayout = ({ children }: PropsWithChildren) => {
    return (
        <aside className="h-screen w-full max-w-87">
            <div className="flex h-full flex-col overflow-hidden border border-gray-100 bg-white">
                {children}
            </div>
        </aside>
    )
}

const SidebarDivider = ({ className }: { className?: string }) => {
    return <div className={cn("border-b border-gray-100", className)} />
}

const SidebarFooter = ({ children }: PropsWithChildren) => {
    return <footer className="pb-4">{children}</footer>
}

const SidebarHeader = ({ children }: PropsWithChildren) => {
    return <header className="w-full overflow-hidden rounded-t-2xl bg-white">{children}</header>
}

const SidebarContent = ({ children }: PropsWithChildren) => {
    return <div className="flex-1 overflow-auto">{children}</div>
}

const SidebarGroup = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
    <div className={cn("space-y-1 py-3", className)}>{children}</div>
)

const SidebarGroupLabel = ({ children }: PropsWithChildren) => (
    <div className="mx-2 px-4 pb-1 text-[11px] font-semibold tracking-wide text-gray-400 uppercase">
        {children}
    </div>
)

export const Sidebar = () => {
    return (
        <SidebarLayout>
            <SidebarHeader>
                <SidebarLogo />
                <SidebarDivider />
                <SidebarMembers />
            </SidebarHeader>
            <SidebarDivider />

            <SidebarContent>
                {menuGroups.map((group) => (
                    <SidebarGroup key={group.group}>
                        <SidebarGroupLabel>{group.group}</SidebarGroupLabel>
                        <div className="space-y-0.5">
                            {group.items.map((item) => (
                                <SidebarItem
                                    key={item.to}
                                    href={item.to}
                                    label={item.label}
                                    icon={item.icon}
                                />
                            ))}
                        </div>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarDivider className="mb-3" />
            <SidebarFooter>
                <div className="mx-2 mb-3 flex items-center gap-3 rounded-xl border border-gray-100 px-3 py-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FE5F00]/10 text-sm font-semibold text-[#FE5F00]">
                        D
                    </div>
                    <div className="min-w-0">
                        <div className="truncate text-sm font-semibold text-gray-900">
                            Dorin Admin
                        </div>
                        <div className="truncate text-xs text-gray-500">Administrator</div>
                    </div>
                </div>
                <div className="mx-2 rounded-xl bg-gray-50 p-3">
                    <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                        Stare sistem
                    </div>
                    <div className="mt-1 flex items-center justify-between gap-2">
                        <div>
                            <div className="text-sm font-semibold text-gray-900">
                                Restaurant online
                            </div>
                            <div className="text-xs text-gray-500">
                                Ultima sincronizare: acum 2 min
                            </div>
                        </div>
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <Link
                        href="/dashboard/settings"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#FE5F00] transition-opacity hover:opacity-80"
                    >
                        Vezi setarile
                        <ChevronRight size={14} />
                    </Link>
                </div>
            </SidebarFooter>
        </SidebarLayout>
    )
}
