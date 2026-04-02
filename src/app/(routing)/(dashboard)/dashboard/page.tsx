"use client"

import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"
import { useMemo, useState } from "react"

type Interval = "daily" | "monthly" | "yearly"
type StatusKey = "success" | "failed" | "pending"

type PurchasePoint = {
    label: string
    success: number
    failed: number
    pending: number
}

const STATUS: Array<{ key: StatusKey; label: string; color: string }> = [
    { key: "success", label: "Success", color: "#22c55e" },
    { key: "failed", label: "Failed", color: "#ef4444" },
    { key: "pending", label: "În așteptare", color: "#f59e0b" },
]

function buildMockSeries(interval: Interval): PurchasePoint[] {
    // Mock data - înlocuiește ulterior cu date din API/DB.
    if (interval === "daily") {
        return [
            { label: "20.03", success: 254, failed: 28, pending: 41 },
            { label: "21.03", success: 236, failed: 34, pending: 43 },
            { label: "22.03", success: 243, failed: 31, pending: 38 },
            { label: "23.03", success: 167, failed: 22, pending: 29 },
            { label: "24.03", success: 226, failed: 26, pending: 33 },
            { label: "25.03", success: 181, failed: 19, pending: 27 },
            { label: "26.03", success: 170, failed: 17, pending: 26 },
            { label: "27.03", success: 169, failed: 15, pending: 24 },
            { label: "28.03", success: 192, failed: 21, pending: 28 },
            { label: "29.03", success: 178, failed: 18, pending: 26 },
            { label: "30.03", success: 177, failed: 17, pending: 25 },
        ]
    }

    if (interval === "monthly") {
        return [
            { label: "Ian", success: 1181, failed: 91, pending: 142 },
            { label: "Feb", success: 1098, failed: 96, pending: 131 },
            { label: "Mar", success: 1172, failed: 88, pending: 124 },
            { label: "Apr", success: 1233, failed: 93, pending: 136 },
            { label: "Mai", success: 1141, failed: 86, pending: 119 },
            { label: "Iun", success: 1205, failed: 90, pending: 128 },
        ]
    }

    return [
        { label: "2022", success: 5217, failed: 2430, pending: 2787 },
        { label: "2023", success: 5632, failed: 2511, pending: 2914 },
        { label: "2024", success: 6029, failed: 2660, pending: 3110 },
        { label: "2025", success: 6512, failed: 2849, pending: 3297 },
        { label: "2026", success: 2190, failed: 1021, pending: 1211 },
    ]
}

