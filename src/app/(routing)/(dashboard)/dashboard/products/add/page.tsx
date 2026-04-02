"use client"

import { useState } from "react"
import { Check, ImagePlus, Languages, LayoutGrid, PackagePlus, Plus } from "lucide-react"
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    InputControl,
    InputField,
    InputLabel,
    InputRoot,
} from "@shared/ui"

type TabKey = "general" | "translations" | "images"
type LocaleKey = "ro" | "en" | "ru"

const TABS: Array<{ key: TabKey; label: string; icon: React.ComponentType<{ size?: number }> }> = [
    { key: "general", label: "General", icon: LayoutGrid },
    { key: "translations", label: "Traduceri", icon: Languages },
    { key: "images", label: "Imagini", icon: ImagePlus },
]

const categories = [
    { id: "pizza", label: "Pizza" },
    { id: "burger", label: "Burger" },
    { id: "desert", label: "Desert" },
    { id: "bauturi", label: "Bauturi" },
]

const ingredients = ["Mozzarella", "Sos de rosii", "Busuioc", "Pepperoni", "Ciuperci", "Parmezan"]

const localeConfig: Array<{ key: LocaleKey; label: string }> = [
    { key: "ro", label: "Romana (RO)" },
    { key: "en", label: "Engleza (EN)" },
    { key: "ru", label: "Rusa (RU)" },
]

