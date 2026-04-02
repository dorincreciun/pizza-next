import { Shield, Users } from "lucide-react"

const TEAM = {
    members: 21,
    admins: 2,
    moderators: 3,
} as const

export const SidebarMembers = () => {
    return (
        <div className="w-full px-5 py-3">
            <div className="flex flex-wrap gap-x-2 gap-y-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-2 text-[11px] leading-none font-medium text-gray-700">
                    <Users size={14} className="shrink-0 text-[#FE5F00]" strokeWidth={2} />
                    {TEAM.members} membri
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#FE5F00]/10 px-3 py-2 text-[11px] leading-none font-semibold text-[#FE5F00]">
                    <Shield size={14} strokeWidth={2} />
                    {TEAM.admins} admini
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-[11px] leading-none font-medium text-gray-700">
                    {TEAM.moderators} moderatori
                </span>
            </div>
        </div>
    )
}
