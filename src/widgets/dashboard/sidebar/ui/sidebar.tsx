import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { SidebarMenu } from "./sidebar-menu"
import { SidebarHeader } from "./sidebar-header"

export const Sidebar = () => {
    return (
        <aside className="sticky top-4 h-[calc(100vh-32px)] w-full max-w-87 self-start">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white">
                <div className="border-b border-gray-100">
                    <SidebarHeader />
                </div>

                <SidebarMenu />

                <div className="border-t border-gray-100 px-5 py-4">
                    <div className="mb-3 flex items-center gap-3 rounded-xl border border-gray-100 px-3 py-2">
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
                    <div className="rounded-xl bg-gray-50 p-3">
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
                    <div className="mt-3 flex items-center justify-between">
                        <Link
                            href="/orders"
                            className="text-xs font-medium text-gray-600 transition-colors hover:text-gray-900"
                        >
                            Vezi comenzi
                        </Link>
                        <Link
                            href="/catalog"
                            className="text-xs font-medium text-gray-600 transition-colors hover:text-gray-900"
                        >
                            Gestioneaza produse
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    )
}