function formatCompact(n: number) {
    // Mic utilitar pentru a arăta cifre mai compacte (ex: 1200 -> 1.2k)
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
    if (n >= 10_000) return `${Math.round(n / 1_000)}k`
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`
    return `${n}`
}

export default function BoardPage() {
    const [interval, setInterval] = useState<Interval>("daily")

    const series = useMemo(() => buildMockSeries(interval), [interval])

    const totals = useMemo(() => {
        return series.reduce(
            (acc, point) => {
                acc.success += point.success
                acc.failed += point.failed
                acc.pending += point.pending
                return acc
            },
            { success: 0, failed: 0, pending: 0 },
        )
    }, [series])

    const maxVal = useMemo(() => {
        // Pentru area chart stacked, valoarea maximă e suma pe fiecare punct.
        return Math.max(1, ...series.map((p) => p.success + p.failed + p.pending))
    }, [series])

    const ticks = 5
    const tickValues = useMemo(
        () => Array.from({ length: ticks + 1 }, (_, i) => (maxVal * i) / ticks),
        [maxVal],
    )

    const rotateAngle = interval === "daily" ? -45 : interval === "monthly" ? -20 : 0
    const rotateTextAnchor = rotateAngle === 0 ? "middle" : "end"
    const statusTotals = totals.success + totals.failed + totals.pending

    const chartHeight = 360
    const chartBottomMargin = rotateAngle === 0 ? 60 : rotateAngle === -20 ? 75 : 88
    const chartMargin = { top: 22, right: 18, left: 62, bottom: chartBottomMargin }

    const chartCardPaddingPx = 24 // p-6 in Tailwind (1.5rem)

    return (
        <section className="w-full">
            <div className="w-full rounded-2xl border border-gray-100 bg-white p-6">
                <div className="flex flex-col gap-4 p-4 md:flex-row md:items-start md:justify-between">
                    <div>
                        <div className="text-sm font-semibold text-gray-900">
                            Statistice cumpărări
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                            Success, Failed și În așteptare (mock data)
                        </div>
                    </div>

                    <div className="inline-flex overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-1">
                        <button
                            type="button"
                            onClick={() => setInterval("daily")}
                            className={[
                                "px-3 py-1.5 text-xs font-semibold transition-colors",
                                interval === "daily"
                                    ? "bg-white text-gray-900"
                                    : "text-gray-500 hover:text-gray-800",
                            ].join(" ")}
                        >
                            Zilnic
                        </button>
                        <button
                            type="button"
                            onClick={() => setInterval("monthly")}
                            className={[
                                "px-3 py-1.5 text-xs font-semibold transition-colors",
                                interval === "monthly"
                                    ? "bg-white text-gray-900"
                                    : "text-gray-500 hover:text-gray-800",
                            ].join(" ")}
                        >
                            Lunar
                        </button>
                        <button
                            type="button"
                            onClick={() => setInterval("yearly")}
                            className={[
                                "px-3 py-1.5 text-xs font-semibold transition-colors",
                                interval === "yearly"
                                    ? "bg-white text-gray-900"
                                    : "text-gray-500 hover:text-gray-800",
                            ].join(" ")}
                        >
                            Anual
                        </button>
                    </div>
                </div>

                <div className="mt-6 space-y-6">
                    <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-6">
                        <div className="h-[360px] min-h-0 w-full min-w-0 overflow-hidden">
                            <ResponsiveContainer width="100%" height={chartHeight}>
                                <AreaChart data={series} margin={chartMargin}>
                                    <CartesianGrid
                                        stroke="rgba(0,0,0,0.06)"
                                        strokeDasharray="4 4"
                                        vertical={false}
                                    />
                                    <XAxis
                                        dataKey="label"
                                        interval={0}
                                        tick={{
                                            fontSize: 11,
                                            angle: rotateAngle,
                                            textAnchor: rotateTextAnchor,
                                            fill: "rgba(0,0,0,0.55)",
                                        }}
                                    />
                                    <YAxis
                                        ticks={tickValues}
                                        domain={[0, maxVal]}
                                        tickFormatter={(value) => formatCompact(Number(value))}
                                        tick={{ fontSize: 11, fill: "rgba(0,0,0,0.55)" }}
                                    />
                                    <Tooltip />

                                    <Area
                                        type="monotone"
                                        dataKey="success"
                                        stackId="a"
                                        stroke={
                                            STATUS.find((s) => s.key === "success")?.color ??
                                            "#22c55e"
                                        }
                                        fill={
                                            STATUS.find((s) => s.key === "success")?.color ??
                                            "#22c55e"
                                        }
                                        fillOpacity={0.35}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="failed"
                                        stackId="a"
                                        stroke={
                                            STATUS.find((s) => s.key === "failed")?.color ??
                                            "#ef4444"
                                        }
                                        fill={
                                            STATUS.find((s) => s.key === "failed")?.color ??
                                            "#ef4444"
                                        }
                                        fillOpacity={0.28}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="pending"
                                        stackId="a"
                                        stroke={
                                            STATUS.find((s) => s.key === "pending")?.color ??
                                            "#f59e0b"
                                        }
                                        fill={
                                            STATUS.find((s) => s.key === "pending")?.color ??
                                            "#f59e0b"
                                        }
                                        fillOpacity={0.28}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div
                            className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
                            style={{
                                paddingLeft: chartMargin.left,
                                paddingRight: chartMargin.right,
                            }}
                        >
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                {STATUS.map((s) => (
                                    <div key={s.key} className="flex items-center gap-2">
                                        <span
                                            className="h-2.5 w-2.5 rounded-full"
                                            style={{ backgroundColor: s.color }}
                                        />
                                        <span className="text-xs font-semibold text-gray-600">
                                            {s.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="text-left sm:text-right">
                                <div className="text-[11px] font-semibold tracking-wide text-gray-500 uppercase">
                                    Total
                                </div>
                                <div className="text-xl font-bold text-gray-900">
                                    {statusTotals}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                        style={{
                            paddingLeft: chartCardPaddingPx + chartMargin.left,
                            paddingRight: chartCardPaddingPx + chartMargin.right,
                        }}
                    >
                        <div className="rounded-xl border border-gray-100 bg-white p-6">
                            <div className="flex items-center gap-2">
                                <span
                                    className="h-2.5 w-2.5 rounded-full"
                                    style={{
                                        backgroundColor:
                                            STATUS.find((s) => s.key === "success")?.color ??
                                            "#22c55e",
                                    }}
                                />
                                <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                    Success
                                </span>
                            </div>
                            <div className="mt-2 text-2xl font-bold text-gray-900">
                                {totals.success}
                            </div>
                        </div>
                        <div className="rounded-xl border border-gray-100 bg-white p-6">
                            <div className="flex items-center gap-2">
                                <span
                                    className="h-2.5 w-2.5 rounded-full"
                                    style={{
                                        backgroundColor:
                                            STATUS.find((s) => s.key === "failed")?.color ??
                                            "#ef4444",
                                    }}
                                />
                                <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                    Failed
                                </span>
                            </div>
                            <div className="mt-2 text-2xl font-bold text-gray-900">
                                {totals.failed}
                            </div>
                        </div>
                        <div className="rounded-xl border border-gray-100 bg-white p-6">
                            <div className="flex items-center gap-2">
                                <span
                                    className="h-2.5 w-2.5 rounded-full"
                                    style={{
                                        backgroundColor:
                                            STATUS.find((s) => s.key === "pending")?.color ??
                                            "#f59e0b",
                                    }}
                                />
                                <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                                    În așteptare
                                </span>
                            </div>
                            <div className="mt-2 text-2xl font-bold text-gray-900">
                                {totals.pending}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
