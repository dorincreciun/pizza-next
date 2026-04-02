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
import { Button } from "@shared/ui"
import Image from "next/image"

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
                <Button>
                    <Plus /> Product
                </Button>
            </div>
        </div>
    )
}

export default function ProductsPage() {
    return (
        <div className="flex flex-col gap-8">
            <Header />

            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-200 table-auto border-collapse">
                        <thead className="bg-gray-50/50">
                            <tr className="border-b border-gray-100">
                                <th className="w-12 px-3 py-3 text-center text-xs font-medium text-gray-500">
                                    <FileImage size={15} className="mx-auto text-gray-400" />
                                </th>
                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                                        <SpellCheck2 size={13} className="text-gray-400" />
                                        Nume
                                    </div>
                                </th>
                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                                        <ScanBarcode size={13} className="text-gray-400" />
                                        Cod produs
                                    </div>
                                </th>
                                <th className="px-3 py-3 text-right text-xs font-medium text-gray-500">
                                    <div className="flex items-center justify-end gap-1.5 whitespace-nowrap">
                                        <DollarSign size={13} className="text-gray-400" />
                                        Preț
                                    </div>
                                </th>
                                <th className="px-3 py-3 text-right text-xs font-medium text-gray-500">
                                    <div className="flex items-center justify-end gap-1.5 whitespace-nowrap">
                                        <BatteryMedium size={13} className="text-gray-400" />
                                        Stoc
                                    </div>
                                </th>
                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                                        <ChartColumnStacked size={13} className="text-gray-400" />
                                        Categorie
                                    </div>
                                </th>
                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                                        <ToggleRight size={13} className="text-gray-400" />
                                        Status
                                    </div>
                                </th>
                                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
                                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                                        <CalendarDays size={13} className="text-gray-400" />
                                        Timestamp
                                    </div>
                                </th>
                                <th className="w-8 px-3 py-3 text-center">
                                    <Settings
                                        size={15}
                                        className="ml-auto cursor-pointer text-gray-400 transition-colors hover:text-gray-500"
                                    />
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                {/* Imagine — mai mică, mai compactă */}
                                <td className="px-3 py-2 align-middle">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FE5F00]/10">
                                        <Image
                                            src="/logo-pizza.png"
                                            alt=""
                                            width={36}
                                            height={36}
                                            className="h-9 w-9 object-contain"
                                        />
                                    </div>
                                </td>

                                {/* Nume */}
                                <td className="px-3 py-2 align-middle">
                                    <div className="text-sm font-medium text-gray-900">
                                        Frigider Whirlpool WHSD18A013C1 fără congelator
                                    </div>
                                    <div className="mt-0.5 text-xs text-gray-500">
                                        306 l / 177 cm / White
                                    </div>
                                    <div className="mt-1 flex items-center gap-1 text-[10px] text-gray-400">
                                        <Forward size={11} />
                                        <span className="max-w-[200px] truncate">
                                            /electrocasnice-mari/frigidere/whirlpool-whsd18a013c1-cu-1-camera-white
                                        </span>
                                    </div>
                                </td>

                                {/* Cod produs */}
                                <td className="px-3 py-2 align-middle">
                                    <div className="flex items-center gap-1 text-sm text-gray-600">
                                        <Hash size={13} className="text-gray-400" />
                                        465195
                                    </div>
                                </td>

                                {/* Preț */}
                                <td className="px-3 py-2 text-right align-middle text-sm font-semibold text-gray-900">
                                    1 000 MDL
                                </td>

                                {/* Stoc */}
                                <td className="px-3 py-2 text-right align-middle text-sm text-gray-600">
                                    0 / 0
                                </td>

                                {/* Categorie */}
                                <td className="px-3 py-2 align-middle text-sm text-gray-600">
                                    Frigidere
                                </td>

                                {/* Status */}
                                <td className="px-3 py-2 align-middle">
                                    <span className="inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                                        inactiv
                                    </span>
                                </td>

                                {/* Timestamp */}
                                <td className="px-3 py-2 align-middle">
                                    <div className="flex flex-col gap-1 text-xs text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <CalendarArrowDown size={11} />
                                            <span>02.04.2026</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <CalendarArrowUp size={11} />
                                            <span>02.04.2026</span>
                                        </div>
                                    </div>
                                </td>

                                {/* Acțiuni — orizontal, nu vertical */}
                                <td className="px-3 py-2 text-right align-middle">
                                    <div className="flex flex-col items-center justify-center">
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
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
