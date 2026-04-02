import {
    BatteryMedium,
    CalendarArrowDown,
    CalendarArrowUp,
    CalendarDays,
    ChartColumnStacked,
    DollarSign,
    Eye,
    FileImage,
    Forward,
    Hash,
    Plus,
    ScanBarcode,
    Settings,
    SpellCheck2,
    ToggleRight,
    Trash,
} from "lucide-react"
import { Button, Card, Table } from "@shared/ui"
import Image from "next/image"
import Link from "next/link"
import { DASHBOARD_ROUTES } from "@shared/const"

const Header = () => {
    return (
        <div className="flex justify-between gap-4 px-4">
            <div>
                <div className="text-xs font-bold tracking-wider text-gray-400 uppercase">
                    Catalog
                </div>
                <div className="mt-1 flex items-center gap-3">
                    <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Produse</h1>
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-gray-100 px-2 text-[11px] font-bold text-gray-500">
                        128
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button kind="outline" color="secondary">
                    Filtrează
                </Button>
                <Button asChild>
                    <Link href={DASHBOARD_ROUTES.PRODUCTS_ADD}>
                        <Plus /> Product
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default function ProductsPage() {
    return (
        <div className="flex flex-col gap-8">
            <Header />

            <Card>
                <Table.Container>
                    <Table.Root>
                        <Table.Head>
                            <Table.Row className="border-b border-gray-100">
                                <Table.HeadCell className="w-[4.5rem] py-3.5 pr-4 pl-5 text-center">
                                    <FileImage size={15} className="mx-auto text-gray-400" />
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                        <SpellCheck2 size={13} className="shrink-0 text-gray-400" />
                                        Nume
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                        <ScanBarcode size={13} className="shrink-0 text-gray-400" />
                                        Cod produs
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell className="text-right">
                                    <div className="flex items-center justify-end gap-2 whitespace-nowrap">
                                        <DollarSign size={13} className="shrink-0 text-gray-400" />
                                        Preț
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell className="text-right">
                                    <div className="flex items-center justify-end gap-2 whitespace-nowrap">
                                        <BatteryMedium
                                            size={13}
                                            className="shrink-0 text-gray-400"
                                        />
                                        Stoc
                                    </div>
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    <div className="flex items-center gap-2 whitespace-nowrap">
                                        <ChartColumnStacked
                                            size={13}
                                            className="shrink-0 text-gray-400"
                                        />
                                        Categorie
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
                                        Timestamp
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
                            <Table.Row className="hover:bg-gray-50/70">
                                {/* Imagine — mai mică, mai compactă */}
                                <Table.Cell className="py-4 pr-4 pl-5">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FE5F00]/10">
                                        <Image
                                            src="/logo-pizza.png"
                                            alt=""
                                            width={36}
                                            height={36}
                                            className="h-9 w-9 object-contain"
                                        />
                                    </div>
                                </Table.Cell>

                                {/* Nume */}
                                <Table.Cell>
                                    <div className="space-y-1">
                                        <div className="text-sm leading-snug font-medium text-gray-900">
                                            Frigider Whirlpool WHSD18A013C1 fără congelator
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            306 l / 177 cm / White
                                        </div>
                                        <div className="flex items-start gap-1.5 pt-0.5 text-[10px] leading-relaxed text-gray-400">
                                            <Forward
                                                size={11}
                                                className="mt-0.5 shrink-0 opacity-80"
                                            />
                                            <span className="max-w-[220px] truncate">
                                                /electrocasnice-mari/frigidere/whirlpool-whsd18a013c1-cu-1-camera-white
                                            </span>
                                        </div>
                                    </div>
                                </Table.Cell>

                                {/* Cod produs */}
                                <Table.Cell>
                                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                        <Hash size={13} className="shrink-0 text-gray-400" />
                                        <span className="tabular-nums">465195</span>
                                    </div>
                                </Table.Cell>

                                {/* Preț */}
                                <Table.Cell className="text-right text-sm font-semibold text-gray-900 tabular-nums">
                                    1 000 MDL
                                </Table.Cell>

                                {/* Stoc */}
                                <Table.Cell className="text-right text-sm text-gray-600 tabular-nums">
                                    0 / 0
                                </Table.Cell>

                                {/* Categorie */}
                                <Table.Cell className="text-sm text-gray-600">
                                    Frigidere
                                </Table.Cell>

                                {/* Status */}
                                <Table.Cell>
                                    <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                                        inactiv
                                    </span>
                                </Table.Cell>

                                {/* Timestamp */}
                                <Table.Cell>
                                    <div className="flex flex-col gap-2 text-xs text-gray-500">
                                        <div className="flex items-center gap-1.5 whitespace-nowrap">
                                            <CalendarArrowDown
                                                size={11}
                                                className="shrink-0 text-gray-400"
                                            />
                                            <span className="tabular-nums">02.04.2026</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 whitespace-nowrap">
                                            <CalendarArrowUp
                                                size={11}
                                                className="shrink-0 text-gray-400"
                                            />
                                            <span className="tabular-nums">02.04.2026</span>
                                        </div>
                                    </div>
                                </Table.Cell>

                                {/* Acțiuni */}
                                <Table.Cell className="py-4 pr-5 pl-4 text-right">
                                    <div className="flex flex-col items-end justify-center gap-1.5">
                                        <Button onlyIcon kind="ghost" color="secondary" size="xs">
                                            <Eye size={16} />
                                        </Button>
                                        <Button onlyIcon kind="ghost" color="secondary" size="xs">
                                            <Settings size={16} />
                                        </Button>
                                        <Button onlyIcon kind="ghost" color="secondary" size="xs">
                                            <Trash size={16} />
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </Table.Container>
            </Card>
        </div>
    )
}
