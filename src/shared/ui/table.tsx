import type { HTMLAttributes, ReactNode, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react"
import { cn } from "@shared/utils/cn"

// --- TYPES ---

export interface TableRootProps extends TableHTMLAttributes<HTMLTableElement> {
    className?: string
}

export interface TableContainerProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

export interface TableSectionProps extends HTMLAttributes<HTMLTableSectionElement> {
    className?: string
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    className?: string
}

export interface TableHeadCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
    className?: string
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
    className?: string
}

export interface TableEmptyStateProps {
    colSpan: number
    title?: string
    description?: string
}

// --- COMPONENTS ---

/**
 * Container cu scroll orizontal pentru tabele late.
 * Folosește-l în jurul componentei `Table.Root`.
 */
export const TableContainer = ({ className, children, ...props }: TableContainerProps) => {
    return (
        <div className={cn("overflow-x-auto [-webkit-overflow-scrolling:touch]", className)} {...props}>
            {children}
        </div>
    )
}

/**
 * Elementul principal `<table>`.
 * Include stiluri implicite pentru layout stabil și responsive.
 */
export const TableRoot = ({ className, children, ...props }: TableRootProps) => {
    return (
        <table
            className={cn("w-full min-w-[1100px] table-auto border-separate border-spacing-0", className)}
            {...props}
        >
            {children}
        </table>
    )
}

/**
 * `<thead>` cu fundal subtil pentru antetul tabelului.
 */
export const TableHead = ({ className, children, ...props }: TableSectionProps) => {
    return (
        <thead className={cn("bg-gray-50/80", className)} {...props}>
            {children}
        </thead>
    )
}

/**
 * `<tbody>` cu separatoare între rânduri.
 */
export const TableBody = ({ className, children, ...props }: TableSectionProps) => {
    return (
        <tbody className={cn("divide-y divide-gray-100", className)} {...props}>
            {children}
        </tbody>
    )
}

/**
 * Rând de tabel.
 * Pentru hover state poți suprascrie prin `className`.
 */
export const TableRow = ({ className, children, ...props }: TableRowProps) => {
    return (
        <tr className={cn("transition-colors", className)} {...props}>
            {children}
        </tr>
    )
}

/**
 * Celulă de antet (`<th>`), utilă pentru capul de coloană.
 */
export const TableHeadCell = ({ className, children, ...props }: TableHeadCellProps) => {
    return (
        <th className={cn("px-4 py-3.5 text-left text-xs font-semibold text-gray-500", className)} {...props}>
            {children}
        </th>
    )
}

/**
 * Celulă standard (`<td>`), cu spacing consistent.
 */
export const TableCell = ({ className, children, ...props }: TableCellProps) => {
    return (
        <td className={cn("px-4 py-4 align-middle", className)} {...props}>
            {children}
        </td>
    )
}

/**
 * Empty state predefinit pentru tabele fără date.
 */
export const TableEmptyState = ({
    colSpan,
    title = "Nicio înregistrare",
    description = "Nu există date pentru afișare.",
}: TableEmptyStateProps) => {
    return (
        <TableRow>
            <TableCell colSpan={colSpan} className="px-4 py-10 text-center">
                <div className="text-sm font-medium text-gray-700">{title}</div>
                <div className="mt-1 text-xs text-gray-500">{description}</div>
            </TableCell>
        </TableRow>
    )
}

export const Table = {
    Container: TableContainer,
    Root: TableRoot,
    Head: TableHead,
    Body: TableBody,
    Row: TableRow,
    HeadCell: TableHeadCell,
    Cell: TableCell,
    EmptyState: TableEmptyState,
}

export type TableComponent = typeof Table
export type TableNamespace = {
    Container: typeof TableContainer
    Root: typeof TableRoot
    Head: typeof TableHead
    Body: typeof TableBody
    Row: typeof TableRow
    HeadCell: typeof TableHeadCell
    Cell: typeof TableCell
    EmptyState: typeof TableEmptyState
}

