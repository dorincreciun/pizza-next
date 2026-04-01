"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

import { DASHBOARD_ROUTES } from "@shared/const"

const LABELS: Record<string, string> = {
    [DASHBOARD_ROUTES.HOME]: "Dashboard",
    [DASHBOARD_ROUTES.ORDERS]: "Comenzi",
    [DASHBOARD_ROUTES.PRODUCTS]: "Produse",
    [DASHBOARD_ROUTES.SETTINGS]: "Setări",
    [DASHBOARD_ROUTES.CATEGORIES]: "Categorii",
    [DASHBOARD_ROUTES.INGREDIENTS]: "Ingrediente",
}

function buildCrumbs(pathname: string) {
    if (!pathname.startsWith("/dashboard")) {
        return []
    }

    const parts = pathname.split("/").filter(Boolean)
    if (parts[0] !== "dashboard") {
        return []
    }

    const crumbs: { href: string; label: string }[] = []
    let acc = ""
    for (const part of parts) {
        acc += `/${part}`
        const label = LABELS[acc] ?? part.slice(0, 1).toUpperCase() + part.slice(1)
        crumbs.push({ href: acc, label })
    }

    return crumbs
}

export const DashboardBreadcrumbs = () => {
    const pathname = usePathname()
    const crumbs = buildCrumbs(pathname)

    if (crumbs.length === 0) {
        return null
    }

    return (
        <nav aria-label="Breadcrumb" className="mt-4 border-t border-gray-100 pt-3">
            <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-[11px] leading-none">
                {crumbs.map((crumb, i) => {
                    const isLast = i === crumbs.length - 1
                    return (
                        <li key={crumb.href} className="flex items-center gap-1">
                            {i > 0 && (
                                <ChevronRight
                                    className="shrink-0 text-gray-300"
                                    size={12}
                                    strokeWidth={2}
                                    aria-hidden
                                />
                            )}
                            {isLast ? (
                                <span className="font-semibold text-gray-800">{crumb.label}</span>
                            ) : (
                                <Link
                                    href={crumb.href}
                                    className="font-medium text-gray-500 transition-colors hover:text-[#FE5F00]"
                                >
                                    {crumb.label}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
