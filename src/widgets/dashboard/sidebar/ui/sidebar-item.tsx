"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ReactNode } from "react"
import { cn } from "@shared/utils/cn"

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
                "relative flex items-center gap-3 px-4 py-3 transition-all duration-200",
                isActive
                    ? "bg-[#FE5F00]/10 after:absolute after:top-0 after:bottom-0 after:left-0 after:block after:h-full after:w-0.5 after:bg-[#FE5F00] [&>svg]:text-[#FE5F00]"
                    : "opacity-70 hover:bg-gray-50 hover:opacity-100 [&>svg]:text-black",
            )}
        >
            {icon}
            <span
                className={cn(
                    "font-nunito text-sm",
                    isActive ? "font-semibold text-[#FE5F00]" : "font-medium text-black",
                )}
            >
                {label}
            </span>
        </Link>
    )
}
