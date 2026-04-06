import {
    CalendarArrowDown,
    CalendarDays,
    Eye,
    Mail,
    Phone,
    Settings,
    Shield,
    ToggleRight,
    Trash,
    User,
} from "lucide-react"
import { Button, Card, Table } from "@shared/ui"

const MOCK_USERS = [
    {
        id: "1",
        name: "Ana Popescu",
        email: "ana.popescu@email.com",
        phone: "+373 69 123 456",
        role: "Client",
        status: "activ",
        registeredAt: "15.03.2026",
        initials: "AP",
    },
    {
        id: "2",
        name: "Ion Rusu",
        email: "ion.rusu@email.com",
        phone: "+373 78 987 654",
        role: "Client",
        status: "activ",
        registeredAt: "28.02.2026",
        initials: "IR",
    },
    {
        id: "3",
        name: "Maria Ciobanu",
        email: "maria.c@email.com",
        phone: "—",
        role: "Client",
        status: "inactiv",
        registeredAt: "02.01.2026",
        initials: "MC",
    },
]

const Header = () => {
    return (
        <div className="flex justify-between gap-4 px-4">
            <div>
                <div className="text-xs font-bold tracking-wider text-gray-400 uppercase">Site</div>
                <div className="mt-1 flex items-center gap-3">
                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
                        Utilizatori
                    </h1>
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-gray-100 px-2 text-[11px] font-bold text-gray-500">
                        {MOCK_USERS.length}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button kind="outline" color="secondary">
                    Filtrează
                </Button>
            </div>
        </div>
    )
}

export default function UsersPage() {
    return (
        <div className="flex flex-col gap-8">
            <Header />

            <Card>
                <Table.Container>
                    <Table.Root>
                        <Table.Head>
                            <Table.Row className="border-b border-gray-100">
                                <Table.HeadCell className="w-[4.5rem] py-3.5 pr-4 pl-5 text-center">
                                    <User size={15} className="mx-auto text-gray-400" />
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                        <User size={13} className="shrink-0 text-gray-400" />
                                        Nume
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                        <Mail size={13} className="shrink-0 text-gray-400" />
                                        Email
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                        <Phone size={13} className="shrink-0 text-gray-400" />
                                        Telefon
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                        <Shield size={13} className="shrink-0 text-gray-400" />
                                        Rol
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                        <ToggleRight size={13} className="shrink-0 text-gray-400" />
                                        Status
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                        <CalendarDays
                                            size={13}
                                            className="shrink-0 text-gray-400"
                                        />
                                        Înregistrat
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell className="w-14 py-3.5 pr-5 pl-4 text-center">
                                    <Settings
                                        size={15}
                                        className="mx-auto cursor-pointer text-gray-400 transition-colors hover:text-gray-500"
                                    />
                                </Table.HeadCell>
                            </Table.Row>
                        </Table.Head>

                        <Table.Body>
                            {MOCK_USERS.map((u) => (
                                <Table.Row key={u.id} className="hover:bg-gray-50/70">
                                    <Table.Cell className="py-4 pr-4 pl-5">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FE5F00]/10 text-sm font-semibold text-[#FE5F00]">
                                            {u.initials}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="text-sm font-medium text-gray-900">
                                            {u.name}
                                        </div>
                                        <div className="mt-0.5 text-xs text-gray-500">
                                            ID #{u.id.padStart(4, "0")}
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                            <Mail size={13} className="shrink-0 text-gray-400" />
                                            <span className="truncate">{u.email}</span>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                            <Phone size={13} className="shrink-0 text-gray-400" />
                                            <span className="tabular-nums">{u.phone}</span>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell className="text-sm text-gray-600">
                                        {u.role}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <span
                                            className={
                                                u.status === "activ"
                                                    ? "inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                                                    : "inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                                            }
                                        >
                                            {u.status}
                                        </span>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                            <CalendarArrowDown
                                                size={11}
                                                className="shrink-0 text-gray-400"
                                            />
                                            <span className="tabular-nums">{u.registeredAt}</span>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell className="py-4 pr-5 pl-4 text-right">
                                        <div className="flex flex-col items-end justify-center">
                                            <Button
                                                onlyIcon
                                                kind="ghost"
                                                color="secondary"
                                                size="xs"
                                            >
                                                <Eye size={16} />
                                            </Button>
                                            <Button
                                                onlyIcon
                                                kind="ghost"
                                                color="secondary"
                                                size="xs"
                                            >
                                                <Settings size={16} />
                                            </Button>
                                            <Button
                                                onlyIcon
                                                kind="ghost"
                                                color="secondary"
                                                size="xs"
                                            >
                                                <Trash size={16} />
                                            </Button>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Table.Container>
            </Card>
        </div>
    )
}
