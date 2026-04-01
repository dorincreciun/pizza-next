import { Button, InputControl, InputField, InputRoot, InputSlot } from "@shared/ui"
import { Bell, Mail, Search } from "lucide-react"

import { DashboardBreadcrumbs } from "./dashboard-breadcrumbs"

export const Header = () => {
    return (
        <header className="sticky top-4 z-20 rounded-2xl border border-gray-100 bg-white px-5 py-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-max">
                    <div className="text-3xl font-semibold">Hello Dorin</div>
                    <div className="text-sm text-gray-500">administrator</div>
                </div>

                <div className="flex w-full items-center gap-4 lg:w-auto lg:justify-end">
                    <InputRoot className="w-full lg:w-auto lg:max-w-112.5">
                        <InputControl variant="secondary">
                            <InputSlot>
                                <Search />
                            </InputSlot>
                            <InputField name="search" placeholder="Search..." />
                        </InputControl>
                    </InputRoot>

                    <div className="flex items-center gap-2">
                        <Button onlyIcon kind="outline">
                            <Bell />
                        </Button>
                        <Button onlyIcon kind="outline">
                            <Mail />
                        </Button>
                    </div>
                </div>
            </div>

            <DashboardBreadcrumbs />
        </header>
    )
}
