import Link from "next/link"
import Image from "next/image"
import { Users } from "lucide-react"

import { DASHBOARD_ROUTES } from "@shared/const"

const STORE_NAME = "Pizza Next Store"
const MEMBERS_TOTAL = 21
const ADMINS = 2
const MODERATORS = 3

export const SidebarHeader = () => {
    return (
        <Link
            href={DASHBOARD_ROUTES.HOME}
            aria-label="Mergi la dashboard"
            className="-mx-1 flex gap-3 rounded-lg px-1 py-0.5 transition-colors hover:bg-gray-50"
        >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50">
                <Image src="/logo-pizza.png" alt="Logo Pizza Next" width={32} height={32} />
            </div>
            <div className="min-w-0 flex-1">
                <p className="truncate text-[15px] font-semibold leading-snug text-gray-900">{STORE_NAME}</p>
                <p className="mt-1 flex items-center gap-1.5 text-[13px] text-gray-500">
                    <Users className="shrink-0" size={14} strokeWidth={2} />
                    {MEMBERS_TOTAL} membri
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-gray-500">
                    <span className="text-gray-700">{ADMINS}</span> admini
                    <span className="mx-1.5 text-gray-300">·</span>
                    <span className="text-gray-700">{MODERATORS}</span> moderatori
                </p>
            </div>
        </Link>
    )
}
