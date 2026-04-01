import Image from "next/image"
import Link from "next/link"
import { Shield, Users } from "lucide-react"

import { DASHBOARD_ROUTES } from "@shared/const"

const BRAND = "Pizza Next"
const STORE_NAME = "Magazin central"

const TEAM = {
    members: 21,
    admins: 2,
    moderators: 3,
} as const

export const SidebarHeader = () => {
    return (
        <header className="w-full overflow-hidden rounded-t-2xl bg-white">
            <div className="relative w-full bg-gradient-to-br from-[#FE5F00] via-[#ff7a33] to-amber-500 px-5 pb-6 pt-5">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.35) 0%, transparent 45%)",
                    }}
                />
                <p className="relative mb-3.5 text-[10px] font-semibold uppercase leading-none tracking-[0.14em] text-white/90">
                    Panou administrare
                </p>

                <div className="relative flex items-center gap-3.5">
                    <Link
                        href={DASHBOARD_ROUTES.HOME}
                        aria-label={`${BRAND} — acasă dashboard`}
                        className="flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_6px_20px_-4px_rgba(0,0,0,0.22)] ring-[2px] ring-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Image
                            src="/logo-pizza.png"
                            alt=""
                            width={38}
                            height={38}
                            className="object-contain"
                        />
                    </Link>

                    <div className="min-w-0 flex-1 py-0.5">
                        <h1 className="text-[1.3125rem] font-black leading-[1.15] tracking-tight text-white drop-shadow-sm">
                            {BRAND}
                        </h1>
                        <p className="mt-1 text-base font-medium leading-snug tracking-tight text-white/90">
                            {STORE_NAME}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full px-5 pb-5 pt-4">
                <div className="flex flex-wrap gap-x-2 gap-y-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-2 text-[11px] font-medium leading-none text-gray-700">
                        <Users size={14} className="shrink-0 text-[#FE5F00]" strokeWidth={2} />
                        {TEAM.members} membri
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#FE5F00]/10 px-3 py-2 text-[11px] font-semibold leading-none text-[#FE5F00]">
                        <Shield size={14} strokeWidth={2} />
                        {TEAM.admins} admini
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-[11px] font-medium leading-none text-gray-700">
                        {TEAM.moderators} moderatori
                    </span>
                </div>
            </div>
        </header>
    )
}
