"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@shared/utils/cn"
import { ReactNode } from "react"

interface SidebarItemProps {
    href: string
    label: string
    icon: ReactNode
}

export const SidebarItem = ({ href, label, icon }: SidebarItemProps) => {
    const pathname = usePathname()
    const isDashboardHome = href === "/dashboard"

    const isActive = isDashboardHome ? pathname === href : pathname?.startsWith(href)

    return (
        <Link
            href={href}
            className={cn(
                "mx-2 flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                isActive
                    ? "bg-[#FE5F00]/10 text-[#FE5F00]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            )}
        >
            {icon}
            <span>{label}</span>
        </Link>
    )
}
