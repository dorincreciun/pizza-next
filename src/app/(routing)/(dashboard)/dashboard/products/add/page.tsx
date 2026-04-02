"use client"

import { useState } from "react"
import { Check, ImagePlus, Languages, LayoutGrid, PackagePlus } from "lucide-react"
import { Button, InputControl, InputField, InputLabel, InputRoot } from "@shared/ui"

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

const ingredients = [
    "Mozzarella",
    "Sos de rosii",
    "Busuioc",
    "Pepperoni",
    "Ciuperci",
    "Parmezan",
]

const localeConfig: Array<{ key: LocaleKey; label: string }> = [
    { key: "ro", label: "Romana (RO)" },
    { key: "en", label: "Engleza (EN)" },
    { key: "ru", label: "Rusa (RU)" },
]

export default function AddProductPage() {
    const [activeTab, setActiveTab] = useState<TabKey>("general")

    return (
        <section className="w-full pb-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-6">
                <header className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FE5F00]/10 text-[#FE5F00]">
                            <PackagePlus size={18} />
                        </span>
                        <div>
                            <h1 className="text-xl font-semibold text-gray-900">Adaugare produs</h1>
                            <p className="text-sm text-gray-500">
                                UI demo cu date fake. Nu include functionalitate.
                            </p>
                        </div>
                    </div>

                    <div className="inline-flex w-full flex-wrap gap-2 rounded-xl bg-gray-50 p-1">
                        {TABS.map((tab) => {
                            const Icon = tab.icon
                            const isActive = activeTab === tab.key

                            return (
                                <button
                                    key={tab.key}
                                    type="button"
                                    onClick={() => setActiveTab(tab.key)}
                                    className={[
                                        "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-500 hover:text-gray-800",
                                    ].join(" ")}
                                >
                                    <Icon size={15} />
                                    {tab.label}
                                </button>
                            )
                        })}
                    </div>
                </header>

                {activeTab === "general" && (
                    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div className="space-y-4">
                                <h2 className="text-sm font-semibold tracking-wide text-gray-700 uppercase">
                                    Setari produs
                                </h2>

                                <div className="space-y-2">
                                    <label className="ml-1 block text-sm font-medium text-gray-700">
                                        Categorie
                                    </label>
                                    <select
                                        defaultValue="pizza"
                                        className="h-11 w-full rounded-lg border border-black/10 bg-[#FAFAFA] px-3.5 text-sm text-gray-700 outline-none transition focus:border-[#FE5F00]/40 focus:bg-white focus:shadow-[0_0_0_3px_rgba(254,95,0,0.06)]"
                                    >
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="ml-1 block text-sm font-medium text-gray-700">
                                        Ingrediente (mock)
                                    </label>
                                    <div className="rounded-xl border border-black/8 bg-[#FAFAFA] p-3">
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
                                <h2 className="text-sm font-semibold tracking-wide text-gray-700 uppercase">
                                    Stoc
                                </h2>

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

                        <div className="mt-6 flex justify-end">
                            <Button kind="outline" color="secondary">
                                Salveaza (demo)
                            </Button>
                        </div>
                    </div>
                )}

                {activeTab === "translations" && (
                    <div className="grid grid-cols-1 gap-5">
                        {localeConfig.map((locale) => (
                            <article
                                key={locale.key}
                                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                            >
                                <h2 className="mb-4 text-sm font-semibold tracking-wide text-gray-700 uppercase">
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
                                            className="w-full resize-y rounded-lg border border-black/8 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-gray-700 outline-none transition focus:border-[#FE5F00]/40 focus:bg-white focus:shadow-[0_0_0_3px_rgba(254,95,0,0.06)]"
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
                                            className="w-full resize-y rounded-lg border border-black/8 bg-[#FAFAFA] px-3.5 py-2.5 text-sm text-gray-700 outline-none transition focus:border-[#FE5F00]/40 focus:bg-white focus:shadow-[0_0_0_3px_rgba(254,95,0,0.06)]"
                                        />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {activeTab === "images" && (
                    <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-8 text-center">
                        <p className="text-sm text-gray-500">Tab imagini ramas gol momentan (UI only).</p>
                    </div>
                )}
            </div>
        </section>
    )
}
