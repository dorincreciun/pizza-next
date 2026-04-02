import Link from "next/link"
import Image from "next/image"
import { DASHBOARD_ROUTES } from "@shared/const"

export const SidebarLogo = () => {
    return (
        <Link
            href={DASHBOARD_ROUTES.HOME}
            aria-label="Pizza Next — acasă dashboard"
            className="group flex items-center gap-3 rounded-xl px-5 pt-5 pb-4"
        >
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                <Image
                    src="/logo-pizza.png"
                    alt=""
                    width={38}
                    height={38}
                    className="object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                />
                <span
                    className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500 shadow-sm ring-1 ring-gray-100"
                    aria-hidden
                />
            </div>

            <div className="min-w-0 flex-1 py-0.5">
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                    <span className="font-nunito text-[1.0625rem] leading-tight font-bold tracking-tight text-gray-900">
                        Pizza Next
                    </span>
                    <span className="rounded-full bg-[#FE5F00]/10 px-1.5 py-0.5 text-[0.625rem] font-semibold tracking-wide text-[#FE5F00] uppercase">
                        PRO
                    </span>
                </div>
                <p className="mt-0.5 text-sm leading-snug text-gray-500">Magazin central</p>
            </div>
        </Link>
    )
}