export default function AddProductPage() {
    const [activeTab, setActiveTab] = useState<TabKey>("general")

    return (
        <section className="w-full pb-8">
            <div className="flex flex-col gap-6">
                <header>
                    <Card spacing="lg" className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FE5F00]/10 text-[#FE5F00]">
                                <PackagePlus size={18} />
                            </span>
                            <div>
                                <h1 className="text-xl font-semibold text-gray-900">
                                    Adaugare produs
                                </h1>
                                <p className="text-sm text-gray-500">
                                    UI demo cu date fake. Nu include functionalitate.
                                </p>
                            </div>
                        </div>

                        <div className="inline-flex w-full flex-wrap gap-2 rounded-xl bg-gray-50/80 p-1">
                            {TABS.map((tab) => {
                                const Icon = tab.icon
                                const isActive = activeTab === tab.key

                                return (
                                    <button
                                        key={tab.key}
                                        type="button"
                                        onClick={() => setActiveTab(tab.key)}
                                        className={[
                                        "relative inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200",
                                            isActive
                                            ? "bg-[#FE5F00]/10 text-[#FE5F00] after:absolute after:right-2 after:bottom-0 after:left-2 after:h-0.5 after:rounded-full after:bg-[#FE5F00]"
                                            : "text-gray-500 hover:bg-gray-100 hover:text-gray-800",
                                        ].join(" ")}
                                    >
                                        <Icon size={15} />
                                        {tab.label}
                                    </button>
                                )
                            })}
                        </div>
                    </Card>
                </header>

                {activeTab === "general" && (
                    <Card>
                        <CardHeader className="bg-gradient-to-r from-[#FE5F00]/8 to-white">
                            <CardTitle>Configurare generala produs</CardTitle>
                            <CardDescription>
                                Sectiuni demonstrative pentru categorii, ingrediente si stoc.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                <div className="space-y-4">
                                    <h3 className="text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase">
                                        Setari produs
                                    </h3>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-2">
                                            <label className="ml-1 block text-sm font-medium text-gray-700">
                                                Categorii (mock)
                                            </label>
                                            <Button
                                                onlyIcon
                                                kind="ghost"
                                                color="secondary"
                                                size="xs"
                                            >
                                                <Plus size={14} />
                                            </Button>
                                        </div>
                                        <div className="rounded-xl border border-black/8 bg-gray-50 p-3.5">
                                            <div className="flex flex-wrap gap-2">
                                                {categories.map((category) => (
                                                    <button
                                                        key={category.id}
                                                        type="button"
                                                        className="inline-flex items-center gap-1 rounded-full border border-[#FE5F00]/20 bg-[#FE5F00]/8 px-3 py-1 text-xs font-medium text-[#D24E00]"
                                                    >
                                                        <Check size={12} />
                                                        {category.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-2">
                                            <label className="ml-1 block text-sm font-medium text-gray-700">
                                                Ingrediente (mock)
                                            </label>
                                            <Button
                                                onlyIcon
                                                kind="ghost"
                                                color="secondary"
                                                size="xs"
                                            >
                                                <Plus size={14} />
                                            </Button>
                                        </div>
                                        <div className="rounded-xl border border-black/8 bg-gray-50 p-3.5">
                                            <div className="flex flex-wrap gap-2">
                                                {ingredients.map((ingredient) => (
                                                    <button
                                                        key={ingredient}
                                                        type="button"
                                                        className="inline-flex items-center gap-1 rounded-full border border-[#FE5F00]/20 bg-[#FE5F00]/8 px-3 py-1 text-xs font-medium text-[#D24E00]"
                                                    >
                                                        <Check size={12} />
                                                        {ingredient}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase">
                                        Stoc
                                    </h3>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <InputRoot>
                                            <InputLabel>Stoc disponibil</InputLabel>
                                            <InputControl>
                                                <InputField type="number" defaultValue="120" />
                                            </InputControl>
                                        </InputRoot>

                                        <InputRoot>
                                            <InputLabel>Prag minim stoc</InputLabel>
                                            <InputControl>
                                                <InputField type="number" defaultValue="10" />
                                            </InputControl>
                                        </InputRoot>
                                    </div>

                                    <InputRoot>
                                        <InputLabel>SKU intern (mock)</InputLabel>
                                        <InputControl>
                                            <InputField defaultValue="PRD-FAKE-0001" />
                                        </InputControl>
                                    </InputRoot>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end border-t border-gray-100 pt-5">
                                <Button kind="outline" color="secondary">
                                    Salveaza (demo)
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {activeTab === "translations" && (
                    <div className="grid grid-cols-1 gap-5">
                        {localeConfig.map((locale) => (
                            <Card key={locale.key} spacing="lg">
                                <h2 className="mb-4 text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase">
                                    {locale.label}
                                </h2>

                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                    <InputRoot>
                                        <InputLabel>Nume produs</InputLabel>
                                        <InputControl>
                                            <InputField
                                                placeholder={`Ex: Margherita (${locale.key.toUpperCase()})`}
                                            />
                                        </InputControl>
                                    </InputRoot>

                                    <InputRoot>
                                        <InputLabel>Adresa URL</InputLabel>
                                        <InputControl>
                                            <InputField
                                                placeholder={`/${
                                                    locale.key
                                                }/produse/margherita-demo`}
                                            />
                                        </InputControl>
                                    </InputRoot>

                                    <div className="lg:col-span-2">
                                        <label className="mb-1.5 ml-1 block text-sm font-medium text-gray-700">
                                            Descriere scurta
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="Descriere scurta pentru lista de produse"
                                            className="w-full resize-y rounded-lg border border-black/8 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-gray-700 transition outline-none focus:border-[#FE5F00]/40 focus:bg-white focus:shadow-[0_0_0_3px_rgba(254,95,0,0.06)]"
                                        />
                                    </div>

                                    <InputRoot>
                                        <InputLabel>Meta titlu</InputLabel>
                                        <InputControl>
                                            <InputField placeholder="Meta title demo" />
                                        </InputControl>
                                    </InputRoot>

                                    <div>
                                        <label className="mb-1.5 ml-1 block text-sm font-medium text-gray-700">
                                            Meta descriere
                                        </label>
                                        <textarea
                                            rows={2}
                                            placeholder="Meta description demo"
                                            className="w-full resize-y rounded-lg border border-black/8 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-gray-700 transition outline-none focus:border-[#FE5F00]/40 focus:bg-white focus:shadow-[0_0_0_3px_rgba(254,95,0,0.06)]"
                                        />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}

                {activeTab === "images" && (
                    <Card tone="dashed" className="p-8 text-center">
                        <p className="text-sm text-gray-500">
                            Tab imagini ramas gol momentan (UI only).
                        </p>
                    </Card>
                )}
            </div>
        </section>
    )
}
